import { Content } from "./MobileMenu.styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { setHomeMenu } from "../../features/config/configData";

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
  exit: {
    opacity: 0,
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
  exit: {
    y: "-10vh",
    opacity: 0,
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
  exit: {
    y: "-20px",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const MobileMenu = () => {
  const dispatch = useDispatch();

  function handleMenu() {
    dispatch(setHomeMenu());
  }

  return (
    <Content
      as={motion.div}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <nav>
        <motion.ul variants={navVariants}>
          <motion.li onClick={handleMenu} variants={listVariants}>
            <Link to={"/"}>Home</Link>
          </motion.li>

          <motion.li onClick={handleMenu} variants={listVariants}>
            <Link to={"/services"}>Our Services</Link>
          </motion.li>

          <motion.li onClick={handleMenu} variants={listVariants}>
            <Link to={"/contact"}>Contact Us</Link>
          </motion.li>

          <motion.li onClick={handleMenu} variants={listVariants}>
            <Link to={"/about"}>About Us</Link>
          </motion.li>
        </motion.ul>
      </nav>
      <div className="account">
        <Link onClick={handleMenu} to={"/signup"}>
          <button id="signup">Sign up</button>
        </Link>
        <Link onClick={handleMenu} to={"/login"}>
          <button id="login">Log in</button>
        </Link>
      </div>
    </Content>
  );
};

export default MobileMenu;
