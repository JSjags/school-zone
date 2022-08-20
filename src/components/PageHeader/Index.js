import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FaSignOutAlt } from "react-icons/fa";
import { MdMessage, MdNotifications, MdSettings } from "react-icons/md";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";

import { HeaderWrapper } from "./PageHeader.styles";
import { resetSchoolData } from "../../features/school/schoolDataSlice";

const PageHeader = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("schoolCredentials");
    dispatch(resetSchoolAuth());
    dispatch(resetSchoolData());
    navigate("/login");
  };

  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <ul>
        <li>
          <MdMessage style={{ fontSize: "1.4rem" }} />
          <span>Messages</span>
        </li>
        <li>
          <MdNotifications style={{ fontSize: "1.4rem" }} />
          <span>Notifications</span>
        </li>
        <li onClick={() => navigate("/schooldashboard/settings")}>
          <MdSettings style={{ fontSize: "1.4rem" }} />
          <span>Settings</span>
        </li>
      </ul>
      <button id="sign-out" onClick={handleLogout}>
        <FaSignOutAlt style={{ fontSize: "1.4rem" }} />
        <span>Sign out</span>
      </button>
    </HeaderWrapper>
  );
};

export default PageHeader;
