import { useEffect, useState } from "react";
import { Wrapper, Content } from "./Header.styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import SideBar from "../SideBar/Index";

import logo from "../../school-zone-logos/school-zone-1-transparent-bg.png";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { setHomeMenu } from "../../features/config/configData";

const InitialHeader = () => {
  const dispatch = useDispatch();
  const { isHomeMenuOpen } = useSelector((state) => state.config);

  const headerVariants = {
    hidden: {
      y: "10vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const navVariants = {
    hidden: {
      y: "-10vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listVariants = {
    hidden: {
      y: "-20px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const [hideNavLinks, setHideNavLinks] = useState(window.innerWidth < 768);

  function handleMenu() {
    dispatch(setHomeMenu());
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768 ? setHideNavLinks(false) : setHideNavLinks(true);
    });
    return () => {
      window.removeEventListener("resize", () => {
        window.innerWidth > 768
          ? setHideNavLinks(false)
          : setHideNavLinks(true);
      });
    };
  }, []);

  return (
    <Content
      as={motion.div}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        {hideNavLinks ? (
          <div className="home-menu-btn">
            {isHomeMenuOpen ? (
              <div onClick={handleMenu}>
                <IoClose
                  style={{ color: "var(--primary-color)", fontSize: "1.4rem" }}
                />
                <span>Close Menu</span>
              </div>
            ) : (
              <div onClick={handleMenu}>
                <HiMenuAlt2
                  style={{ color: "var(--primary-color)", fontSize: "1.4rem" }}
                />
                <span>Menu</span>
              </div>
            )}
          </div>
        ) : (
          <motion.ul variants={navVariants}>
            <motion.li variants={listVariants}>
              <Link to={"/"}>Home</Link>
            </motion.li>

            <motion.li variants={listVariants}>
              <Link to={"/services"}>Our Services</Link>
            </motion.li>

            <motion.li variants={listVariants}>
              <Link to={"/contact"}>Contact Us</Link>
            </motion.li>

            <motion.li variants={listVariants}>
              <Link to={"/about"}>About Us</Link>
            </motion.li>
          </motion.ul>
        )}
      </nav>
      {!hideNavLinks && (
        <div className="account">
          <Link to={"/signup"}>
            <button id="signup">Sign up</button>
          </Link>
          <Link to={"/login"}>
            <button id="login">Log in</button>
          </Link>
        </div>
      )}
    </Content>
  );
};

const Header = () => {
  const [sideBarPosition, setSideBarPosition] = useState(
    window.innerWidth > 768 ? "relative" : "fixed"
  );

  const { isLoggedIn } = useSelector((state) => state.schoolAuth);
  const { isError } = useSelector((state) => state.schoolData);
  const { isDashboardMenuOpen } = useSelector((state) => state.config);

  const getDashboardMenuWidth = () =>
    isDashboardMenuOpen ? "clamp(200px, 20%, 300px)" : "0";

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768
        ? setSideBarPosition("relative")
        : setSideBarPosition("fixed");
    });
    return () => {
      window.removeEventListener("resize", () => {
        window.innerWidth > 768
          ? setSideBarPosition("relative")
          : setSideBarPosition("fixed");
      });
    };
  }, []);

  return (
    <Wrapper
      id="nav-bar"
      style={{
        padding: `${isLoggedIn ? "0" : "0 clamp(10px, 3%, 50px)"}`,
        width: `${isLoggedIn ? getDashboardMenuWidth() : "100%"}`,
        position: `${isLoggedIn ? sideBarPosition : "sticky"}`,
        top: 0,
        left: 0,
        zIndex: 10000,
        background: `${isLoggedIn ? "transparent" : "var(--background)"}`,
        backdropFilter: `${isLoggedIn && "blur(0)"}`,
        display: `${isError && "none"}`,
      }}
    >
      {isLoggedIn ? <SideBar /> : <InitialHeader />}
    </Wrapper>
  );
};

export default Header;
