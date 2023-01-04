import React, { useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
} from "chart.js";
import { Doughnut, Line, Pie } from "react-chartjs-2";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import { setCurrentPage } from "../../features/config/configData";

import {
  Content,
  ErrorContainer,
  LoadingContainer,
  TaskItem,
  Wrapper,
} from "./SchoolDashboard.styles";
import { BiError } from "react-icons/bi";

import EditModal from "../../components/EditModal/Index";
import PageHeader from "../../components/PageHeader/Index";
import Spinner from "../../components/Spinner/Index";
import noDataSvg from "../../assets/no-data.svg";
import noStudentSvg from "../../assets/no-student.svg";
import noPosts from "../../assets/no-posts.svg";
import noSchedule from "../../assets/no-kanban.svg";
import noTasks from "../../assets/no-tasks.svg";

import { useDynamicMarginLeft } from "../../hooks/useMarginLeft";
import { getTheme } from "../../utils";

const studentsLineChartlabels = function () {
  let labelArr;
  const currentMonth = new Date().getMonth();
  switch (currentMonth) {
    case 0:
    case 1:
    case 2:
      labelArr = ["Apr-Jun", "Jul-Sep", "Oct-Dec", "JAN-MAR"];
      break;
    case 3:
    case 4:
    case 5:
      labelArr = ["Jul-Sep", "Oct-Dec", "Jan-Mar", "APR-JUN"];
      break;
    case 6:
    case 7:
    case 8:
      labelArr = ["Oct-Dec", "Jan-Mar", "Apr-Jun", "JUL-SEP"];
      break;
    case 9:
    case 10:
    case 11:
      labelArr = ["Jan-Mar", "Apr-Jun", "Jul-Sep", "OCT-DEC"];
      break;
    default:
      break;
  }

  return labelArr;
};

