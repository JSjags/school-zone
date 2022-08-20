import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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
import { FaSignOutAlt } from "react-icons/fa";
import { MdMessage, MdNotifications, MdSettings } from "react-icons/md";
import { BiError } from "react-icons/bi";

import PageHeader from "../../components/PageHeader/Index";
import Spinner from "../../components/Spinner/Index";
import noDataSvg from "../../assets/no-data.svg";

const SchoolDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authToken = useSelector((state) => state.schoolAuth.token);

  const { data, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.schoolData
  );

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

  return (
    <Wrapper isSuccess={isSuccess ? true : false}>
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isSuccess && (
        <Content>
          <main>
            <PageHeader title="Dashboard" />
            {data.students.length < 1 && data.staffs.length < 1 && (
              <div className="no-data">
                <img alt="no-data" src={noDataSvg} />
                <p>No data to display, try adding a student or a staff.</p>
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

export default SchoolDashboard;
