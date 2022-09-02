import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Content } from "./SideBar.styles";
import { FaIdCardAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { BsFillCalendarWeekFill, BsKanban } from "react-icons/bs";
import { MdSettings, MdSpaceDashboard, MdPeopleAlt } from "react-icons/md";

import { Link } from "react-router-dom";

export const defaultCoverPicUrl =
  "https://th.bing.com/th/id/R.e78ca3715939fafa65a540c511c4fe93?rik=gbsd5JA%2faidV5A&pid=ImgRaw&r=0";

export const defaultAvatarUrl =
  "https://th.bing.com/th/id/R.49a6854a63de1e699261f3aa0b98a471?rik=xgE%2b4OUEV%2fPu8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_285684.png&ehk=cxsRbD9Z36xapVJvQBCO2RTp2HQ46Uvp%2bush1b6%2bThI%3d&risl=&pid=ImgRaw&r=0";

const SideBar = () => {
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.schoolData);
  const currentPage = useSelector((state) => state.config.currentPage);

  const handleNavClick = (e) => {
    const children = [...e.currentTarget.parentElement.children];
    children.forEach((el) => el.classList.remove("current"));
    e.currentTarget.classList.add("current");
  };

  useEffect(() => {}, [currentPage]);

  return (
    <Content>
      <aside>
        <div
          className="aside-header"
          onClick={() => navigate("/schooldashboard/profile")}
        >
          <div className="aside-bg-cont">
            <img
              className="aside-bg"
              alt="bg-logo"
              src={
                data.backdrop_image ? data.backdrop_image : defaultCoverPicUrl
              }
            />
          </div>
          <div className="profile-name-cont">
            <div className="profile-name">
              <img
                className="avatar-logo"
                alt="avatar"
                src={data.avatar_image ? data.avatar_image : defaultAvatarUrl}
              />
              <div>
                <h3>{data.name}</h3>
                <p>{data.email}</p>
              </div>
            </div>
          </div>
        </div>
        <section id="lower-section">
          <ul id="menu">
            <li className="section-heading">GENERAL</li>
            <Link
              to={"/schooldashboard"}
              className={currentPage === "schooldashboard" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li>
                <MdSpaceDashboard style={{ fontSize: "1.5rem" }} />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/students"}
              onClick={handleNavClick}
              className={currentPage === "students" ? "current" : ""}
            >
              <li>
                <MdPeopleAlt style={{ fontSize: "1.5rem" }} />
                <span>Students</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/staffs"}
              onClick={handleNavClick}
              className={currentPage === "staffs" ? "current" : ""}
            >
              <li>
                <FaIdCardAlt style={{ fontSize: "1.5rem" }} />
                <span>Staffs</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/finance"}
              onClick={handleNavClick}
              className={currentPage === "finance" ? "current" : ""}
            >
              <li>
                <FaRegMoneyBillAlt style={{ fontSize: "1.5rem" }} />
                <span>Finance</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/profile"}
              onClick={handleNavClick}
              className={currentPage === "profile" ? "current" : ""}
            >
              <li>
                <RiProfileFill style={{ fontSize: "1.5rem" }} />
                <span>Profile</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/settings"}
              onClick={handleNavClick}
              className={currentPage === "settings" ? "current" : ""}
            >
              <li>
                <MdSettings style={{ fontSize: "1.5rem" }} />
                <span>Settings</span>
              </li>
            </Link>

            {/* <div className="school-address">
            <MdLocationPin style={{ color: "white", fontSize: "1.5rem" }} />
            <div id="address-cont">
              <h3 id="country">{data.country}</h3>
              <p id="address">{data.address}</p>
            </div>
          </div> */}

            <li className="section-heading">APPLICATIONS</li>
            <Link
              to={"/*"}
              className={currentPage === "calendar" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li>
                <BsFillCalendarWeekFill style={{ fontSize: "1.5rem" }} />
                <span>Calendar</span>
              </li>
            </Link>
            <Link
              to={"/*"}
              className={currentPage === "kanban" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li>
                <IoCreateOutline style={{ fontSize: "1.7rem" }} />
                <span>Editor</span>
              </li>
            </Link>
            <Link
              to={"/*"}
              className={currentPage === "kanban" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li>
                <BsKanban style={{ fontSize: "1.5rem" }} />
                <span>Kanban</span>
              </li>
            </Link>
          </ul>
        </section>
      </aside>
    </Content>
  );
};

export default SideBar;
