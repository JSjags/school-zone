import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  fetchSchoolSettings,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import {
  openEditProfileModal,
  setCurrentPage,
  showForm,
} from "../../features/config/configData";

import { Wrapper, Content } from "./Settings.styles";

import PageHeader from "../../components/PageHeader/Index";
import Options from "../../components/Options/Index";
import Number from "../../components/Number/Index";
import Switch from "../../components/Switch/Index";
import Spinner from "../../components/Spinner/Index";
import EditModal from "../../components/EditModal/Index";

import { BsBrush } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { RiErrorWarningLine, RiSave3Fill } from "react-icons/ri";
import { MdOutlineAssignmentReturn } from "react-icons/md";

import { LoadingContainer } from "../SchoolDashboard/SchoolDashboard.styles";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_BASE_URL
      : "";

  const themeOptions = useRef("Light Dark Auto");
  const paginationResultsRef = useRef();
  const saveChangeRef = useRef();

  const { isEditProfileModalOpen } = useSelector((state) => state.config);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const {
    data: schoolData,
    isLoading,
    isSuccess,
    message,
  } = useSelector((state) => state.schoolData);
  const { isSettingsLoading, isSettingsSuccess, isSettingsError } = useSelector(
    (state) => state.schoolData
  );

  const [settingsData, setSettingsData] = useState({
    theme: "Light",
    paginationResults: 12,
    schoolSlug: false,
  });
  const [showMessage, setShowMessage] = useState(false);

  const updateSettings = async (object) => {
    if (saveChangeRef.current) saveChangeRef.current.disabled = true;
    const serverResponse = await axios({
      url: `${baseUrl}/api/schools/${schoolId}/settings`,
      method: "put",
      data: object,
      headers: {
        Authorization: `Bearer ${schoolToken}`,
      },
    });
    if (serverResponse.data.message === "successful") {
      dispatch(fetchSchoolSettings(schoolToken));
      localStorage.setItem("schoolZoneTheme", object.theme);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
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

    dispatch(fetchSchoolData(schoolToken));
  }, [schoolToken, dispatch, navigate, message]);

  useEffect(() => {
    dispatch(setCurrentPage("settings"));
  }, [dispatch]);

  useEffect(() => {
    if (!schoolData?.settings)
      setSettingsData({
        theme: "Light",
        paginationResults: 12,
        schoolSlug: false,
      });

    if (schoolData?.settings)
      setSettingsData(JSON.parse(JSON.stringify(schoolData.settings)));

    localStorage.setItem(
      "schoolZoneTheme",
      schoolData?.settings?.theme ? schoolData?.settings?.theme : "Light"
    );

    paginationResultsRef.current = schoolData?.settings?.paginationResults;
  }, [schoolData.settings]);

  useEffect(() => {
    if (settingsData?.schoolSlug && !schoolData?.schoolSlug) {
      dispatch(openEditProfileModal());
      dispatch(showForm("createSlug"));
    }
  }, [dispatch, schoolData?.schoolSlug, settingsData?.schoolSlug]);

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
            <PageHeader title="Settings" />
            <section className="settings-section">
              {isSettingsLoading && <Spinner />}
              {!isSettingsLoading && isSettingsSuccess && showMessage && (
                <div className="settings-success">
                  <RiSave3Fill />
                  <p>Settings saved successfully.</p>
                </div>
              )}
              {!isSettingsLoading && isSettingsError && showMessage && (
                <div className="settings-error">
                  <RiErrorWarningLine />
                  <p>Settings not saved.</p>
                </div>
              )}
              <h2 className="section-header">General</h2>
              <div className="setting-item">
                <div className="setting-icon">
                  <BsBrush />
                </div>
                <div className="setting-content">
                  <div className="setting-title">
                    <h3>SchoolZone Theme</h3>
                    <Options
                      options={themeOptions.current}
                      value={settingsData.theme}
                      setShowMessage={setShowMessage}
                      formData={settingsData}
                      setFormData={setSettingsData}
                      name={"theme"}
                    />
                  </div>
                  <p className="setting-info">
                    Set the theme and appearance based on your preference.
                  </p>
                </div>
              </div>
              <div className="setting-item">
                <div className="setting-icon">
                  <MdOutlineAssignmentReturn />
                </div>
                <div className="setting-content">
                  <div className="setting-title">
                    <h3>Paginated Results</h3>
                    <Number
                      value={settingsData.paginationResults}
                      setFormData={setSettingsData}
                      name="paginationResults"
                    />
                  </div>
                  <p className="setting-info">
                    Set default amount of results returned after search or
                    pagination.
                  </p>
                </div>
              </div>
              <div className="toast-item">
                {settingsData.paginationResults > 30 && (
                  <div className="page-results-warning">
                    <RiErrorWarningLine />
                    <p>Page results cannot be set more than 30.</p>
                  </div>
                )}
                {settingsData.paginationResults < 10 && (
                  <div className="page-results-warning">
                    <RiErrorWarningLine />
                    <p>Page results cannot be set less than 10.</p>
                  </div>
                )}
                {settingsData.paginationResults >= 10 &&
                  settingsData.paginationResults <= 30 &&
                  settingsData.paginationResults !==
                    paginationResultsRef.current && (
                    <button
                      ref={saveChangeRef}
                      className="save-change-button"
                      onClick={() => {
                        updateSettings(settingsData);
                      }}
                    >
                      <RiSave3Fill />
                      <span>Save Change</span>
                    </button>
                  )}
              </div>
            </section>
            <section className="settings-section">
              <h2 className="section-header">Personalization</h2>
              <div className="setting-item">
                <div className="setting-icon">
                  <TbWorld />
                </div>
                <div className="setting-content">
                  <div className="setting-title">
                    <h3>Create School Slug | URL</h3>
                    <Switch
                      isOn={settingsData.schoolSlug}
                      setIsOn={setSettingsData}
                      name={"schoolSlug"}
                    />
                  </div>
                  <p className="setting-info">
                    Create URL endpoint for students and staffs to login by
                    generating a custom slug.
                  </p>
                  {schoolData?.schoolSlug && (
                    <p className="url-sample">
                      {schoolData.name} URL endpoint:
                      https://schoolzone.com/myschool/{schoolData.schoolSlug}
                    </p>
                  )}
                </div>
              </div>
            </section>
          </main>
        </Content>
      )}
    </Wrapper>
  );
};

export default Settings;
