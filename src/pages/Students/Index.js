import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Filter,
  Inject,
  Resize,
  Sort,
  Edit,
  ContextMenu,
  ExcelExport,
  PdfExport,
  Toolbar,
  Selection,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import {
  closeEditProfileModal,
  openEditProfileModal,
  setCurrentPage,
  setStudentImgUrl,
  showForm,
} from "../../features/config/configData";

import { AiOutlineFileDone } from "react-icons/ai";
import { BsPersonPlus, BsInfoCircleFill } from "react-icons/bs";
import { FaRegIdCard } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { BiError } from "react-icons/bi";

import {
  ErrorContainer,
  LoadingContainer,
} from "../SchoolDashboard/SchoolDashboard.styles";
import { Wrapper, Content } from "./Students.styles";
import EditModal from "../../components/EditModal/Index";
import PageHeader from "../../components/PageHeader/Index";
import Spinner from "../../components/Spinner/Index";
import noStudentSvg from "../../assets/no-student.svg";

// Syncfusion grid component avatar template
const AvatarTemplate = ({ image }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="student-avatar"
      onClick={() => {
        dispatch(setStudentImgUrl(image));
        dispatch(openEditProfileModal());
        dispatch(showForm("studentProfile"));
      }}
    >
      <img alt="" src={image} />
    </div>
  );
};
// Syncfusion grid component student_id template
const StudentIdTemplate = ({ student_id }) => {
  return (
    <div className="student-id">
      <FaRegIdCard style={{ fontSize: "1.4rem" }} />
      <span>{student_id}</span>
    </div>
  );
};

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_BASE_URL
      : process.env.REACT_APP_DEVELOPMENT_BASE_URL;

  const { id: schoolId, token: authToken } = useSelector(
    (state) => state.schoolAuth
  );
  const { isEditProfileModalOpen } = useSelector((state) => state.config);
  const students = useSelector((state) => state.schoolData.data?.students);
  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);

  const [savingSuccess, setSavingSuccess] = useState(false);
  const [savingError, setSavingError] = useState(false);
  const [studentsGrid, setStudentsGrid] = useState([]);

  const leaveOutData = ["image", "student_id"];

  const redirect = (location) => {
    if (location === "home") {
      localStorage.removeItem("schoolCredentials");
      return navigate("/");
    } else {
      localStorage.removeItem("schoolCredentials");
      return navigate("/login");
    }
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
  }, [authToken, dispatch, navigate, message]);

  useEffect(() => {
    students !== undefined && setStudentsGrid([...students]);
  }, [students]);

  useEffect(() => {
    dispatch(setCurrentPage("students"));
  }, [dispatch]);

  async function gridComplete(args) {
    console.log(args);
    if (args.requestType === "save") {
      dispatch(openEditProfileModal());
      dispatch(showForm("saving"));

      try {
        const data = await axios({
          url: `${baseUrl}/api/schools/${schoolId}/students/update`,
          method: "put",
          data: { type: args.requestType, data: args.data },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (
          data.status === 200 &&
          data.statusText === "OK" &&
          data.data.acknowledged === true
        ) {
          setSavingSuccess(true);
          setSavingError(false);
          dispatch(fetchSchoolData(authToken));
          setTimeout(() => dispatch(closeEditProfileModal()), 3000);
          setTimeout(() => setSavingSuccess(false), 7000);
        }
      } catch (error) {
        setSavingSuccess(false);
        setSavingError(true);
        setTimeout(() => dispatch(closeEditProfileModal()), 3000);
        setTimeout(() => setSavingError(false), 10000);
      }
    }
    if (args.requestType === "delete") {
      dispatch(openEditProfileModal());
      dispatch(showForm("saving"));

      try {
        const data = await axios({
          url: `${baseUrl}/api/schools/${schoolId}/students/update`,
          method: "put",
          data: { type: args.requestType, data: args.data },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (data.status === 200 && data.data.acknowledged === true) {
          setSavingSuccess(true);
          setSavingError(false);
          dispatch(fetchSchoolData(authToken));
          setTimeout(() => dispatch(closeEditProfileModal()), 3000);
          setTimeout(() => setSavingSuccess(false), 7000);
        }
      } catch (error) {
        setSavingSuccess(false);
        setSavingError(true);
        dispatch(closeEditProfileModal());
        setTimeout(() => setSavingError(false), 6000);
      }
    }
  }

  return (
    <Wrapper>
      {savingSuccess && (
        <div className="saving-success-message">
          <AiOutlineFileDone style={{ fontSize: "1.4rem" }} />
          <p>Changes saved successsfully.</p>
        </div>
      )}
      {savingError && (
        <div className="saving-error-message">
          <BiError style={{ fontSize: "1.4rem", paddingTop: "-5px" }} />
          <p>Changes not saved, try again later.</p>
        </div>
      )}
      {isEditProfileModalOpen && <EditModal />}
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isSuccess && (
        <Content>
          <main>
            <PageHeader title="Students" />
            {(!students || students.length < 1) && (
              <div className="create-student">
                <img alt="add-student" src={noStudentSvg}></img>
                <p>No registered student found.</p>
                <div className="create-student-button-group">
                  <button onClick={handleCreateStudent}>
                    <BsPersonPlus
                      style={{ fontSize: "2rem", color: "var(--text)" }}
                    />
                    <span>Register Student</span>
                  </button>
                  <button onClick={handleCreateTemplate}>
                    <IoCreateOutline
                      style={{ fontSize: "2rem", color: "var(--text)" }}
                    />
                    <span>Create Register Template</span>
                  </button>
                </div>
              </div>
            )}
            {students && students.length > 0 && (
              <>
                <div className="available-students">
                  <button onClick={handleCreateStudent}>
                    <BsPersonPlus style={{ fontSize: "2rem" }} />
                    <span>Register Student</span>
                  </button>
                </div>
                <div id="grid-container">
                  <GridComponent
                    dataSource={studentsGrid}
                    id="grid-component"
                    width="fit-content"
                    allowSorting={true}
                    allowExcelExport={true}
                    allowPdfExport={true}
                    contextMenuItems={contextMenuItems}
                    toolbar={["Search", "Delete", "Edit", "Cancel"]}
                    allowSelection={true}
                    allowPaging={true}
                    allowResizing={true}
                    editSettings={{ allowEditing: true, allowDeleting: true }}
                    pageSettings={{ pageCount: 10 }}
                    actionComplete={gridComplete}
                  >
                    <ColumnsDirective id="columns-directive">
                      <ColumnDirective
                        type="checkbox"
                        allowSorting={false}
                        allowFiltering={false}
                        width="40"
                        textAlign="center"
                      ></ColumnDirective>
                      <ColumnDirective
                        field={"image"}
                        headerText={"Avatar"}
                        template={AvatarTemplate}
                        width="100"
                        textAlign="center"
                        id="column-directive"
                      />
                      {Object.entries(students[0]).map(
                        (entry, i) =>
                          !leaveOutData.includes(entry[0]) &&
                          (() => {
                            switch (
                              schoolData.templates?.students[entry[0]]?.type
                            ) {
                              case "Options":
                                return (
                                  <ColumnDirective
                                    key={i}
                                    field={entry[0]}
                                    headerText={entry[0]
                                      .replace(/([A-Z])/g, " $1")
                                      .replace(/^./, function (str) {
                                        return str.toUpperCase();
                                      })}
                                    width="150"
                                    textAlign="left"
                                    id="column-directive"
                                    editType="DropDownEdit"
                                  />
                                );
                              default:
                                return (
                                  <ColumnDirective
                                    key={i}
                                    field={entry[0]}
                                    headerText={entry[0]
                                      .replace(/([A-Z])/g, " $1")
                                      .replace(/^./, function (str) {
                                        return str.toUpperCase();
                                      })}
                                    width="150"
                                    textAlign="left"
                                    id="column-directive"
                                  />
                                );
                            }
                          })()
                      )}
                      <ColumnDirective
                        field={"student_id"}
                        headerText={"student_id"
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, function (str) {
                            return str.toUpperCase();
                          })}
                        width="350"
                        template={StudentIdTemplate}
                        textAlign="left"
                        id="column-directive"
                        allowEditing={false}
                      />
                    </ColumnsDirective>
                    <Inject
                      services={[
                        Filter,
                        Sort,
                        ContextMenu,
                        ExcelExport,
                        Edit,
                        PdfExport,
                        Toolbar,
                        Search,
                        Selection,
                        Resize,
                        Page,
                      ]}
                    />
                  </GridComponent>
                </div>
                <div className="instructions-panel">
                  <h3>Instructions Panel</h3>
                  <ul>
                    <li>
                      <span>
                        Double-click and drag column header on either side to
                        resize column.
                      </span>
                    </li>
                    <li>
                      <span>
                        Double-click on field you wish to edit to begin editing.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click on student avatar to view student profile.
                      </span>
                    </li>
                    <li>
                      <span>
                        Right-click on any field to access context menu.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click on column header field to toggle sorting between
                        ascending and descending orders.
                      </span>
                    </li>
                    <li>
                      <span>
                        PDF, Excel and CSV Exports are available in the context
                        menu.
                      </span>
                    </li>
                  </ul>
                  <p className="info-notice">
                    <BsInfoCircleFill style={{ fontSize: "1rem" }} />
                    <span>Student_id value cannot be edited or changed.</span>
                  </p>
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
};

export default Students;
