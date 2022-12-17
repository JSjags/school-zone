import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { Scheduler as MainScheduler } from "devextreme-react/scheduler";
import DataGrid, { RemoteOperations } from "devextreme-react/data-grid";

import CustomStore from "devextreme/data/custom_store";

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
} from "./Scheduler.styles";
import { BiError } from "react-icons/bi";

import PageHeader from "../../components/PageHeader/Index";
import Spinner from "../../components/Spinner/Index";
import EditModal from "../../components/EditModal/Index";

const LightTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/LightTheme")
);
const DarkTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/DarkTheme")
);

const SchedulerTheme = ({ children }) => {
  const CHOSEN_THEME =
    useSelector((state) => state.schoolData?.data?.settings?.theme) ?? "Light";
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

const Scheduler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_BASE_URL
      : "";

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

  // Scheduler component states and functions
  const isNotEmpty = (value) =>
    value !== undefined && value !== null && value !== "";

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  const customDataSource = new CustomStore({
    key: "ID",

    // Fetch All Appointments
    load: (loadOptions) => {
      let params = "?";

      [
        "filter",
        "group",
        "groupSummary",
        "parentIds",
        "requireGroupCount",
        "requireTotalCount",
        "searchExpr",
        "searchOperation",
        "searchValue",
        "select",
        "sort",
        "skip",
        "take",
        "totalSummary",
        "userData",
      ].forEach(function (i) {
        if (i in loadOptions && isNotEmpty(loadOptions[i])) {
          params += `${i}=${JSON.stringify(loadOptions[i])}&`;
        }
      });
      params = params.slice(0, -1);

      return fetch(`${baseUrl}/api/schools/${schoolId}/schedules${params}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      })
        .then(handleErrors)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          return {
            data: response.data,
            totalCount: response.totalCount,
            summary: response.summary,
            groupCount: response.groupCount,
          };
        })
        .catch((error) => {
          console.log(error);
          throw Error("Network error");
        });
    },

    // Create Appointment
    insert: (values) => {
      return fetch(`${baseUrl}/api/schools/${schoolId}/schedules`, {
        method: "POST",
        body: JSON.stringify({
          ...values,
          ID: Math.trunc((Math.random() * 1000000000) / Math.random()),
        }),
        headers: {
          Authorization: `Bearer ${schoolToken}`,
          "Content-Type": "application/json",
        },
      })
        .then(handleErrors)
        .catch(() => {
          throw Error("Network error");
        });
    },

    // Delete Appointment
    remove: (key) => {
      return fetch(
        `${baseUrl}/api/schools/${schoolId}/schedules/${encodeURIComponent(
          key
        )}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${schoolToken}`,
          },
        }
      )
        .then(handleErrors)
        .catch(() => {
          throw Error("Network error");
        });
    },

    // Update Appointment
    update: (key, values) => {
      console.log(key, values);
      return fetch(
        `${baseUrl}/api/schools/${schoolId}/schedules/${encodeURIComponent(
          key
        )}`,
        {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            Authorization: `Bearer ${schoolToken}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then(handleErrors)
        .catch(() => {
          throw Error("Network error");
        });
    },
  });

  const views = ["day", "week", "workWeek", "month"];
  const [currentView, setCurrentView] = useState("day");

  const onOptionChanged = useCallback(
    (e) => {
      if (e.name === "currentView") {
        setCurrentView(e.value);
      }
    },
    [setCurrentView]
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

    dispatch(fetchSchoolData(schoolToken));
  }, [schoolToken, dispatch, navigate, message]);

  useEffect(() => {
    dispatch(setCurrentPage("scheduler"));
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
      {isEditProfileModalOpen && <EditModal />}
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isSuccess && (
        <Content>
          <main>
            <PageHeader title="Scheduler" />
            <SchedulerTheme>
              <MainScheduler
                allDayPanelMode="all"
                views={views}
                currentView={currentView}
                defaultCurrentDate={new Date()}
                onOptionChanged={onOptionChanged}
                elementAttr={{ id: "scheduler" }}
                dataSource={customDataSource}
                key={Math.trunc((Math.random() * 1000000000) / Math.random())}
                in
              />
            </SchedulerTheme>
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

export default Scheduler;
