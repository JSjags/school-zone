import { Wrapper, Content } from "./Header.styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import SideBar from "../SideBar/Index";

import logo from "../../school-zone-logos/school-zone-1-transparent-bg.png";

const Header = () => {
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

  const InitialHeader = () => {
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
        </nav>
        <div className="account">
          <Link to={"/signup"}>
            <button id="signup">Sign up</button>
          </Link>
          <Link to={"/login"}>
            <button id="login">Log in</button>
          </Link>
        </div>
      </Content>
    );
  };

  const { isLoggedIn } = useSelector((state) => state.schoolAuth);
  const { isError } = useSelector((state) => state.schoolData);

  return (
    <Wrapper
      style={{
        padding: `${isLoggedIn ? "0" : "0 50px"}`,
        // flex: `${isLoggedIn ? "0.25" : "100%"}`,
        // overflow: `${isLoggedIn && "hidden"}`,
        width: `${isLoggedIn ? "20%" : "100%"}`,
        position: `${isLoggedIn && "relative"}`,
        background: `${isLoggedIn && "var(--background)"}`,
        display: `${isError && "none"}`,
      }}
    >
      {isLoggedIn ? <SideBar /> : <InitialHeader />}
    </Wrapper>
  );
};

export default Header;
