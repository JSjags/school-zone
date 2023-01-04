import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Content } from "./SideBar.styles";
import { FaIdCardAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { HiMenuAlt2, HiOutlineNewspaper } from "react-icons/hi";
import { IoClose, IoCreateOutline } from "react-icons/io5";
import { BsFillCalendarWeekFill, BsKanban } from "react-icons/bs";
import { MdSettings, MdSpaceDashboard, MdPeopleAlt } from "react-icons/md";
import { setDashboardMenu } from "../../features/config/configData";

import { Link } from "react-router-dom";

export const defaultCoverPicUrl =
  "https://th.bing.com/th/id/R.e78ca3715939fafa65a540c511c4fe93?rik=gbsd5JA%2faidV5A&pid=ImgRaw&r=0";

export const defaultAvatarUrl =
  "https://th.bing.com/th/id/R.49a6854a63de1e699261f3aa0b98a471?rik=xgE%2b4OUEV%2fPu8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_285684.png&ehk=cxsRbD9Z36xapVJvQBCO2RTp2HQ46Uvp%2bush1b6%2bThI%3d&risl=&pid=ImgRaw&r=0";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.schoolData);
  const currentPage = useSelector((state) => state.config.currentPage);
  const { isDashboardMenuOpen } = useSelector((state) => state.config);

  const handleNavClick = (e) => {
    const children = [...e.currentTarget.parentElement.children];
    children.forEach((el) => el.classList.remove("current"));
    e.currentTarget.classList.add("current");
  };

  const handleDashboardMenu = () => {
    dispatch(setDashboardMenu());
  };

  useEffect(() => {}, [currentPage]);

  return (
    <Content>
      <div className="menu-btn" onClick={handleDashboardMenu}>
        {isDashboardMenuOpen ? (
          <IoClose style={{ color: "white", fontSize: "1.4rem" }} />
        ) : (
          <HiMenuAlt2 style={{ color: "white", fontSize: "1.4rem" }} />
        )}
      </div>
      <aside>
        <div className="aside-header">
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
            <div
              className="profile-name"
              onClick={() => {
                navigate("/schooldashboard/profile");
                dispatch(setDashboardMenu());
              }}
            >
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
            {/* General header */}
            <li className="section-heading">GENERAL</li>

            <Link
              to={"/schooldashboard"}
              className={currentPage === "schooldashboard" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li id="nav-link">
                <MdSpaceDashboard style={{ fontSize: "1.5rem" }} />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/students"}
              onClick={handleNavClick}
              className={currentPage === "students" ? "current" : ""}
            >
              <li id="nav-link">
                <MdPeopleAlt style={{ fontSize: "1.5rem" }} />
                <span>Students</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/staffs"}
              onClick={handleNavClick}
              className={currentPage === "staffs" ? "current" : ""}
            >
              <li id="nav-link">
                <FaIdCardAlt style={{ fontSize: "1.5rem" }} />
                <span>Staff</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/finance"}
              onClick={handleNavClick}
              className={currentPage === "finance" ? "current" : ""}
            >
              <li id="nav-link">
                <FaRegMoneyBillAlt style={{ fontSize: "1.5rem" }} />
                <span>Finance</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/posts"}
              onClick={handleNavClick}
              className={currentPage === "posts" ? "current" : ""}
            >
              <li id="nav-link">
                <HiOutlineNewspaper style={{ fontSize: "1.6rem" }} />
                <span>Articles</span>
              </li>
            </Link>

            {/* Applications header */}
            <li className="section-heading">APPLICATIONS</li>

            <Link
              to={"/schooldashboard/scheduler"}
              className={currentPage === "scheduler" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li id="nav-link">
                <BsFillCalendarWeekFill style={{ fontSize: "1.5rem" }} />
                <span>Scheduler</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/editor"}
              className={currentPage === "editor" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li id="nav-link">
                <IoCreateOutline style={{ fontSize: "1.7rem" }} />
                <span>Editor</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/kanban"}
              className={currentPage === "kanban" ? "current" : ""}
              onClick={handleNavClick}
            >
              <li id="nav-link">
                <BsKanban style={{ fontSize: "1.5rem" }} />
                <span>Kanban</span>
              </li>
            </Link>

            {/* Account header */}
            <li className="section-heading">ACCOUNT</li>

            <Link
              to={"/schooldashboard/profile"}
              onClick={handleNavClick}
              className={currentPage === "profile" ? "current" : ""}
            >
              <li id="nav-link">
                <RiProfileFill style={{ fontSize: "1.5rem" }} />
                <span>Profile</span>
              </li>
            </Link>
            <Link
              to={"/schooldashboard/settings"}
              onClick={handleNavClick}
              className={currentPage === "settings" ? "current" : ""}
            >
              <li id="nav-link">
                <MdSettings style={{ fontSize: "1.5rem" }} />
                <span>Settings</span>
              </li>
            </Link>
          </ul>
        </section>
      </aside>
    </Content>
  );
};

export default SideBar;
