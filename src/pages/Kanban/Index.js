import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { FaSignOutAlt } from "react-icons/fa";
import { MdMessage, MdNotifications, MdSettings } from "react-icons/md";
import { BiBookAdd, BiError } from "react-icons/bi";

import PageHeader from "../../components/PageHeader/Index";
import EditModal from "../../components/EditModal/Index";
import Spinner from "../../components/Spinner/Index";
import noDataSvg from "../../assets/no-data.svg";
import { BsPersonPlus } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

import noKanbanSvg from "../../assets/no-kanban.svg";
import Button from "../../components/Button/Index";
import { TbListDetails } from "react-icons/tb";
import Options from "../../components/Options/Index";
import { useLayoutEffect } from "react";

const LightTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/LightTheme")
);
const DarkTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/DarkTheme")
);

const DETheme = ({ children }) => {
  const CHOSEN_THEME =
    useSelector((state) => state.schoolData.data.settings.theme) ?? "Light";
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

const Card = ({ task }) => {
  return (
    <div className="card dx-card dx-theme-text-color dx-theme-background-color">
      <div className={`card-priority priority-${task.priorityLevel}`}></div>
      <div className="card-subject">{task.subject}</div>
      <div className="card-assignee">{task.description}</div>
    </div>
  );
};

const List = ({
  title,
  index,
  tasks,
  employeesMap,
  onTaskDragStart,
  onTaskDrop,
}) => {
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
            <Card key={task.Task_ID} task={task}></Card>
          ))}
        </Sortable>
      </ScrollView>
    </div>
  );
};

const Kanban = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statuses = useRef([
    "Not Started",
    "Need Assistance",
    "In Progress",
    "Deferred",
    "Completed",
  ]);

  const [lists, setLists] = useState([]);

  const [kanbanState, setKanbanState] = useState({
    statuses,
    lists,
  });

  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);
  const { kanban } = useSelector((state) => state.schoolData.data);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const createList = useCallback(() => {
    if (kanbanState.lists.length) return;
    statuses.current.forEach((status) => {
      lists.push(
        kanban.filter(
          (task) => task.status.trim().split("- ").join(" ") === status
        )
      );
    });
    console.log(kanbanState);
  }, [kanban]);

  const authToken = useSelector((state) => state.schoolAuth.token);

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

  useEffect(() => {
    dispatch(setCurrentPage("schooldashboard"));
  }, [dispatch]);

  const redirect = (location) => {
    if (location === "home") {
      localStorage.removeItem("schoolCredentials");
      return navigate("/");
    } else {
      localStorage.removeItem("schoolCredentials");
      return navigate("/login");
    }
  };

  const reorder = (items, item, fromIndex, toIndex) => {
    let result = items;
    if (fromIndex >= 0) {
      result = [...items.slice(0, fromIndex), ...items.slice(fromIndex + 1)];
    }

    if (toIndex >= 0) {
      result = [...items.slice(0, toIndex), item, ...items.slice(toIndex)];
    }

    return result;
  };

  const updateTask = (listIndex, itemData, fromIndex, toIndex) => {
    const lists = kanbanState.lists.slice();

    lists[listIndex] = reorder(lists[listIndex], itemData, fromIndex, toIndex);

    setKanbanState({
      lists,
    });
  };

  const onListReorder = (e) => {
    setKanbanState({
      lists: reorder(
        kanbanState.lists,
        kanbanState.lists[e.fromIndex],
        e.fromIndex,
        e.toIndex
      ),
      statuses: reorder(
        kanbanState.statuses,
        kanbanState.statuses[e.fromIndex],
        e.fromIndex,
        e.toIndex
      ),
    });
  };

  const onTaskDragStart = (e) => {
    e.itemData = kanbanState.lists[e.fromData][e.fromIndex];
  };

  const onTaskDrop = (e) => {
    updateTask(e.fromData, e.itemData, e.fromIndex, -1);
    updateTask(e.toData, e.itemData, -1, e.toIndex);
  };

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
            {kanban === undefined && (
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
            {!isLoading && kanban && kanban.length && (
              <>
                <div className="available-kanban">
                  <Button callback={handleNewKanbanCard}>
                    <BiBookAdd style={{ fontSize: "1.4rem" }} />
                    <span>Add kanban Card</span>
                  </Button>

                  <DETheme>
                    <div id="kanban" ref={createList}>
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
                            console.log(status);
                            return (
                              <List
                                key={status}
                                title={status}
                                index={listIndex}
                                tasks={tasks}
                                onTaskDragStart={onTaskDragStart}
                                onTaskDrop={onTaskDrop}
                              ></List>
                            );
                          })}
                        </Sortable>
                      </ScrollView>
                    </div>
                  </DETheme>
                </div>
              </>
            )}
            {/* {schoolData.kanban?.items.length && <div id="kanban">
              <ScrollView
                className="scrollable-board"
                direction="horizontal"
                showScrollbar="always"
              >
                <Sortable
                  className="sortable-lists"
                  itemOrientation="horizontal"
                  handle=".list-title"
                  onReorder={this.onListReorder}
                >
                  {this.state.lists.map((tasks, listIndex) => {
                    const status = this.state.statuses[listIndex];
                    return (
                      <List
                        key={status}
                        title={status}
                        index={listIndex}
                        tasks={tasks}
                        employeesMap={this.state.employeesMap}
                        onTaskDragStart={this.onTaskDragStart}
                        onTaskDrop={this.onTaskDrop}
                      ></List>
                    );
                  })}
                </Sortable>
              </ScrollView>
            </div>} */}
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
};

export default Kanban;
