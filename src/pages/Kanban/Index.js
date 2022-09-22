import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ScrollView from "devextreme-react/scroll-view";
import Sortable from "devextreme-react/sortable";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import {
  openEditProfileModal,
  setCurrentPage,
  showForm,
} from "../../features/config/configData";

import {
  Content,
  ErrorContainer,
  LoadingContainer,
  Wrapper,
} from "./Kanban.styles";

import { BiBookAdd, BiError } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";

import PageHeader from "../../components/PageHeader/Index";
import EditModal from "../../components/EditModal/Index";
import Spinner from "../../components/Spinner/Index";
import Button from "../../components/Button/Index";

import noKanbanSvg from "../../assets/no-kanban.svg";

// Lazily loaded themes for DE Components
const LightTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/LightTheme")
);
const DarkTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/DarkTheme")
);

// DE Theme
const DETheme = ({ children }) => {
  const CHOSEN_THEME =
    useSelector((state) => state.schoolData.data.settings?.theme) ?? "Light";
  return (
    <>
      <React.Suspense fallback={<></>}>
        {CHOSEN_THEME.trim() === "Light" && <LightTheme />}
        {CHOSEN_THEME.trim() === "Dark" && <DarkTheme />}
      </React.Suspense>
      {children}
    </>
  );
};

// Kanban task card component
function Card({ task, taskId, kanbanLists, setKanbanState }) {
  const handleDelete = (id) => {
    const alteredLists = kanbanLists;
    alteredLists.forEach((list) => {
      list.forEach((task, i) => {
        if (task.statement_id === taskId) {
          list.splice(i, 1);
        }
      });
    });
    setKanbanState((prevState) => ({
      ...prevState,
      lists: alteredLists,
    }));
  };
  return (
    <div className="card dx-card dx-theme-text-color dx-theme-background-color">
      <div className={`card-priority priority-${task.priorityLevel}`}></div>
      <div className="card-subject">{task.subject}</div>
      <div className="card-assignee">{task.description}</div>
      <div className="card-delete" onClick={() => handleDelete(taskId)}>
        ❌
      </div>
    </div>
  );
}

// Kanban list component
function List({
  title,
  index,
  tasks,
  onTaskDragStart,
  onTaskDrop,
  kanbanLists,
  setKanbanState,
}) {
  return (
    <div className="list">
      <div className="list-title dx-theme-text-color">{title}</div>
      <ScrollView
        className="scrollable-list"
        direction="vertical"
        showScrollbar="always"
      >
        <Sortable
          className="sortable-cards"
          group="cardsGroup"
          data={index}
          onDragStart={onTaskDragStart}
          onReorder={onTaskDrop}
          onAdd={onTaskDrop}
        >
          {tasks.map((task) => (
            <Card
              key={task.statement_id}
              taskId={task.statement_id}
              task={task}
              kanbanLists={kanbanLists}
              setKanbanState={setKanbanState}
            ></Card>
          ))}
        </Sortable>
      </ScrollView>
    </div>
  );
}

// Initial statuses array if school has none
const statuses = [
  "Not Started",
  "Deferred",
  "Need Assistance",
  "In Progress",
  "Completed",
];

