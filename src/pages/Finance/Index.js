import { useState, useEffect } from "react";
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
import { FaRegIdCard } from "react-icons/fa";

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
            {finance && finance.length && (
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
                  {finance.map((fin, index, arr) => (
                    <div
                      key={index}
                      className={
                        fin.statementType.toLowerCase() === "revenue"
                          ? "financial-item revenue"
                          : "financial-item expense"
                      }
                    >
                      <h3>{fin.statementType}</h3>
                      <p classname="amount">
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
                        <span className="in-words">{fin.AmountInWords}</span>
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
                          <span className="desc-body">{": " + fin.date}</span>
                        </div>
                        <div>
                          <span className="desc-title">Time</span>
                          <span className="desc-body">{": " + fin.time}</span>
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
                  ))}
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
