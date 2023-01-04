import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchSchoolData } from "../../features/school/schoolDataSlice";
import {
  openEditProfileModal,
  setCurrentPage,
  setFinanceStatementId,
  showForm,
} from "../../features/config/configData";

import { BsPersonPlus } from "react-icons/bs";
import { RiFilterLine, RiFundsFill } from "react-icons/ri";
import {
  BiBookAdd,
  BiError,
  BiLineChartDown,
  BiLineChart,
} from "react-icons/bi";
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

  const { token: schoolToken } = useSelector((state) => state.schoolAuth);
  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);
  const { finance } = useSelector((state) => state.schoolData.data);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const viewOptions = "All Revenue Expenses";

  const [formData, setFormData] = useState({
    view: "All",
    filter: "All",
  });
  const [showTotalFinance, setShowTotalFinance] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const internationalNumberFormat = useMemo(
    () => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }),
    []
  );

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

  const calculateTotalRevenue = useCallback(() => {
    const totalRevenue = finance
      .filter((fin) => fin.statementType.trim().toLowerCase() === "revenue")
      .reduce((acc, curr) => {
        return parseFloat(acc) + parseFloat(curr.AmountInFigures);
      }, 0);

    return internationalNumberFormat.format(totalRevenue);
  }, [finance, internationalNumberFormat]);

  const calculateTotalExpenses = useCallback(() => {
    const totalExpenses = finance
      .filter((fin) => fin.statementType.trim().toLowerCase() === "expense")
      .reduce((acc, curr) => {
        return parseFloat(acc) + parseFloat(curr.AmountInFigures);
      }, 0);

    return internationalNumberFormat.format(totalExpenses);
  }, [finance, internationalNumberFormat]);

  const analyseFinancialStatus = () => {
    return parseFloat(calculateTotalRevenue().replaceAll(",", "")) >
      parseFloat(calculateTotalExpenses().replaceAll(",", ""))
      ? "Budget Surplus"
      : "Budget Deficit";
  };
  const analyseFinancialStatusAmount = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(
      parseFloat(calculateTotalRevenue().replaceAll(",", "")) -
        parseFloat(calculateTotalExpenses().replaceAll(",", ""))
    );
  };

  const financeLength = useCallback(() => {
    if (formData.view.trim().toLowerCase() === "all") return finance.length;

    const filtered = finance.filter(
      (item) =>
        item.statementType.trim().toLowerCase() ===
        formData.view.trim().toLowerCase()
    );
    return filtered.length;
  }, [finance, formData.view]);

  const searchedDataLength = useCallback(() => {
    if (formData.view.trim().toLowerCase() === "all")
      return searchedData.length;

    const filtered = searchedData.filter(
      (item) =>
        item.statementType.trim().toLowerCase() ===
        formData.view.trim().toLowerCase()
    );
    return filtered.length;
  }, [searchedData, formData.view]);

  const checkButtonRef = useCallback(
    (node) => {
      if (node === null) return;
      if (finance === undefined) return;

      if (pageNumber - 2 < 1 && node.classList.contains("double-left")) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (pageNumber - 1 < 1 && node.classList.contains("left")) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (
        pageNumber + 1 >
          (!showSearch
            ? Math.ceil(financeLength() / 10)
            : Math.ceil(searchedDataLength() / 10)) &&
        node.classList.contains("right")
      ) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (
        pageNumber + 2 >
          (!showSearch
            ? Math.ceil(financeLength() / 10)
            : Math.ceil(searchedDataLength() / 10)) &&
        node.classList.contains("double-right")
      ) {
        node.disabled = true;
        return node.classList.add("disabled");
      }

      node.disabled = false;
      node.classList.remove("disabled");
    },
    [pageNumber, finance, showSearch, financeLength, searchedDataLength]
  );

  useEffect(() => {
    setPageNumber(1);
    setMaxIndex(1 * 10);
  }, [formData.view]);

  useEffect(() => {
    setSearchText("");
  }, [formData.filter]);

  useEffect(() => {
    if (searchText === "") {
      setSearchedData([]);
      setShowSearch(false);
    }
  }, [searchText]);

  useEffect(() => {
    dispatch(setCurrentPage("finance"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSchoolData(schoolToken));
  }, [dispatch, schoolToken]);

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
            {(finance === undefined || finance.length < 1) && (
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
            {!isLoading && finance && finance.length > 0 && (
              <>
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
                      <div className="item filter">
                        <RiFilterLine style={{ fontSize: "1.6rem" }} />
                        <Options
                          options={Object.entries(
                            schoolData.templates.finance
                          ).reduce((acc, curr) => {
                            if (
                              curr[1].name === "Statement Type" ||
                              curr[1].type === "Image Picker"
                            )
                              return acc;
                            return acc + " " + curr[0];
                          }, "All statementId")}
                          value={formData.filter}
                          setFormData={setFormData}
                          name="filter"
                        />
                      </div>
                      <SearchBar
                        showSearch={showSearch}
                        setShowSearch={setShowSearch}
                        setSearchText={setSearchText}
                        financeData={finance}
                        setSearchedData={setSearchedData}
                        setPageNumber={setPageNumber}
                        setMaxIndex={setMaxIndex}
                        filter={formData.filter}
                      />
                    </div>
                  </div>
                  <div className="finance-box">
                    {showSearch ? (
                      <h2>
                        Search results for
                        <span className="search-text">
                          {' "' + searchText + '" '}
                        </span>
                        of
                        <span className="filter-view">
                          {' "' + formData.view + '" '}
                        </span>
                        in
                        <span className="filter-text">
                          {' "' + formData.filter + '" '}
                        </span>
                      </h2>
                    ) : (
                      <h2>{formData.view}</h2>
                    )}
                    <hr className="header-rule" />
                    {!showSearch &&
                      formData.view.trim().toLowerCase() === "all" &&
                      finance.map(
                        (fin, index) =>
                          index >=
                            maxIndex -
                              (maxIndex % 10 === 0 ? 10 : maxIndex % 10) &&
                          index < maxIndex && (
                            <div
                              key={index}
                              className={
                                fin.statementType.trim().toLowerCase() ===
                                "revenue"
                                  ? "financial-item revenue"
                                  : "financial-item expense"
                              }
                              onClick={() => {
                                dispatch(openEditProfileModal());
                                dispatch(showForm("financialStatement"));
                                dispatch(
                                  setFinanceStatementId(fin.statement_id)
                                );
                              }}
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
                    {!showSearch &&
                      formData.view.trim().toLowerCase() === "revenue" &&
                      finance
                        .filter(
                          (f) =>
                            f.statementType.trim().toLowerCase() === "revenue"
                        )
                        .map(
                          (fin, index) =>
                            index >=
                              maxIndex -
                                (maxIndex % 10 === 0 ? 10 : maxIndex % 10) &&
                            index < maxIndex && (
                              <div
                                key={index}
                                className={"financial-item revenue"}
                                onClick={() => {
                                  dispatch(openEditProfileModal());
                                  dispatch(showForm("financialStatement"));
                                  dispatch(
                                    setFinanceStatementId(fin.statement_id)
                                  );
                                }}
                              >
                                <h3>{fin.statementType}</h3>
                                <p className="amount">
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
                                  <span className="desc-title">
                                    Description
                                  </span>
                                  <span className="desc-body">
                                    {": " + fin.statementDescription}
                                  </span>
                                </p>
                                <p className="description date-time">
                                  <div>
                                    <span className="desc-title">Date</span>
                                    <span className="desc-body">
                                      {": " +
                                        formatDateTime(fin.date, fin.time)}
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
                    {!showSearch &&
                      formData.view.trim().toLowerCase() === "expense" &&
                      finance
                        .filter(
                          (f) =>
                            f.statementType.trim().toLowerCase() === "expense"
                        )
                        .map(
                          (fin, index) =>
                            index >=
                              maxIndex -
                                (maxIndex % 10 === 0 ? 10 : maxIndex % 10) &&
                            index < maxIndex && (
                              <div
                                key={index}
                                className="financial-item expense"
                                onClick={() => {
                                  dispatch(openEditProfileModal());
                                  dispatch(showForm("financialStatement"));
                                  dispatch(
                                    setFinanceStatementId(fin.statement_id)
                                  );
                                }}
                              >
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
                                  <span className="desc-title">
                                    Description
                                  </span>
                                  <span className="desc-body">
                                    {": " + fin.statementDescription}
                                  </span>
                                </p>
                                <p className="description date-time">
                                  <div>
                                    <span className="desc-title">Date</span>
                                    <span className="desc-body">
                                      {": " +
                                        formatDateTime(fin.date, fin.time)}
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
                    {showSearch &&
                      formData.view.trim().toLowerCase() === "all" &&
                      searchedData.map(
                        (fin, index) =>
                          index >=
                            maxIndex -
                              (maxIndex % 10 === 0 ? 10 : maxIndex % 10) &&
                          index < maxIndex && (
                            <div
                              key={index}
                              className={
                                fin.statementType.trim().toLowerCase() ===
                                "revenue"
                                  ? "financial-item revenue"
                                  : "financial-item expense"
                              }
                              onClick={() => {
                                dispatch(openEditProfileModal());
                                dispatch(showForm("financialStatement"));
                                dispatch(
                                  setFinanceStatementId(fin.statement_id)
                                );
                              }}
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
                    {showSearch &&
                      formData.view.trim().toLowerCase() === "revenue" &&
                      searchedData
                        .filter(
                          (f) =>
                            f.statementType.trim().toLowerCase() === "revenue"
                        )
                        .map(
                          (fin, index) =>
                            index >=
                              maxIndex -
                                (maxIndex % 10 === 0 ? 10 : maxIndex % 10) &&
                            index < maxIndex && (
                              <div
                                key={index}
                                className={"financial-item revenue"}
                                onClick={() => {
                                  dispatch(openEditProfileModal());
                                  dispatch(showForm("financialStatement"));
                                  dispatch(
                                    setFinanceStatementId(fin.statement_id)
                                  );
                                }}
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
                                  <span className="desc-title">
                                    Description
                                  </span>
                                  <span className="desc-body">
                                    {": " + fin.statementDescription}
                                  </span>
                                </p>
                                <p className="description date-time">
                                  <div>
                                    <span className="desc-title">Date</span>
                                    <span className="desc-body">
                                      {": " +
                                        formatDateTime(fin.date, fin.time)}
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
                    {showSearch &&
                      formData.view.trim().toLowerCase() === "expense" &&
                      searchedData
                        .filter(
                          (f) =>
                            f.statementType.trim().toLowerCase() === "expense"
                        )
                        .map(
                          (fin, index) =>
                            index >=
                              maxIndex -
                                (maxIndex % 10 === 0 ? 10 : maxIndex % 10) &&
                            index < maxIndex && (
                              <div
                                key={index}
                                className="financial-item expense"
                                onClick={() => {
                                  dispatch(openEditProfileModal());
                                  dispatch(showForm("financialStatement"));
                                  dispatch(
                                    setFinanceStatementId(fin.statement_id)
                                  );
                                }}
                              >
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
                                  <span className="desc-title">
                                    Description
                                  </span>
                                  <span className="desc-body">
                                    {": " + fin.statementDescription}
                                  </span>
                                </p>
                                <p className="description date-time">
                                  <div>
                                    <span className="desc-title">Date</span>
                                    <span className="desc-body">
                                      {": " +
                                        formatDateTime(fin.date, fin.time)}
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
                    {showSearch && searchedDataLength() < 1 && (
                      <p className="no-results">
                        No results found for "{searchText}".
                      </p>
                    )}
                  </div>
                  {((!showSearch && financeLength() > 10) ||
                    (showSearch && searchedDataLength() > 10)) && (
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
                          Page {pageNumber} of{" "}
                          {!showSearch
                            ? Math.ceil(financeLength() / 10)
                            : Math.ceil(searchedDataLength() / 10)}
                        </span>
                        <button
                          ref={checkButtonRef}
                          className="page-controls_btn right"
                          onClick={() => {
                            setPageNumber((prevState) => prevState + 1);
                            setMaxIndex((prev) => {
                              const maxItems = !showSearch
                                ? financeLength()
                                : searchedDataLength();
                              const diff = maxItems - prev;

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
                              const maxItems = !showSearch
                                ? financeLength()
                                : searchedDataLength();
                              const diff = maxItems - prev;

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
                          (
                          {!showSearch ? financeLength() : searchedDataLength()}{" "}
                          Items)
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={
                    !showTotalFinance ? "total-finance" : "total-finance active"
                  }
                >
                  {showTotalFinance && (
                    <>
                      <h2 className="finance-summary">Finance Summary</h2>
                      <div className="total-finance-info">
                        <div className="total-revenue">
                          <h2>Total Revenue:</h2>
                          <p>
                            +{schoolData.currency}
                            {calculateTotalRevenue()}
                          </p>
                        </div>
                        <div className="total-expenses">
                          <h2>Total Expenses:</h2>
                          <p>
                            -{schoolData.currency}
                            {calculateTotalExpenses()}
                          </p>
                        </div>
                        <div className="financial-status">
                          <h2>Financial Status:</h2>
                          <div className="financial-status-box">
                            {analyseFinancialStatus() === "Budget Deficit" ? (
                              <>
                                <BiLineChartDown
                                  style={{ color: "red", fontSize: "1.4rem" }}
                                />
                                <span style={{ color: "red" }}>
                                  Budget Deficit
                                </span>
                              </>
                            ) : (
                              <p>
                                <BiLineChart
                                  style={{
                                    color: "var(--secondary-color",
                                    fontSize: "1.4rem",
                                  }}
                                />
                                <span
                                  style={{ color: "var(--secondary-color" }}
                                >
                                  Budget Surplus
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="financial-status">
                          <h2>{analyseFinancialStatus()}:</h2>
                          <p>
                            {Math.sign(
                              parseFloat(
                                analyseFinancialStatusAmount()
                                  .replaceAll(",", "")
                                  .replace("$", "")
                              )
                            ) === -1 ? (
                              <span className="deficit">
                                {analyseFinancialStatusAmount()}
                              </span>
                            ) : (
                              <span className="surplus">
                                {analyseFinancialStatusAmount()}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setShowTotalFinance(false);
                        }}
                      >
                        Dismiss
                      </button>
                    </>
                  )}
                  {!showTotalFinance && (
                    <button
                      onClick={() => {
                        setShowTotalFinance(true);
                      }}
                    >
                      <RiFundsFill
                        style={{
                          fontSize: "1.4rem, color: var(--primary-color)",
                        }}
                      />
                    </button>
                  )}
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

export default Finance;
