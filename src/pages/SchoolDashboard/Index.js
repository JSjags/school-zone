import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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
  Wrapper,
} from "./SchoolDashboard.styles";
import { BiError } from "react-icons/bi";

import EditModal from "../../components/EditModal/Index";
import PageHeader from "../../components/PageHeader/Index";
import Spinner from "../../components/Spinner/Index";
import noDataSvg from "../../assets/no-data.svg";

const SchoolDashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authToken = useSelector((state) => state.schoolAuth.token);
  const finance = useSelector((state) => state.schoolData.data.finance);

  const { data, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.schoolData
  );
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

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
    <Wrapper isSuccess={isSuccess ? true : false}>
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}

      {isEditProfileModalOpen && <EditModal />}
      {isSuccess && (
        <Content>
          <main>
            <PageHeader title="Dashboard" />
            {/* {(!data.students || data.students.length < 1) &&
              (!data.staffs || data.staffs.length < 1) && (
                <div className="no-data">
                  <img alt="no-data" src={noDataSvg} />
                  <p>No data to display, try adding a student or a staff.</p>
                </div>
              )} */}
            <div className="student-staff-cont">
              <div className="student-board">
                <h2>Students</h2>
              </div>
              <div className="staff-board">
                <h2>Staffs</h2>
              </div>
            </div>
            <div className="finance-cont">
              <div className="finance-board">
                <h2>Finance</h2>
                <div className="cont">
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
                        {finance
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
                          {finance
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
                                ? "red"
                                : "green",
                          }}
                        >
                          $
                          {(
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
                            data: [
                              finance
                                .filter(
                                  (statement) =>
                                    statement.statementType.trim() === "Revenue"
                                )
                                .reduce(
                                  (prev, currVal) =>
                                    prev + parseInt(currVal.AmountInFigures),
                                  0
                                ),
                              finance
                                .filter(
                                  (statement) =>
                                    statement.statementType.trim() === "Expense"
                                )
                                .reduce(
                                  (prev, currVal) =>
                                    prev + parseInt(currVal.AmountInFigures),
                                  0
                                ),
                            ],
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
                              <div className="financial_item revenue">
                                <div className="financial_item-header">
                                  <p className="value">
                                    +$
                                    {item.AmountInFigures.toLocaleString(
                                      "en-US"
                                    )}
                                  </p>
                                  <p className="type">Revenue</p>
                                </div>
                                <div className="statement">
                                  {item.statementDescription}
                                </div>
                              </div>
                            ) : (
                              <div className="financial_item expense">
                                <div className="financial_item-header">
                                  <p className="value">
                                    -$
                                    {item.AmountInFigures.toLocaleString(
                                      "en-US"
                                    )}
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
              </div>
            </div>
            <div className="others-cont">
              <div className="recent-articles">
                <h2>Recent Articles</h2>
              </div>
              <div className="upcoming-schedules">
                <h2>Upcoming Schedules</h2>
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