function Kanban(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_BASE_URL
      : "";

  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const { kanban: tasks, kanbanListOrder } = useSelector(
    (state) => state.schoolData?.data
  );
  const { isEditProfileModalOpen } = useSelector((state) => state.config);
  const authToken = useSelector((state) => state.schoolAuth.token);

  const lists = useMemo(() => {
    if (tasks === undefined) return [];
    const Lists = [];
    const newStatuses = kanbanListOrder ? kanbanListOrder : statuses;
    newStatuses.forEach((status) => {
      Lists.push(
        tasks.filter(
          (task) => task.status.trim().split("- ").join(" ") === status
        )
      );
    });
    return Lists;
  }, [tasks, kanbanListOrder]);

  const [kanbanState, setKanbanState] = useState({
    statuses,
    lists,
  });

  const handleCreateKanban = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    if (schoolData.templates?.kanban === undefined) {
      dispatch(openEditProfileModal());
      return dispatch(showForm("createKanban"));
    }

    dispatch(openEditProfileModal());
    dispatch(showForm("addKanban"));
  };

  const handleCreateTemplate = () => {
    dispatch(openEditProfileModal());
    dispatch(showForm("createKanbanTemplate"));
  };

  const handleNewKanbanCard = () => {
    dispatch(openEditProfileModal());
    dispatch(showForm("addKanban"));
  };

  const redirect = (location) => {
    if (location === "home") {
      localStorage.removeItem("schoolCredentials");
      return navigate("/");
    } else {
      localStorage.removeItem("schoolCredentials");
      return navigate("/login");
    }
  };

  function reorder(items, item, fromIndex, toIndex) {
    let result = JSON.parse(JSON.stringify(items));

    result.splice(fromIndex, 1);
    result.splice(toIndex, 0, item);
    console.log(items);

    return result;
  }

  function onListReorder(e) {
    const lists = reorder(
      kanbanState.lists,
      kanbanState.lists[e.fromIndex],
      e.fromIndex,
      e.toIndex
    );
    const statuses = reorder(
      kanbanState.statuses,
      kanbanState.statuses[e.fromIndex],
      e.fromIndex,
      e.toIndex
    );
    setKanbanState({
      lists,
      statuses,
    });
  }

  function onTaskDragStart(e) {
    e.itemData = kanbanState.lists[e.fromData][e.fromIndex];
  }

  function onTaskDrop(e) {
    updateTask(e.fromData, e.itemData, e.fromIndex, -1);
    updateTask(e.toData, e.itemData, -1, e.toIndex);
  }
  function taskReorder(items, item, fromIndex, toIndex) {
    let result = items;
    if (fromIndex >= 0) {
      result.splice(fromIndex, 1);
    }

    if (toIndex >= 0) {
      result = [...items.slice(0, toIndex), item, ...items.slice(toIndex)];
    }

    return result;
  }

  function updateTask(listIndex, itemData, fromIndex, toIndex) {
    const lists = kanbanState.lists.slice();

    lists[listIndex] = taskReorder(
      lists[listIndex],
      itemData,
      fromIndex,
      toIndex
    );

    setKanbanState((prev) => ({
      ...prev,
      lists,
    }));
  }

  // Get kanban list from database and update client kanban list
  useEffect(() => {
    if (lists === undefined) return;
    setKanbanState((prev) => ({
      ...prev,
      lists,
    }));
  }, [lists]);

  // Update kanban list and list order in database
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (kanbanState.lists.length < 1 || kanbanState.statuses.length < 1) return;

    //  Prepare kanban board data for upload to mongoDB
    let Lists = [...JSON.parse(JSON.stringify(kanbanState.lists))];

    Lists.forEach((list, outerIndex) => {
      list.forEach((l) => {
        if (
          l.status.trim().split("- ").join(" ") !==
          kanbanState.statuses[outerIndex]
        ) {
          l.status =
            " " + kanbanState.statuses[outerIndex].split(" ").join("- ");
        }
      });
    });

    Lists = Lists.filter((newList) => newList.length > 0).flat();

    // Upload kanban board updates to mongoDB
    const updateKanbanList = async () => {
      try {
        const serverResponse = await axios({
          url: `${baseUrl}/api/schools/${schoolId}/kanban/update`,
          method: "POST",
          data: { tasks: Lists, listOrder: kanbanState.statuses },
          headers: {
            Authorization: `Bearer ${schoolToken}`,
          },
          signal,
        });
        console.log(serverResponse);
      } catch (error) {
        if (axios.isCancel(error)) return;

        console.log(error);
      }
    };

    updateKanbanList();

    return () => {
      abortController.abort(signal);
    };
  }, [kanbanState, schoolId, schoolToken, baseUrl]);

  // Fetch school data
  useEffect(() => {
    if (message !== null && message.includes("jwt expired")) {
      localStorage.removeItem("schoolCredentials");
      dispatch(resetSchoolAuth());
      dispatch(resetSchoolData());
      navigate("/login");
    }
    if (message !== null && message.includes("User not authorized")) {
      localStorage.removeItem("schoolCredentials");
      dispatch(resetSchoolAuth());
      dispatch(resetSchoolData());
      navigate("/login");
    }

    dispatch(fetchSchoolData(authToken));
  }, [authToken, dispatch, navigate, message]);

  // Set current page
  useEffect(() => {
    dispatch(setCurrentPage("kanban"));
  }, [dispatch]);

  return (
    <Wrapper isSuccess={isSuccess ? true : false}>
      {isEditProfileModalOpen && <EditModal />}
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isSuccess && (
        <Content>
          <main>
            <PageHeader title="Kanban" />
            {(!tasks || tasks.length <= 0) && (
              <div className="create-kanban">
                <img alt="add-student" src={noKanbanSvg}></img>
                <p>No Kanban data found.</p>
                <div className="create-kanban-button-group">
                  <button onClick={handleCreateKanban}>
                    <BsPersonPlus style={{ fontSize: "2rem" }} />
                    <span>Add Kanban Card</span>
                  </button>
                  <button onClick={handleCreateTemplate}>
                    <IoCreateOutline style={{ fontSize: "2rem" }} />
                    <span>Create Kanban Card Template</span>
                  </button>
                </div>
              </div>
            )}
            {tasks !== undefined && !isLoading && tasks.length && (
              <>
                <div className="available-kanban">
                  <Button callback={handleNewKanbanCard}>
                    <BiBookAdd style={{ fontSize: "1.4rem" }} />
                    <span>Add Kanban Card</span>
                  </Button>
                  <DETheme>
                    <div id="kanban">
                      <ScrollView
                        className="scrollable-board"
                        direction="horizontal"
                        showScrollbar="always"
                      >
                        <Sortable
                          className="sortable-lists"
                          itemOrientation="horizontal"
                          handle=".list-title"
                          onReorder={onListReorder}
                        >
                          {kanbanState.lists.map((tasks, listIndex) => {
                            const status = kanbanState.statuses[listIndex];
                            return (
                              <List
                                key={status}
                                title={status}
                                index={listIndex}
                                tasks={tasks}
                                onTaskDragStart={onTaskDragStart}
                                onTaskDrop={onTaskDrop}
                                kanbanLists={kanbanState.lists}
                                setKanbanState={setKanbanState}
                              ></List>
                            );
                          })}
                        </Sortable>
                      </ScrollView>
                    </div>
                  </DETheme>
                  <div className="priority-color-codes">
                    <h4 className="priority-color-codes_title">
                      Priority color codes:
                    </h4>
                    <ul className="priority-color-codes_box">
                      <li className="priority-color-codes_number">
                        <span>1</span>
                        <div className="priority-color-codes_color"></div>
                      </li>
                      <li className="priority-color-codes_number">
                        <span>2</span>
                        <div className="priority-color-codes_color"></div>
                      </li>
                      <li className="priority-color-codes_number">
                        <span>3</span>
                        <div className="priority-color-codes_color"></div>
                      </li>
                      <li className="priority-color-codes_number">
                        <span>4</span>
                        <div className="priority-color-codes_color"></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="instructions-panel">
                  <h3>Instructions Panel</h3>
                  <ul>
                    <li>
                      <span>
                        Click and drag list title to any position to re-arrange
                        lists.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click and drag tasks to re-order tasks in each list or
                        change their position across all lists.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click on the "Add kanban card" button to add another
                        task to your kanban board.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click on ❌ to delete or remove task from kanban.
                      </span>
                    </li>
                    <li>
                      <span>
                        Don't worry about losing changes made like
                        re-arrangement of lists or re-ordering of tasks as those
                        changes are saved behind the scenes.
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </main>
        </Content>
      )}
      {isError && (
        <ErrorContainer>
          <BiError
            style={{
              color: "red",
              fontSize: "5rem",
            }}
          />
          <p>
            {message.includes("jwt expired")
              ? "Timeout"
              : `${message}, try refreshing the page.`}
          </p>
          <div className="button-group">
            <button onClick={() => redirect("home")}>Go to homepage</button>
            <button onClick={() => redirect("login")}>Go to Sign in</button>
          </div>
        </ErrorContainer>
      )}
    </Wrapper>
  );
}

export default Kanban;
