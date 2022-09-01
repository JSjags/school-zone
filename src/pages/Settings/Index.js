import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useDarkMode from "use-dark-mode";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import { setCurrentPage } from "../../features/config/configData";

import { Wrapper, Content } from "./Settings.styles";

import PageHeader from "../../components/PageHeader/Index";
import Options from "../../components/Options/Index";
import Number from "../../components/Number/Index";
import Switch from "../../components/Switch/Index";

import { BsBrush } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { MdOutlineAssignmentReturn } from "react-icons/md";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const themeOptions = useRef("Light Dark Default");

  const [settingsData, setSettingsData] = useState({
    theme: "Light",
    paginationResults: 12,
    schoolSlug: false,
  });

  useEffect(() => {
    dispatch(setCurrentPage("settings"));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <main>
          <PageHeader title="Settings" />
          <section className="settings-section">
            <h2 className="section-header">General</h2>
            <div className="setting-item">
              <div className="setting-icon">
                <BsBrush />
              </div>
              <div className="setting-content">
                <div className="setting-title">
                  <h3>Set SchoolZone Theme</h3>
                  <Options
                    options={themeOptions.current}
                    value={settingsData.theme}
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
                  <h3>Set Paginated Results</h3>
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
              </div>
            </div>
          </section>
        </main>
      </Content>
    </Wrapper>
  );
};

export default Settings;