function RecentAdmissionsSlider({ students }) {
  const sliderRef = useRef();
  const orderedStudents = useMemo(
    () => (students && students.length ? students.filter((_, i) => i < 5) : []),
    [students]
  );

  const { isSuccess } = useSelector((state) => state.schoolData);

  if (isSuccess && students.length) {
    return (
      <div
        ref={sliderRef}
        className="students-slider"
        style={{
          animation:
            orderedStudents.length > 1 &&
            `slideup${orderedStudents.length} ${
              orderedStudents.length * 6
            }s ease infinite`,
        }}
      >
        {orderedStudents.map((student, i) => (
          <div
            key={i}
            style={{ animation: `slide-${i} ${(i + 1) * 6}s infinite` }}
          >
            <img src={student["image"]} alt="student" />
            <p>
              {student["firstName"]} {student["lastName"]}
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="no-records">
        <img className="no-student-img" src={noStudentSvg} alt="no student" />
        <p className="no-student-text">No student registered.</p>
      </div>
    );
  }
}
function RecentArticlesSlider({ articles }) {
  const sliderRef = useRef();

  return (
    <div
      ref={sliderRef}
      className="articles-slider"
      style={{
        animation:
          articles.length > 1 &&
          `slideup${articles.length} ${articles.length * 10}s ease infinite`,
      }}
    >
      {articles.map((article, i) => (
        <div
          key={i}
          style={{ animation: `slide-${i} ${(i + 1) * 10}s infinite` }}
          className="article"
        >
          <div className="img-cont">
            <img src={article.articleDetails["cover"]} alt="cover" />
          </div>
          <div className="article-details">
            <Link to={"/"}>{article.articleDetails["title"]}</Link>
            <p className="summary">{article.articleDetails["summary"]}</p>
            <p className="timestamp">
              {moment(article.articleDetails["timeStamp"]).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
function UpcomingSchedulesSlider({ schedules }) {
  const sliderRef = useRef();

  return (
    <div
      ref={sliderRef}
      className="schedules-slider"
      style={{
        animation:
          schedules.length > 1 &&
          `slideup${schedules.length} ${schedules.length * 8}s ease infinite`,
      }}
    >
      {schedules.map((schedule, i) => (
        <div
          key={i}
          style={{ animation: `slide-${i} ${(i + 1) * 8}s infinite` }}
          className="schedule"
        >
          <div className="schedule-details">
            <p className="timestamp">
              <span>Estimated Time To Schedule: </span>
              <span>{moment(schedule["startDate"]).fromNow(true)}</span>
            </p>
            <p>
              <span>Subject: </span>
              <span>{schedule["text"]}</span>
            </p>
            <p className="summary">
              <span>Description: </span>
              <span>{schedule["description"]}</span>
            </p>
            <p className="summary">
              <span>Time: </span>
              <span>
                {moment(schedule["startDate"]).format("LT")}
                {" - "}
                {moment(schedule["endDate"]).format("LT")}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const SchoolDashboard = () => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    SubTitle
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authToken = useSelector((state) => state.schoolAuth.token);
  const {
    students,
    finance,
    articles,
    schedules,
    kanban: tasks,
    staffs,
  } = useSelector((state) => state.schoolData.data);

  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const THEME_VALUE = schoolData?.settings?.theme
    ? schoolData?.settings?.theme
    : localStorage.getItem("schoolZoneTheme")
    ? localStorage.getItem("schoolZoneTheme").trim()
    : " Auto";
  function doughnutChartData() {
    const newArr = [0, 0];

    if (
      finance &&
      finance
        .filter((statement) => statement.statementType.trim() === "Revenue")
        .reduce(
          (prev, currVal) => prev + parseInt(currVal.AmountInFigures),
          0
        ) > 0
    ) {
      newArr[0] = finance
        .filter((statement) => statement.statementType.trim() === "Revenue")
        .reduce((prev, currVal) => prev + parseInt(currVal.AmountInFigures), 0);
    }

    if (
      finance &&
      finance
        .filter((statement) => statement.statementType.trim() === "Expense")
        .reduce(
          (prev, currVal) => prev + parseInt(currVal.AmountInFigures),
          0
        ) > 0
    ) {
      newArr[1] = finance
        .filter((statement) => statement.statementType.trim() === "Expense")
        .reduce((prev, currVal) => prev + parseInt(currVal.AmountInFigures), 0);
    }
    return newArr;
  }

  // Generate quarters for line chart data
  let quarters = [];

  function generateQuarters() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    if (currentMonth < 3) {
      return (quarters = [
        [[currentYear - 1], [3, 4, 5]],
        [[currentYear - 1], [6, 7, 8]],
        [[currentYear - 1], [9, 10, 11]],
        [[currentYear], [0, 1, 2]],
      ]);
    }
    if (currentMonth >= 3 && currentMonth < 6) {
      return (quarters = [
        [[currentYear - 1], [6, 7, 8]],
        [[currentYear - 1], [9, 10, 11]],
        [[currentYear], [0, 1, 2]],
        [[currentYear], [3, 4, 5]],
      ]);
    }
    if (currentMonth >= 6 && currentMonth < 9) {
      return (quarters = [
        [[currentYear - 1], [9, 10, 11]],
        [[currentYear], [0, 1, 2]],
        [[currentYear], [3, 4, 5]],
        [[currentYear], [6, 7, 8]],
      ]);
    }
    if (currentMonth >= 9 && currentMonth < 12) {
      return (quarters = [
        [[currentYear], [0, 1, 2]],
        [[currentYear], [3, 4, 5]],
        [[currentYear], [6, 7, 8]],
        [[currentYear], [9, 10, 11]],
      ]);
    }
  }

  generateQuarters();

  function studentlineChartData() {
    const arr = new Array(4).fill(0);

    for (let index = 0; index < students.length; index++) {
      const student = students[index];

      quarters.forEach((quarter, index) => {
        if (
          new Date(student.registration_date).getFullYear() === quarter[0][0] &&
          quarter[1].includes(new Date(student.registration_date).getMonth())
        ) {
          arr[index] = arr[index] + 1;
        }
      });
    }

    return arr;
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      decimation: {
        enabled: false,
      },
      legend: {
        position: "top",
        align: "start",
        labels: {
          color: "#f46e16",
          font: {
            family: "'EB Garamond', sans-serif",
          },
        },
      },
      title: {
        font: {
          family: '"EB Garamond", sans-serif',
        },
        color: "#f46e16",
        display: true,
        text: "Line Chart representing admitted students last three quarters",
      },
      subtitle: {
        font: {
          family: "var(--hind)",
        },
        color: `${getTheme(THEME_VALUE) === "Light" ? "#363537" : "#FAFAFA"}`,
        display: true,
        text: "Chart label in Uppercase represents current quarter",
      },
      tooltip: {
        backgroundColor: "#f46e16",
        bodyFont: {
          family: "'EB Garamond', sans-serif",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "'Hind Madurai', sans-serif",
          },
          color: `${getTheme(THEME_VALUE) === "Light" ? "#363537" : "#FAFAFA"}`,
        },
      },
      y: {
        ticks: {
          font: {
            family: "'Hind Madurai', sans-serif",
          },
          color: `${getTheme(THEME_VALUE) === "Light" ? "#363537" : "#FAFAFA"}`,
        },
      },
    },
  };

  const lineChartData = {
    labels: studentsLineChartlabels(),
    datasets: [
      {
        label: "Number of Students",
        data: students && studentlineChartData(),
        borderColor: "rgba(244,110,22, 0.7)",
        backgroundColor: "rgba(244,110,22, 1)",
      },
    ],
  };

  const orderedStudents = useMemo(
    () => (students && students.length ? students.filter((_, i) => i < 2) : []),
    [students]
  );
  const orderedArticles = useMemo(
    () => (articles && articles.length ? articles.filter((_, i) => i < 5) : []),
    [articles]
  );
  const orderedSchedules = useMemo(
    () =>
      schedules && schedules.length
        ? schedules
            .filter((sch) => moment(sch["startDate"]).diff(moment()) > 0)
            .filter((_, i) => i < 5)
        : [],
    [schedules]
  );

  const studentBoardRef = useRef();
  const tasksBoardRef = useRef();

  const primaryStatusColors = [
    "rgba(255, 0, 0, 1)",
    "#f46e16",
    "rgb(171,89,253)",
    "#ffff00",
    "#00d600",
    "#bababa",
  ];
  const secondaryStatusColors = [
    "rgba(255, 0, 0, 0.2)",
    "rgba(244,110,22, 0.2)",
    "rgba(171,89,253, 0.2)",
    "rgba(255,255,0, 0.2)",
    "rgba(0, 255, 0, 0.2)",
  ];

  function getTaskItemColor(status) {
    const formattedStatus = status.trim().split("- ").join(" ");
    let color;

    switch (formattedStatus) {
      case "Not Started":
        color = [primaryStatusColors[0], secondaryStatusColors[0]];
        break;
      case "Deferred":
        color = [primaryStatusColors[1], secondaryStatusColors[1]];
        break;
      case "Need Assistance":
        color = [primaryStatusColors[2], secondaryStatusColors[2]];
        break;
      case "In Progress":
        color = [primaryStatusColors[3], secondaryStatusColors[3]];
        break;
      case "Completed":
        color = [primaryStatusColors[4], secondaryStatusColors[4]];
        break;
      default:
        color = [primaryStatusColors[5], secondaryStatusColors[5]];
        break;
    }

    return color;
  }

  function getTasksData(tasks) {
    let tasksData = [0, 0, 0, 0, 0];

    tasks.forEach((task, i) => {
      const formattedStatus = task.status.trim().split("- ").join(" ");

      switch (formattedStatus) {
        case "Not Started":
          tasksData[0] = tasksData[0] + 1;
          break;
        case "Deferred":
          tasksData[1] = tasksData[1] + 1;
          break;
        case "Need Assistance":
          tasksData[2] = tasksData[2] + 1;
          break;
        case "In Progress":
          tasksData[3] = tasksData[3] + 1;
          break;
        case "Completed":
          tasksData[4] = tasksData[4] + 1;
          break;
        default:
          tasksData = [0, 0, 0, 0, 0];
          break;
      }
    });

    return tasksData;
  }

  const { dynamicMarginLeft } = useDynamicMarginLeft();

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
  }, [authToken, message, dispatch, navigate]);

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

  return (
    <Wrapper
      isSuccess={isSuccess ? true : false}
      dynamicMarginLeft={dynamicMarginLeft}
    >
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}

      {isEditProfileModalOpen && <EditModal />}
      {isSuccess && (
        <Content orderedStudents={orderedStudents}>
          <main>
            <PageHeader title="Dashboard" />
            <div className="student-staff-cont">
              <div ref={studentBoardRef} className="student-board">
                <h2>Students | Staff</h2>
                <div className="cont students">
                  <div className="statement students">
                    <div className="statements students">
                      <div className="val">
                        <h3>Total Number of Students</h3>
                        <p>{students ? students.length : 0}</p>
                      </div>
                    </div>
                    <div className="statements students">
                      <div className="val">
                        <h3>Total Number of Staff</h3>
                        <p>{staffs ? staffs.length : 0}</p>
                      </div>
                    </div>
                  </div>
                  <div className="students-column-box">
                    <div className="linechart">
                      <Line
                        options={lineChartOptions}
                        data={lineChartData}
                        width={500}
                        height={400}
                      />
                    </div>
                    <div className="recent">
                      <h3>Latest Admissions</h3>
                      <div className="passport-cont">
                        <RecentAdmissionsSlider
                          students={students ? [...students] : []}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="more-btn" to="/schooldashboard/students">
                  <span>See more</span>
                  <BsArrowRight />
                </Link>
              </div>
              <div
                ref={tasksBoardRef}
                style={{
                  height:
                    isSuccess &&
                    studentBoardRef.current &&
                    `${studentBoardRef.current.clientHeight}px`,
                }}
                className="task-board-cont"
              >
                <div className="task-board">
                  <h2 className="tasks-board-header">Tasks</h2>

                  {tasks && tasks.length ? (
                    <div className="piechart-cont">
                      <div className="piechart">
                        <div className="chart">
                          <Pie
                            type="pie"
                            datasetIdKey="id"
                            data={{
                              labels: [
                                "Not Started",
                                "Deferred",
                                "Need Assistance",
                                "In Progress",
                                "Completed",
                              ],
                              datasets: [
                                {
                                  id: 1,
                                  label: "Financial Statement",
                                  data: getTasksData(tasks),
                                  backgroundColor: [
                                    "rgba(255, 0, 0, 1)",
                                    "#f46e16",
                                    "rgb(171,89,253)",
                                    "#ffff00",
                                    "#00d600",
                                  ],
                                  borderColor: [
                                    "rgba(255, 0, 0, 0.7)",
                                    "#f58b46",
                                    "#a046fa",
                                    "#ffff7c",
                                    "rgba(0, 255, 0, 0.7)",
                                  ],
                                  hoverBorderColor: [
                                    "rgba(255, 0, 0, 1)",
                                    "#f46e16",
                                    "rgb(171,89,253)",
                                    "#ffff00",
                                    "#00d600",
                                  ],
                                },
                              ],
                            }}
                            options={{
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  position: "left",
                                  align: "center",
                                  labels: {
                                    color: "#f46e16",
                                    font: {
                                      family: "'EB Garamond', sans-serif",
                                    },
                                    useBorderRadius: true,
                                    borderRadius: 1,
                                  },
                                },
                                title: {
                                  align: "start",
                                  font: {
                                    family: '"EB Garamond", sans-serif',
                                  },
                                  color: "#f46e16",
                                  display: true,
                                  text: "Pie chart representing tasks distribution",
                                  padding: {
                                    bottom: 5,
                                  },
                                },
                                tooltip: {
                                  backgroundColor: "#f46e16",
                                  bodyFont: {
                                    family: "'Hind Madurai', sans-serif",
                                  },
                                },
                              },
                            }}
                          />
                          {/* <div className="chart-details">hello</div> */}
                        </div>
                        <div className="chart-details">
                          <h2>Total Tasks</h2>
                          <p>{tasks.length}</p>
                        </div>
                      </div>
                      <div className="tasks-details">
                        <h5 className="task-details-header">
                          Some Of Your Tasks Include
                        </h5>
                        <ul className="tasks">
                          {tasks.map(
                            (task, index) =>
                              index < 5 && (
                                <TaskItem
                                  color={getTaskItemColor(task.status)}
                                  key={index}
                                >
                                  <p className="subject">
                                    <span className="task-title">Title:</span>
                                    <span>{task.subject}</span>
                                  </p>
                                  <p className="description">
                                    <span className="task-description">
                                      Description:
                                    </span>
                                    <span>{task.description}</span>
                                  </p>
                                </TaskItem>
                              )
                            // <li style={[listStyle]} >
                            // </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="no-tasks">
                      <img src={noTasks} alt="no-tasks" />
                      <p>No tasks to track yet.</p>
                    </div>
                  )}
                  <div className="single-btn-cont">
                    <Link className="more-btn" to={"/schooldashboard/kanban"}>
                      <span>
                        {tasks && tasks.length
                          ? "See all tasks"
                          : "View kanban board"}
                      </span>
                      <BsArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="finance-cont">
              <div className="finance-board">
                <h2>Finance</h2>
                <div className="fin-cont">
                  <div className="statement">
                    <div className="statements">
                      <div className="rev">
                        <h3>Total Revenue</h3>
                        <p style={{ color: "var(--lime)" }}>
                          $
                          {finance
                            ? finance
                                .filter(
                                  (statement) =>
                                    statement.statementType.trim() === "Revenue"
                                )
                                .reduce(
                                  (prev, currVal) =>
                                    prev + parseInt(currVal.AmountInFigures),
                                  0
                                )
                                .toLocaleString("en-US")
                            : "$0"}
                        </p>
                      </div>
                      <div className="exp">
                        <h3>Total Expenses</h3>
                        <p style={{ color: "var(--red)" }}>
                          $
                          {finance
                            ? finance
                                .filter(
                                  (statement) =>
                                    statement.statementType.trim() === "Expense"
                                )
                                .reduce(
                                  (prev, currVal) =>
                                    prev + parseInt(currVal.AmountInFigures),
                                  0
                                )
                                .toLocaleString("en-US")
                            : "$0"}
                        </p>
                      </div>
                      <div className="exp">
                        <h3>State of Finance</h3>
                        {finance &&
                        finance
                          .filter(
                            (statement) =>
                              statement.statementType.trim() === "Revenue"
                          )
                          .reduce(
                            (prev, currVal) =>
                              prev + parseInt(currVal.AmountInFigures),
                            0
                          ) -
                          finance
                            .filter(
                              (statement) =>
                                statement.statementType.trim() === "Expense"
                            )
                            .reduce(
                              (prev, currVal) =>
                                prev + parseInt(currVal.AmountInFigures),
                              0
                            ) <
                          0 ? (
                          <p style={{ color: "var(--red)" }}>Deficit</p>
                        ) : (
                          <p style={{ color: "var(--lime)" }}>Surplus</p>
                        )}
                      </div>
                      <div className="exp">
                        <h3>
                          {finance &&
                          finance
                            .filter(
                              (statement) =>
                                statement.statementType.trim() === "Revenue"
                            )
                            .reduce(
                              (prev, currVal) =>
                                prev + parseInt(currVal.AmountInFigures),
                              0
                            ) -
                            finance
                              .filter(
                                (statement) =>
                                  statement.statementType.trim() === "Expense"
                              )
                              .reduce(
                                (prev, currVal) =>
                                  prev + parseInt(currVal.AmountInFigures),
                                0
                              ) <
                            0
                            ? "Deficit"
                            : "Surplus"}
                        </h3>
                        <p
                          style={{
                            color:
                              finance &&
                              finance
                                .filter(
                                  (statement) =>
                                    statement.statementType.trim() === "Revenue"
                                )
                                .reduce(
                                  (prev, currVal) =>
                                    prev + parseInt(currVal.AmountInFigures),
                                  0
                                ) -
                                finance
                                  .filter(
                                    (statement) =>
                                      statement.statementType.trim() ===
                                      "Expense"
                                  )
                                  .reduce(
                                    (prev, currVal) =>
                                      prev + parseInt(currVal.AmountInFigures),
                                    0
                                  ) <
                                0
                                ? "var(--red)"
                                : "var(--lime)",
                          }}
                        >
                          $
                          {finance &&
                            (
                              finance
                                .filter(
                                  (statement) =>
                                    statement.statementType.trim() === "Revenue"
                                )
                                .reduce(
                                  (prev, currVal) =>
                                    prev + parseInt(currVal.AmountInFigures),
                                  0
                                ) -
                              finance
                                .filter(
                                  (statement) =>
                                    statement.statementType.trim() === "Expense"
                                )
                                .reduce(
                                  (prev, currVal) =>
                                    prev + parseInt(currVal.AmountInFigures),
                                  0
                                )
                            ).toLocaleString("en-US")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pie-chart">
                    <Doughnut
                      type="doughnut"
                      datasetIdKey="id"
                      data={{
                        labels: ["Revenue", "Expenses"],
                        datasets: [
                          {
                            id: 1,
                            label: "Financial Statement",
                            data: doughnutChartData(),
                            backgroundColor: ["#00d600", "rgba(255, 0, 0, 1)"],
                            borderColor: [
                              "rgba(0, 255, 0, 0.7)",
                              "rgba(255, 0, 0, 0.7)",
                            ],
                            hoverBorderColor: ["#00d600", "rgba(255, 0, 0, 1)"],
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: "top",
                            align: "start",
                            labels: {
                              color: "#f46e16",
                              font: {
                                family: "'EB Garamond', sans-serif",
                              },
                              useBorderRadius: true,
                              borderRadius: 1,
                            },
                          },
                          title: {
                            align: "start",
                            font: {
                              family: '"EB Garamond", sans-serif',
                            },
                            color: "#f46e16",
                            display: true,
                            text: "Doughnut chart representing total revenue and expenses",
                          },
                          tooltip: {
                            backgroundColor: "#f46e16",
                            bodyFont: {
                              family: "'Hind Madurai', sans-serif",
                            },
                          },
                        },
                      }}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="recent-records">
                    <h3>Recent Records</h3>
                    <div className="records-cont">
                      {finance && finance.length ? (
                        [...finance]
                          .sort(
                            (a, b) =>
                              new Date(b.date + " " + b.time) -
                              new Date(a.date + " " + a.time)
                          )
                          .filter((item, i) => i < 10)
                          .map((item, i) =>
                            item.statementType.trim() === "Revenue" ? (
                              <div className="financial_item revenue" key={i}>
                                <div className="financial_item-header">
                                  <p className="value">
                                    + $
                                    {parseInt(
                                      item.AmountInFigures
                                    ).toLocaleString("en-US")}
                                  </p>
                                  <p className="type">Revenue</p>
                                </div>
                                <div className="statement">
                                  {item.statementDescription}
                                </div>
                              </div>
                            ) : (
                              <div className="financial_item expense" key={i}>
                                <div className="financial_item-header">
                                  <p className="value">
                                    - $
                                    {parseInt(
                                      item.AmountInFigures
                                    ).toLocaleString("en-US")}
                                  </p>
                                  <p className="type">Expense</p>
                                </div>
                                <div className="statement">
                                  {item.statementDescription}
                                </div>
                              </div>
                            )
                          )
                      ) : (
                        <div className="no-records">
                          <img src={noDataSvg} alt="no record" />
                          <p>No recent record found.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Link className="more-btn" to="/schooldashboard/finance">
                  <span>Go to finance</span>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className="others-cont">
              <div className="recent-articles">
                <h2>Recent Articles</h2>
                {orderedArticles && orderedArticles.length ? (
                  <div className="recent-arts">
                    <div className="articles-cont">
                      <RecentArticlesSlider articles={[...orderedArticles]} />
                    </div>
                    <div className="btns-cont">
                      <Link className="more-btn" to={"/schooldashboard/editor"}>
                        <span>Publish Article</span>
                        <BsArrowUpRight />
                      </Link>
                      <Link
                        className="more-btn"
                        to={"/schooldashboard/articles"}
                      >
                        <span>See all articles</span>
                        <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="no-article">
                    <img src={noPosts} alt="no article" />
                    <p>No articles published yet.</p>
                    <Link className="more-btn" to={"/schooldashboard/editor"}>
                      <span>Publish Article</span>
                      <BsArrowRight />
                    </Link>
                  </div>
                )}
              </div>
              <div className="upcoming-schedules">
                <h2>Upcoming Schedules</h2>
                {orderedSchedules && orderedSchedules.length ? (
                  <div className="schedules-cont">
                    <div className="schedules-slider-cont">
                      <UpcomingSchedulesSlider
                        schedules={[...orderedSchedules]}
                      />
                    </div>

                    <Link
                      className="more-btn"
                      to={"/schooldashboard/scheduler"}
                    >
                      <span>Go to Scheduler</span>
                      <BsArrowRight />
                    </Link>
                  </div>
                ) : (
                  <div className="no-schedule">
                    <img src={noSchedule} alt="no article" />
                    <p>No upcoming schedules found.</p>
                    <Link
                      className="more-btn"
                      to={"/schooldashboard/scheduler"}
                    >
                      <span>Go to Schedular</span>
                      <BsArrowRight />
                    </Link>
                  </div>
                )}
              </div>
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

export default SchoolDashboard;
