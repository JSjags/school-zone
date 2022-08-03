import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import { setCurrentPage } from "../../features/config/configData";

import { FaSignOutAlt, FaIdCardAlt } from "react-icons/fa";
import {
  MdMessage,
  MdNotifications,
  MdSettings,
  MdSpaceDashboard,
  MdPeopleAlt,
  MdLocationPin,
} from "react-icons/md";

import { Wrapper, Content } from "./Settings.styles";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("schoolCredentials");
    dispatch(resetSchoolAuth());
    dispatch(resetSchoolData());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(setCurrentPage("settings"));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <main>
          <header>
            <h1>Settings</h1>
            <ul>
              <li>
                <MdMessage style={{ fontSize: "1.4rem" }} />
                <span>Messages</span>
              </li>
              <li>
                <MdNotifications style={{ fontSize: "1.4rem" }} />
                <span>Notifications</span>
              </li>
              <li>
                <MdSettings style={{ fontSize: "1.4rem" }} />
                <span>Settings</span>
              </li>
            </ul>
            <button id="sign-out" onClick={handleLogout}>
              <FaSignOutAlt style={{ fontSize: "1.4rem" }} />
              <span>Sign out</span>
            </button>
          </header>
        </main>
      </Content>
    </Wrapper>
  );
};

export default Settings;
