import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  Column,
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Filter,
  IFilter,
  Inject,
  Grid,
  VirtualScroll,
  Sort,
  ContextMenu,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";

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

import { FaSignOutAlt } from "react-icons/fa";
import { BsPersonPlus } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { MdMessage, MdNotifications, MdSettings } from "react-icons/md";
import { BiError } from "react-icons/bi";

import { Wrapper, Content } from "./Students.styles";
import EditModal from "../../components/EditModal/Index";

import noStudentSvg from "../../assets/no-student.svg";
import {
  ErrorContainer,
  LoadingContainer,
} from "../SchoolDashboard/SchoolDashboard.styles";
import Spinner from "../../components/Spinner/Index";

const AvatarTemplate = (props) => {
  return (
    <div className="student-avatar">
      <img alt="" src={props.image} />
    </div>
  );
};

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token: authToken } = useSelector((state) => state.schoolAuth);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);
  const { students } = useSelector((state) => state.schoolData.data);
  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);

  const redirect = (location) => {
    if (location === "home") {
      localStorage.removeItem("schoolCredentials");
      return navigate("/");
    } else {
      localStorage.removeItem("schoolCredentials");
      return navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("schoolCredentials");
    dispatch(resetSchoolAuth());
    dispatch(resetSchoolData());
    navigate("/login");
  };

  const handleCreateStudent = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    if (schoolData.templates?.students === undefined) {
      dispatch(openEditProfileModal());
      return dispatch(showForm("createStudent"));
    }

    dispatch(openEditProfileModal());
    return dispatch(showForm("studentRegistration"));
  };

  const handleCreateTemplate = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    dispatch(openEditProfileModal());
    dispatch(showForm("createStudentTemplate"));
  };

  const contextMenuItems = [
    "AutoFit",
    "AutoFitAll",
    "SortAscending",
    "SortDescending",
    "Copy",
    "Edit",
    "Delete",
    "Save",
    "Cancel",
    "PdfExport",
    "ExcelExport",
    "CsvExport",
    "FirstPage",
    "PrevPage",
    "LastPage",
    "NextPage",
  ];

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
  }, []);

  useEffect(() => {
    dispatch(setCurrentPage("students"));
  }, [dispatch]);

  // TODO Begin working on student page ASAP.
  return (
    <Wrapper>
      {isEditProfileModalOpen && <EditModal />}
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isSuccess && (
        <Content>
          <main>
            <header>
              <h1>Students</h1>
              <ul>
                <li>
                  <MdMessage style={{ fontSize: "1.4rem" }} />
                  <span>Messages</span>
                </li>
                <li>
                  <MdNotifications style={{ fontSize: "1.4rem" }} />
                  <span>Notifications</span>
                </li>
                <li>
                  <MdSettings style={{ fontSize: "1.4rem" }} />
                  <span>Settings</span>
                </li>
              </ul>
              <button id="sign-out" onClick={handleLogout}>
                <FaSignOutAlt style={{ fontSize: "1.4rem" }} />
                <span>Sign out</span>
              </button>
            </header>
            {students.length < 1 && (
              <div className="create-student">
                <img alt="add-student" src={noStudentSvg}></img>
                <p>No registered student found.</p>
                <div className="create-student-button-group">
                  <button onClick={handleCreateStudent}>
                    <BsPersonPlus style={{ fontSize: "2rem" }} />
                    <span>Register Student</span>
                  </button>
                  <button onClick={handleCreateTemplate}>
                    <IoCreateOutline style={{ fontSize: "2rem" }} />
                    <span>Create Register Template</span>
                  </button>
                </div>
              </div>
            )}
            <div className="available-students">
              <button onClick={handleCreateStudent}>
                <BsPersonPlus style={{ fontSize: "2rem" }} />
                <span>Register Student</span>
              </button>
            </div>
            <div id="grid-container">
              <GridComponent
                dataSource={students}
                id="grid-component"
                width="fit-content"
                allowSorting={true}
                allowExcelExport={true}
                allowPdfExport={true}
                contextMenuItems={contextMenuItems}
                enableVirtualization={true}
                height="600"
              >
                <ColumnsDirective id="columns-directive">
                  <ColumnDirective
                    type="checkbox"
                    allowSorting={false}
                    allowFiltering={false}
                    width="30"
                    textAlign="center"
                  ></ColumnDirective>
                  <ColumnDirective
                    field={"image"}
                    headerText={""}
                    template={AvatarTemplate}
                    width="60"
                    textAlign="center"
                    id="column-directive"
                  />
                  {Object.entries(students[0]).map(
                    (entry, i) =>
                      entry[0] !== "image" && (
                        <ColumnDirective
                          key={i}
                          field={entry[0]}
                          headerText={entry[0]
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, function (str) {
                              return str.toUpperCase();
                            })}
                          width="100"
                          textAlign="left"
                          id="column-directive"
                        />
                      )
                  )}
                </ColumnsDirective>
                <Inject
                  services={[
                    Filter,
                    VirtualScroll,
                    Sort,
                    ContextMenu,
                    ExcelExport,
                    PdfExport,
                  ]}
                />
              </GridComponent>
            </div>
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

export default Students;
