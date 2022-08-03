import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import { setCurrentPage } from "../../features/config/configData";

import { FaSignOutAlt } from "react-icons/fa";
import { BsPersonPlus } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { MdMessage, MdNotifications, MdSettings } from "react-icons/md";

import { Wrapper, Content } from "./Students.styles";

import noStudentSvg from "../../assets/no-student.svg";

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { students } = useSelector((state) => state.schoolData.data);

  const handleLogout = () => {
    localStorage.removeItem("schoolCredentials");
    dispatch(resetSchoolAuth());
    dispatch(resetSchoolData());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(setCurrentPage("students"));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <main>
          <header>
            <h1>Students</h1>
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
          {students.length < 1 && (
            <div className="create-student">
              <img alt="add-student" src={noStudentSvg}></img>
              <p>No registered student found.</p>
              <div className="create-student-button-group">
                <button>
                  <BsPersonPlus style={{ fontSize: "2rem" }} />
                  <span>Register Student</span>
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

export default Students;
