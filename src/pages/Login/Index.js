import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginSchool,
  resetSchoolAuth,
} from "../../features/school/schoolAuthSlice";

import { AnimatePresence, motion } from "framer-motion";
import { Wrapper, Content } from "./Login.styles";
import { BiErrorCircle } from "react-icons/bi";

import Spinner from "../../components/Spinner/Index";
import { useEffect } from "react";
import { resetSchoolData } from "../../features/school/schoolDataSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_BASE_URL
      : "";

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${baseUrl}/api/schools/login`,
        formData
      );
      const resData = {
        ...response.data,
        isLoggedIn: true,
      };
      localStorage.setItem("schoolCredentials", JSON.stringify(resData));
      response.data &&
        dispatch(loginSchool(response.data)) &&
        navigate("/schooldashboard");
    } catch (error) {
      console.log(error);
      setIsError(true);
      if (
        error.response.data.message ===
        "MongooseServerSelectionError: getaddrinfo ENOTFOUND schoolzone-shard-00-01.fbd2x.mongodb.net"
      ) {
        return setErrorMessage(
          "Cannot log in at the moment, please check your network connection"
        );
      }
      if (errorMessage.includes("MongooseServerSelectiongetaddrinfo")) {
        return setErrorMessage(
          "Unable to connect, Please check your internet connection."
        );
      }

      error.response.data.message &&
        setErrorMessage(error.response.data.message.replace("Error: ", ""));
    }
  };

  const wrapperVariants = {
    hidden: {
      y: "50vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
    exit: {
      y: "-40vh",
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  const contentVariants = {
    hidden: {
      y: "-40vh",
      scale: 1.4,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        when: "beforeChildren",
      },
    },
    exit: {
      scale: 1.4,
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  const signInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
        delay: 0.25,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
  const errorVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      background: "rgba(255, 0 , 0, 0)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      background: "rgba(255, 0 , 0, 0.3)",
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.25,
      },
    },
  };

  return (
    <Wrapper
      as={motion.div}
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Content as={motion.div} variants={contentVariants}>
        <h1>Log in</h1>
        <p>Input valid details below</p>
        <hr />
        <AnimatePresence exitBeforeEnter>
          {isError && errorMessage && (
            <motion.div
              variants={errorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="error-message"
            >
              <p>
                <BiErrorCircle
                  style={{ fontSize: "3rem", paddingTop: "-5px" }}
                />
                <span>{errorMessage}</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail:</label>
          <input
            name="email"
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              handleChange(e);
            }}
            id="password"
          />
          {/* submit button */}
          <AnimatePresence exitBeforeEnter>
            {(!isLoading || isError) && (
              <motion.button
                variants={signInVariants}
                type="submit"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Sign in
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence exitBeforeEnter>
            {isLoading && !isError && <Spinner />}
          </AnimatePresence>
        </form>
      </Content>
    </Wrapper>
  );
}

export default Login;
