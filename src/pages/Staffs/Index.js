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
import { BsPersonPlus } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import {
  MdMessage,
  MdNotifications,
  MdSettings,
  MdSpaceDashboard,
  MdPeopleAlt,
  MdLocationPin,
} from "react-icons/md";

import { Wrapper, Content } from "./Staffs.styles";

import noStaffsSvg from "../../assets/no-staff.svg";

const Staffs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("schoolCredentials");
    dispatch(resetSchoolAuth());
    dispatch(resetSchoolData());
    navigate("/login");
  };

  const { staffs } = useSelector((state) => state.schoolData.data);

  useEffect(() => {
    dispatch(setCurrentPage("staffs"));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <main>
          <header>
            <h1>Staffs</h1>
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
          {staffs.length < 1 && (
            <div className="create-staff">
              <img alt="add-student" src={noStaffsSvg}></img>
              <p>No registered staffs were found.</p>
              <div className="create-staff-button-group">
                <button>
                  <BsPersonPlus style={{ fontSize: "2rem" }} />
                  <span>Register Staff</span>
                </button>
                <button>
                  <IoCreateOutline style={{ fontSize: "2rem" }} />
                  <span>Create Register Template</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </Content>
    </Wrapper>
  );
};

export default Staffs;
