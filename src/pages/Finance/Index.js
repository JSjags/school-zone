import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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

import { BsPersonPlus } from "react-icons/bs";
import { BiBookAdd, BiError } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaRegIdCard,
} from "react-icons/fa";

import { Wrapper, Content } from "./Finance.styles";
import EditModal from "../../components/EditModal/Index";
import PageHeader from "../../components/PageHeader/Index";

import {
  ErrorContainer,
  LoadingContainer,
} from "../SchoolDashboard/SchoolDashboard.styles";
import Spinner from "../../components/Spinner/Index";
import Options from "../../components/Options/Index";
import Button from "../../components/Button/Index";

import noFinanceSvg from "../../assets/no-financial-data.svg";
import SearchBar from "../../components/SearchBar/Index";

const Finance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewOptions = "All Revenue Expense";

  const [formData, setFormData] = useState({
    view: "All",
  });

  const internationalNumberFormat = new Intl.NumberFormat("en-US");

  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);
  const { finance } = useSelector((state) => state.schoolData.data);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const redirect = (location) => {
    if (location === "home") {
      localStorage.removeItem("schoolCredentials");
      return navigate("/");
    } else {
      localStorage.removeItem("schoolCredentials");
      return navigate("/login");
    }
  };

  const [pageNumber, setPageNumber] = useState(1);
  const [maxIndex, setMaxIndex] = useState(pageNumber * 10);

  const formatDateTime = (arg1, arg2) => {
    const d = arg1.split("-");
    const t = arg2.split(":");
    const date = new Date(
      parseInt(d[0]),
      parseInt(d[1]) - 1,
      parseInt(d[2]),
      parseInt(t[0]),
      parseInt(t[1])
    );
    return date;
  };

  const handleCreateFinance = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    if (schoolData.templates?.finance === undefined) {
      dispatch(openEditProfileModal());
      return dispatch(showForm("createFinance"));
    }

    dispatch(openEditProfileModal());
    dispatch(showForm("recordFinance"));
  };

  const handleCreateTemplate = () => {
    dispatch(openEditProfileModal());
    dispatch(showForm("createFinanceTemplate"));
  };

  const handleNewFinanceRecord = () => {
    dispatch(openEditProfileModal());
    dispatch(showForm("recordFinance"));
  };

  const checkButtonRef = useCallback(
    (node) => {
      if (node === null) return;

      if (pageNumber - 2 < 1 && node.classList.contains("double-left")) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (pageNumber - 1 < 1 && node.classList.contains("left")) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (
        pageNumber + 1 > Math.ceil(finance.length / 10) &&
        node.classList.contains("right")
      ) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (
        pageNumber + 2 > Math.ceil(finance.length / 10) &&
        node.classList.contains("double-right")
      ) {
        node.disabled = true;
        return node.classList.add("disabled");
      }

      node.disabled = false;
      node.classList.remove("disabled");
    },
    [pageNumber]
  );

  useEffect(() => {
    dispatch(setCurrentPage("finance"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSchoolData(schoolToken));
  }, []);

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
            <PageHeader title="Finance" />
            {finance === undefined && (
              <div className="create-finance">
                <img alt="add-student" src={noFinanceSvg}></img>
                <p>No financial data found.</p>
                <div className="create-finance-button-group">
                  <button onClick={handleCreateFinance}>
                    <BsPersonPlus style={{ fontSize: "2rem" }} />
                    <span>Record Revenue | Expense</span>
                  </button>
                  <button onClick={handleCreateTemplate}>
                    <IoCreateOutline style={{ fontSize: "2rem" }} />
                    <span>Create Financial Template</span>
                  </button>
                </div>
              </div>
            )}
            {!isLoading && finance && finance.length && (
              <div className="available-finance">
                <Button callback={handleNewFinanceRecord}>
                  <BiBookAdd style={{ fontSize: "1.4rem" }} />
                  <span>Add Revenue | Expense</span>
                </Button>
                <div className="action-buttons-box">
                  <div className="left-hand">
                    <div className="item">
                      <TbListDetails style={{ fontSize: "1.4rem" }} />
                      <Options
                        options={viewOptions}
                        value={formData.view}
                        setFormData={setFormData}
                        name="view"
                      />
                    </div>
                  </div>
                  <div className="right-hand">
                    <div className="item">
                      <SearchBar />
                    </div>
                  </div>
                </div>
                <div className="finance-box">
                  <h2>{formData.view}</h2>
                  {formData.view.toLowerCase() === "all" &&
                    finance.map(
                      (fin, index) =>
                        index >=
                          maxIndex -
                            (maxIndex % 10 === 0 ? 10 : maxIndex % 10) &&
                        index < maxIndex && (
                          <div
                            key={index}
                            className={
                              fin.statementType.toLowerCase() === "revenue"
                                ? "financial-item revenue"
                                : "financial-item expense"
                            }
                          >
                            <h3>{fin.statementType}</h3>
                            <p className="amount">
                              <span className="in-figures">
                                {fin.statementType.toLowerCase() === "revenue"
                                  ? "+"
                                  : "-"}
                              </span>
                              <span className="in-figures">
                                {schoolData.currency}
                              </span>
                              <span className="in-figures">
                                {internationalNumberFormat.format(
                                  fin.AmountInFigures
                                )}
                              </span>
                              <span className="in-words">
                                {fin.AmountInWords}
                              </span>
                            </p>
                            <p className="description">
                              <span className="desc-title">Description:</span>
                              <span className="desc-body">
                                {fin.statementDescription}
                              </span>
                            </p>
                            <div className="description date-time">
                              <span className="desc-title">Date:</span>
                              <span className="desc-body">
                                {"" + formatDateTime(fin.date, fin.time)}
                              </span>
                            </div>
                            <p className="statement-id">
                              <FaRegIdCard
                                style={{
                                  fontSize: "clamp(0.5rem, 1vw, 0.8rem)",
                                  color: "var(--primary-color)",
                                }}
                              />
                              <span>{fin.statement_id}</span>
                            </p>
                          </div>
                        )
                    )}
                  {formData.view.toLowerCase() === "revenue" &&
                    finance
                      .filter((f) => f.statementType === "Revenue")
                      .map(
                        (fin, index) =>
                          index >= maxIndex - 10 &&
                          index < maxIndex && (
                            <div
                              key={index}
                              className={"financial-item revenue"}
                            >
                              <h3>{fin.statementType}</h3>
                              <p classname="amount">
                                <span className="in-figures">+</span>
                                <span className="in-figures">
                                  {schoolData.currency}
                                </span>
                                <span className="in-figures">
                                  {internationalNumberFormat.format(
                                    fin.AmountInFigures
                                  )}
                                </span>
                                <span className="in-words">
                                  {fin.AmountInWords}
                                </span>
                              </p>
                              <p className="description">
                                <span className="desc-title">Description</span>
                                <span className="desc-body">
                                  {": " + fin.statementDescription}
                                </span>
                              </p>
                              <p className="description date-time">
                                <div>
                                  <span className="desc-title">Date</span>
                                  <span className="desc-body">
                                    {": " + formatDateTime(fin.date, fin.time)}
                                  </span>
                                </div>
                              </p>
                              <p className="statement-id">
                                <FaRegIdCard
                                  style={{
                                    fontSize: "clamp(0.5rem, 1vw, 0.8rem)",
                                    color: "var(--primary-color)",
                                  }}
                                />
                                <span>{fin.statement_id}</span>
                              </p>
                            </div>
                          )
                      )}
                  {formData.view.toLowerCase() === "expense" &&
                    finance
                      .filter((f) => f.statementType === "Expense")
                      .map(
                        (fin, index) =>
                          index >= maxIndex - 10 &&
                          index < maxIndex && (
                            <div key={index} className="financial-item expense">
                              <h3>{fin.statementType}</h3>
                              <p classname="amount">
                                <span className="in-figures">-</span>
                                <span className="in-figures">
                                  {schoolData.currency}
                                </span>
                                <span className="in-figures">
                                  {internationalNumberFormat.format(
                                    fin.AmountInFigures
                                  )}
                                </span>
                                <span className="in-words">
                                  {fin.AmountInWords}
                                </span>
                              </p>
                              <p className="description">
                                <span className="desc-title">Description</span>
                                <span className="desc-body">
                                  {": " + fin.statementDescription}
                                </span>
                              </p>
                              <p className="description date-time">
                                <div>
                                  <span className="desc-title">Date</span>
                                  <span className="desc-body">
                                    {": " + formatDateTime(fin.date, fin.time)}
                                  </span>
                                </div>
                              </p>
                              <p className="statement-id">
                                <FaRegIdCard
                                  style={{
                                    fontSize: "clamp(0.5rem, 1vw, 0.8rem)",
                                    color: "var(--primary-color)",
                                  }}
                                />
                                <span>{fin.statement_id}</span>
                              </p>
                            </div>
                          )
                      )}
                </div>

                <div className="page-info">
                  <div className="page-controls">
                    <button
                      ref={checkButtonRef}
                      className="page-controls_btn double-left"
                      onClick={() => {
                        setPageNumber((prevState) => prevState - 2);
                        setMaxIndex((prev) => {
                          if (prev % 10 === 0) {
                            return prev - 20;
                          }
                          const remainder = prev % 10;
                          return prev - remainder - 10;
                        });
                      }}
                    >
                      <FaAngleDoubleLeft />
                    </button>
                    <button
                      ref={checkButtonRef}
                      className="page-controls_btn left"
                      onClick={() => {
                        setPageNumber((prevState) => prevState - 1);
                        setMaxIndex((prev) => {
                          if (prev % 10 === 0) {
                            return prev - 10;
                          }
                          const remainder = prev % 10;
                          return prev - remainder;
                        });
                      }}
                    >
                      <FaAngleLeft />
                    </button>
                    <span className="page-controls_number">
                      Page {pageNumber} of {Math.ceil(finance.length / 10)}
                    </span>
                    <button
                      ref={checkButtonRef}
                      className="page-controls_btn right"
                      onClick={() => {
                        setPageNumber((prevState) => prevState + 1);
                        setMaxIndex((prev) => {
                          const maxItems = finance.length;
                          const diff = maxItems - maxIndex;

                          if (diff > 10) return prev + 10;
                          else return prev + diff;
                        });
                      }}
                    >
                      <FaAngleRight />
                    </button>
                    <button
                      ref={checkButtonRef}
                      className="page-controls_btn double-right"
                      onClick={() => {
                        setPageNumber((prevState) => prevState + 2);
                        setMaxIndex((prev) => {
                          const maxItems = finance.length;
                          const diff = maxItems - maxIndex;

                          if (diff > 20) return prev + 20;
                          else return prev + diff;
                        });
                      }}
                    >
                      <FaAngleDoubleRight />
                    </button>
                  </div>
                  <div className="page-details">
                    <span className="current-items">
                      Items{" "}
                      {maxIndex % 10 === 0
                        ? maxIndex - 9
                        : maxIndex - ((maxIndex % 10) - 1)}{" "}
                      - {maxIndex}
                    </span>
                    <span className="total-items">
                      ({finance.length} Items)
                    </span>
                  </div>
                </div>
              </div>
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

export default Finance;
