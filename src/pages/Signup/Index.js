import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isEmail, isMobilePhone, isStrongPassword } from "validator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper, Content } from "./Signup.styles";
import { BiErrorCircle } from "react-icons/bi";

import { loginSchool } from "../../features/school/schoolAuthSlice";

import InstitutionLevel from "../../components/InstitutionLevel/Index";
import PhoneNumber from "../../components/PhoneNumber/Index";
import axios from "axios";
import Spinner from "../../components/Spinner/Index";

function Signup() {
  // initializing useNavigate
  const navigate = useNavigate();

  // initializing useDispatch
  const dispatch = useDispatch();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_BASE_URL
      : "";

  // form fields state
  const [formData, setFormData] = useState({
    schoolName: "",
    institutionLevel: "Select your institution",
    address: "",
    email: "",
    countryCodePrefix: "+234",
    phoneNumber: "",
    country: "Nigeria",
    password: "",
    confirmPassword: "",
  });

  const {
    schoolName,
    institutionLevel,
    address,
    email,
    countryCodePrefix,
    phoneNumber,
    country,
    password,
    confirmPassword,
  } = formData;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  //  error messages state
  const [errors, setErrors] = useState({});

  // form fields verification state
  const [formValidity, setFormValidity] = useState({
    schoolName: false,
    institutionLevel: false,
    address: false,
    email: false,
    phoneNumber: false,
    password: false,
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      email,
    }));
  }, [email]);

  const nameRef = useRef();
  const institutionLevelRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      ...formData,
      currency: "$",
      phoneNumber: `${countryCodePrefix}-${phoneNumber}`,
    };
    delete body.countryCodePrefix;

    try {
      const response = await axios.post(`${baseUrl}/api/schools/`, body);
      console.log(response.data);
      if (response.data && response.data.token) {
        setError(false);
        setIsLoading(false);
        const resData = {
          ...response.data,
          isLoggedIn: true,
        };
        localStorage.setItem("schoolCredentials", JSON.stringify(resData));
        response.data && dispatch(loginSchool(response.data));
        navigate("/schooldashboard");
      } else {
        throw new Error("Cannot create account at this time");
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  // format value
  const formatValue = (e) => {
    const value = e.target.value.split("");
    for (let v of value) {
      if (v === " ") {
        const index = value.indexOf(v);
        value[index] = "";
      } else {
        break;
      }
    }
    const newValue = value.join("");
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: newValue,
    }));
  };

  //Input validators & error handling
  const checkName = (e) => {
    if (e.target.value.trim().length < 5) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: "Name of school cannot be less than 5 characters",
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      const updatedState = errors;
      delete updatedState.schoolName;
      setErrors((prevState) => ({
        ...prevState,
        ...updatedState,
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };
  const checkAddress = (e) => {
    if (e.target.value.trim().length < 10) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: "Address cannot be less than 10 characters",
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      const updatedState = errors;
      delete updatedState[e.target.name];
      setErrors((prevState) => ({
        ...prevState,
        ...updatedState,
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };
  const checkEmail = (e) => {
    if (!isEmail(e.target.value)) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: "Please enter a valid E-mail",
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      const updatedState = errors;
      delete updatedState[e.target.name];
      setErrors((prevState) => ({
        ...prevState,
        ...updatedState,
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };
  const checkPhone = (e) => {
    if (!isMobilePhone(e.target.value)) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: "Please enter a valid phone number",
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      const updatedState = errors;
      delete updatedState[e.target.name];
      setErrors((prevState) => ({
        ...prevState,
        ...updatedState,
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };
  const checkPassword = (e) => {
    setErrors((prevState) => ({
      ...prevState,
      [e.target.name]: [],
    }));

    if (password.trim().length < 8) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: [
          ...prevState[e.target.name],
          "Password cannot be less than 8 characters",
        ],
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    }
    if (!isStrongPassword(password)) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: [
          ...prevState[e.target.name],
          "Password must include at least 1 uppercase, 1 lowercase, 1 number and 1 symbol.",
        ],
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    }
    if (e.target.value === confirmPassword && errors.confirmPassword) {
      const updatedErrors = errors;
      delete errors.confirmPassword;
      setErrors((prevState) => ({
        ...updatedErrors,
      }));
    }
    if (e.target.value !== confirmPassword) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: [
          ...prevState[e.target.name],
          "This field does not match confirm password field",
        ],
        confirmPassword: "Passwords do not match",
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    }
    if (
      password.trim().length > 8 &&
      isStrongPassword(password) &&
      e.target.value === confirmPassword
    ) {
      const updatedState = errors;
      delete updatedState[e.target.name];
      setErrors((prevState) => ({
        ...updatedState,
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };
  const checkConfirmPassword = (e) => {
    if (e.target.value !== password) {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.name]: "Passwords do not match",
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        password: false,
      }));
    } else if (e.target.value === password) {
      const newErrors = errors;
      newErrors.password.pop();
      delete newErrors[e.target.name];
      setErrors(newErrors);
      setFormValidity((prevState) => ({
        ...prevState,
        password: true,
      }));
    } else {
      const updatedState = errors;
      delete updatedState[e.target.name];
      setErrors((prevState) => ({
        ...prevState,
        ...updatedState,
      }));
      setFormValidity((prevState) => ({
        ...prevState,
        password: true,
      }));
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
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };
  const submitVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
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
        <h1>Sign Up</h1>
        <p>Please, Input correct details below.</p>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <input type="hidden" value="prayer" />
          <label htmlFor="name">Name of School:</label>
          <input
            id="name"
            name="schoolName"
            value={schoolName}
            autoComplete="name"
            onChange={(e) => {
              handleChange(e);
              checkName(e);
              formatValue(e);
            }}
          />
          <p ref={nameRef} className="error">
            {errors.schoolName && (
              <span>
                <BiErrorCircle />
              </span>
            )}
            <span>{errors.schoolName}</span>
          </p>

          {/* institution level */}
          <label htmlFor="level">Institution Level:</label>
          <InstitutionLevel
            institutionLevel={institutionLevel}
            setFormData={setFormData}
            formData={formData}
            errors={errors}
            setErrors={setErrors}
            institutionLevelRef={institutionLevelRef}
            setFormValidity={setFormValidity}
          />
          <p ref={institutionLevelRef} className="error"></p>
          {/* address */}
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            value={address}
            onChange={(e) => {
              handleChange(e);
              checkAddress(e);
              formatValue(e);
            }}
          />
          <p ref={addressRef} className="error">
            {errors.address && (
              <span>
                <BiErrorCircle />
              </span>
            )}
            <span>{errors.address}</span>
          </p>

          {/* email */}
          <label htmlFor="email">E-Mail:</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
              checkEmail(e);
              formatValue(e);
            }}
          />
          <p ref={emailRef} className="error">
            {errors.email && (
              <span>
                <BiErrorCircle />
              </span>
            )}
            <span>{errors.email}</span>
          </p>
          {/* phone-number */}
          <PhoneNumber
            country={country}
            countryCodePrefix={countryCodePrefix}
            phoneNumber={phoneNumber}
            formData={formData}
            setFormData={setFormData}
            checkPhone={checkPhone}
            errors={errors}
            phoneRef={phoneRef}
            formatValue={formatValue}
          />
          {/* password */}
          <label htmlFor="password">Password:</label>
          <input
            type={"password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              handleChange(e);
              checkPassword(e);
              formatValue(e);
            }}
          />
          <div ref={passwordRef} className="password-error">
            {errors.password &&
              errors.password.map((err) => {
                return (
                  <p className="error-cont" key={err.length}>
                    <span>
                      <BiErrorCircle />
                    </span>
                    <span>{err}</span>
                  </p>
                );
              })}
          </div>

          {/* confirm password */}
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type={"password"}
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              handleChange(e);
              checkConfirmPassword(e);
              formatValue(e);
            }}
          />
          <p ref={confirmPasswordRef} className="error">
            {errors.confirmPassword && (
              <span>
                <BiErrorCircle />
              </span>
            )}
            <span>{errors.confirmPassword}</span>
          </p>

          {/* submit button */}
          <AnimatePresence exitBeforeEnter>
            {!isLoading &&
              Object.values(formValidity).every((val) => val === true) && (
                <motion.button
                  variants={submitVariants}
                  type="submit"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Submit
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

export default Signup;
