import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiErrorCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbTemplate } from "react-icons/tb";
import { MdPlaylistAdd, MdDeleteForever } from "react-icons/md";
import { BsImage, BsCloudUpload, BsInfoCircleFill } from "react-icons/bs";
import { isStrongPassword } from "validator";
import { MdChangeCircle, MdPreview } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { IoCloudDone } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { isEmail, isMobilePhone } from "validator";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase.config";

import {
  closeEditProfileModal,
  showForm,
} from "../../features/config/configData";
import { fetchSchoolData } from "../../features/school/schoolDataSlice";

import {
  ChangeAvatarContent,
  ChangeAvatarWrapper,
  ChangePasswordContent,
  ChangePasswordWrapper,
  CreateStudentContent,
  CreateStudentWrapper,
  CreateTemplateContent,
  CreateTemplateWrapper,
  EditProfileContent,
  EditProfileWrapper,
  SuccessMessageContent,
  SuccessMessageWrapper,
} from "./Form.styles";
import InstitutionLevel from "../InstitutionLevel/Index";
import PhoneNumber from "../PhoneNumber/Index";
import Spinner from "../Spinner/Index";
import axios from "axios";

import noTemplateFoundSvg from "../../assets/no-template.svg";
import TemplateOptions from "../TemplateOptions/Index";

// Form types

// Edit Profile
const EditProfileForm = () => {
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const schoolData = useSelector((state) => state.schoolData.data);
  const {
    name: schoolName,
    institutionLevel,
    email,
    country,
    phoneNumber,
    address,
  } = schoolData;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [formData, setFormData] = useState({
    schoolName,
    institutionLevel,
    email,
    country,
    address,
    phoneNumber: phoneNumber.split("-")[1],
    countryCodePrefix: phoneNumber.split("-")[0],
  });
  const [errors, setErrors] = useState({});
  const [formValidity, setFormValidity] = useState({
    schoolName: true,
    institutionLevel: true,
    address: true,
    email: true,
    phoneNumber: true,
  });

  const nameRef = useRef();
  const institutionLevelRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

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

  // input validators and checkers
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

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const update = {
      ...formData,
      phoneNumber: `${formData.countryCodePrefix}-${formData.phoneNumber}`,
    };
    delete update.countryCodePrefix;

    try {
      const response = await axios({
        url: `/api/schools/${schoolId}`,
        method: "put",
        data: update,
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      });
      console.log(response);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  // Variants
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
    <EditProfileWrapper>
      <EditProfileContent>
        <h2>Edit Profile</h2>
        <p>Update the fields you wish to change below.</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>School Name:</label>
            <input
              value={formData.schoolName}
              type="text"
              name="schoolName"
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
          </div>
          {/* <InstitutionLevel /> */}
          <div className="form-group">
            <label>InstitutionLevel:</label>
            <InstitutionLevel
              institutionLevel={formData.institutionLevel}
              setFormData={setFormData}
              formData={formData}
              errors={errors}
              setErrors={setErrors}
              institutionLevelRef={institutionLevelRef}
              setFormValidity={setFormValidity}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              value={formData.email}
              type="text"
              name="email"
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
          </div>
          {/* phone-number */}
          <div className="form-group">
            <PhoneNumber
              country={formData.country}
              countryCodePrefix={formData.countryCodePrefix}
              phoneNumber={formData.phoneNumber}
              formData={formData}
              setFormData={setFormData}
              checkPhone={checkPhone}
              errors={errors}
              phoneRef={phoneRef}
              formatValue={formatValue}
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              value={formData.address}
              type="text"
              name="address"
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
          </div>
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
      </EditProfileContent>
    </EditProfileWrapper>
  );
};

// Avatar Photo
const ChangeAvatar = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [avatarImageUrl, setAvatarImageUrl] = useState(
    localStorage.getItem("avatar")
  );

  const { token: authToken } = useSelector((state) => state.schoolAuth);
  const schoolData = useSelector((state) => state.schoolData.data);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const avatarImageRef = useRef();

  const handleAvatarUpload = async () => {
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);
    try {
      // get downloadURL foem firebase storage
      const storageRef = ref(
        storage,
        `${schoolData.name.split(" ").join("-")}-${
          schoolData._id
        }/Profile/Avatar`
      );
      const uploadResult = await uploadBytes(storageRef, avatarImage);
      const downloadUrl = await getDownloadURL(uploadResult.ref);

      // update school data with avatar image download URL
      const serverResponse = await axios({
        url: `/api/schools/${schoolId}`,
        method: "put",
        data: {
          avatar_image: downloadUrl,
        },
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      });

      // show success message
      if (serverResponse.status !== 200 && serverResponse.statusText !== "OK") {
        throw new Error("Could not upload avatar image");
      }
      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        dispatch(closeEditProfileModal());
        dispatch(fetchSchoolData(authToken));
        localStorage.removeItem("avatar");
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <IoCloudDone style={{ fontSize: "5rem", paddingTop: "-5px" }} />
                <span>Avatar image uploaded successfully.</span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <ChangeAvatarWrapper>
          <ChangeAvatarContent>
            <h2>Change Avatar</h2>
            <p>Select picture or image from gallery for upload.</p>
            <hr />
            {isError && (
              <div className="error-message">
                <p>
                  <BiErrorCircle
                    style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                  />
                  <span>Sorry, we couldn't upload avatar image.</span>
                </p>
              </div>
            )}
            <div className="avatar-box">
              <div className="avatar-img-cont">
                <img
                  alt=""
                  src={
                    schoolData.avatar_image
                      ? schoolData.avatar_image
                      : avatarImageUrl
                  }
                />
                {!avatarImageUrl && !schoolData.avatar_image && (
                  <div className="avatar-preview">
                    <MdPreview style={{ fontSize: "4rem" }} />
                    <span>Avatar Preview</span>
                  </div>
                )}
              </div>
              <input
                ref={avatarImageRef}
                id="choose-avatar"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => {
                  const fileReader = new FileReader();
                  setAvatarImage(e.target.files[0]);
                  e.target.nextElementSibling.textContent = `File name: ${e.target.files[0].name}`;

                  fileReader.onload = () => {
                    const url = fileReader.result;
                    localStorage.setItem("avatar", url);
                    setAvatarImageUrl(localStorage.getItem("avatar"));

                    e.target.previousElementSibling.children[0].src = url;
                  };

                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
              <p className="avatar-file-name"></p>
              {isLoading && <Spinner />}
              {!avatarImageUrl && !isLoading && (
                <label htmlFor="choose-avatar" className="avatar-btn">
                  <BsImage style={{ fontSize: "1.4rem" }} />
                  <span>
                    {schoolData.avatar_image ? "Change Avatar" : "Select Image"}
                  </span>
                </label>
              )}
              {avatarImageUrl && !isLoading && (
                <label htmlFor="choose-avatar" className="avatar-btn">
                  <MdChangeCircle style={{ fontSize: "1.5rem" }} />
                  <span>Change Selected Avatar</span>
                </label>
              )}
              {avatarImageUrl && !isLoading && (
                <button className="upload-btn" onClick={handleAvatarUpload}>
                  <BsCloudUpload style={{ fontSize: "1.4rem" }} />
                  <span>Upload Avatar</span>
                </button>
              )}
            </div>
            <p className="info">
              <FiInfo style={{ fontSize: "0.8rem" }} />
              <span>We suggest that you use your school crest or logo.</span>
            </p>
          </ChangeAvatarContent>
        </ChangeAvatarWrapper>
      )}
    </>
  );
};

// Cover Photo
const ChangeCoverPhoto = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [coverPhotoUrl, setCoverPhotoUrl] = useState(
    localStorage.getItem("coverPhoto")
  );

  const { token: authToken } = useSelector((state) => state.schoolAuth);
  const schoolData = useSelector((state) => state.schoolData.data);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const coverPhotoRef = useRef();

  const handleCoverPhotoUpload = async () => {
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);
    try {
      // get downloadURL foem firebase storage
      const storageRef = ref(
        storage,
        `${schoolData.name.split(" ").join("-")}-${
          schoolData._id
        }/Profile/Cover`
      );
      const uploadResult = await uploadBytes(storageRef, coverPhoto);
      const downloadUrl = await getDownloadURL(uploadResult.ref);

      // update school data with avatar image download URL
      const serverResponse = await axios({
        url: `/api/schools/${schoolId}`,
        method: "put",
        data: {
          backdrop_image: downloadUrl,
        },
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      });

      // show success message
      if (serverResponse.status !== 200 && serverResponse.statusText !== "OK") {
        throw new Error("Could not upload avatar image");
      }
      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        dispatch(closeEditProfileModal());
        dispatch(fetchSchoolData(authToken));
        localStorage.removeItem("coverPhoto");
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <IoCloudDone style={{ fontSize: "5rem", paddingTop: "-5px" }} />
                <span>Cover photo uploaded successfully.</span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <ChangeAvatarWrapper>
          <ChangeAvatarContent>
            <h2>Change Cover Photo</h2>
            <p>Select picture or image from gallery for upload.</p>
            <hr />
            {isError && (
              <div className="error-message">
                <p>
                  <BiErrorCircle
                    style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                  />
                  <span>Sorry, we couldn't upload cover photo.</span>
                </p>
              </div>
            )}
            <div className="avatar-box">
              <div className="cover-photo-cont">
                <img
                  alt=""
                  src={
                    schoolData.backdrop_image
                      ? schoolData.backdrop_image
                      : coverPhotoUrl
                  }
                />
                {!coverPhotoUrl && !schoolData.backdrop_image && (
                  <div className="avatar-preview">
                    <MdPreview style={{ fontSize: "4rem" }} />
                    <span>Cover Photo Preview</span>
                  </div>
                )}
              </div>
              <input
                ref={coverPhotoRef}
                id="choose-avatar"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => {
                  setCoverPhoto(e.target.files[0]);
                  const fileReader = new FileReader();
                  e.target.nextElementSibling.textContent = `File name: ${e.target.files[0].name}`;

                  fileReader.onload = () => {
                    const url = fileReader.result;
                    localStorage.setItem("coverPhoto", url);
                    setCoverPhotoUrl(localStorage.getItem("coverPhoto"));

                    e.target.previousElementSibling.children[0].src = url;
                  };

                  fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
              <p className="avatar-file-name"></p>

              {isLoading && <Spinner />}
              {!coverPhotoUrl && !isLoading && (
                <label htmlFor="choose-avatar" className="avatar-btn">
                  <BsImage style={{ fontSize: "1.4rem" }} />
                  <span>
                    {" "}
                    {schoolData.backdrop_image
                      ? "Change Cover Photo"
                      : "Select Image"}
                  </span>
                </label>
              )}
              {coverPhotoUrl && !isLoading && (
                <label htmlFor="choose-avatar" className="avatar-btn">
                  <MdChangeCircle style={{ fontSize: "1.5rem" }} />
                  <span>Change Selected Image</span>
                </label>
              )}
              {coverPhotoUrl && !isLoading && (
                <button className="upload-btn" onClick={handleCoverPhotoUpload}>
                  <BsCloudUpload style={{ fontSize: "1.4rem" }} />
                  <span>Upload Cover Photo</span>
                </button>
              )}
            </div>
            <p className="info">
              <FiInfo style={{ fontSize: "1rem" }} />
              <span>
                We suggest that you use an image representation of your school.
              </span>
            </p>
          </ChangeAvatarContent>
        </ChangeAvatarWrapper>
      )}
    </>
  );
};

// Change Password
const ChangePassword = () => {
  const [changePassword, setChangePassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [changePasswordErrorMessage, setChangePasswordErrorMessage] =
    useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordErrorMessages, setPasswordErrorMessages] = useState([]);
  const [isPasswordValid, setIsPassworValid] = useState(false);
  const [canChangePassword, setCanChangePassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();

  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const { token: authToken } = useSelector((state) => state.schoolAuth);

  const checkPassword = (e) => {
    if (changePassword.trim().length < 8 || !isStrongPassword(changePassword)) {
      setPasswordErrorMessage("Cannot be possible password");
      setIsPassworValid(false);
    }
    if (e.target.value.trim().length > 7 && isStrongPassword(e.target.value)) {
      setPasswordErrorMessage(null);
      setIsPassworValid(true);
    }
  };
  const checkPasswordMain = (e) => {
    if (
      changePassword.trim().length < 8 &&
      !passwordErrorMessages.includes(
        "Password cannot be less than 8 characters"
      )
    ) {
      setPasswordErrorMessages((prev) => [
        ...prev,
        "Password cannot be less than 8 characters",
      ]);
      setIsPassworValid(false);
    }

    if (
      !isStrongPassword(changePassword) &&
      !passwordErrorMessages.includes(
        "Password must include at least 1 uppercase, 1 lowercase, 1 number and 1 symbol."
      )
    ) {
      setPasswordErrorMessages((prev) => [
        ...prev,
        "Password must include at least 1 uppercase, 1 lowercase, 1 number and 1 symbol.",
      ]);
      setIsPassworValid(false);
    }

    if (
      e.target.value.trim().length > 7 &&
      passwordErrorMessages.includes(
        "Password cannot be less than 8 characters"
      )
    ) {
      const errorIndex = passwordErrorMessages.indexOf(
        "Password cannot be less than 8 characters"
      );
      setPasswordErrorMessages((prev) =>
        prev.slice(errorIndex, errorIndex + 1)
      );
    }

    if (
      isStrongPassword(e.target.value) &&
      passwordErrorMessages.includes(
        "Password must include at least 1 uppercase, 1 lowercase, 1 number and 1 symbol."
      )
    ) {
      setPasswordErrorMessages([]);
      setIsPassworValid(true);

      const errorIndex = passwordErrorMessages.indexOf(
        "Password must include at least 1 uppercase, 1 lowercase, 1 number and 1 symbol."
      );
      setPasswordErrorMessages((prev) =>
        prev.slice(errorIndex, errorIndex + 1)
      );
    }

    if (e.target.value.trim().length > 7 && isStrongPassword(e.target.value)) {
      setPasswordErrorMessages([]);
      setIsPassworValid(true);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const response = await axios({
      url: `/api/schools/change-password/${schoolId}`,
      method: "put",
      data: {
        changePassword,
      },
      headers: {
        Authorization: `Bearer ${schoolToken}`,
      },
    });

    if (!response.data.isSuccess) {
      setIsLoading(false);
      setIsError(true);
      setCanChangePassword(false);
      setChangePasswordErrorMessage(response.data.message);
      setChangePassword("");
    }
    if (response.data.isSuccess) {
      setIsLoading(false);
      setIsError(false);
      setCanChangePassword(true);
      setChangePasswordErrorMessage(null);
      setChangePassword("");
    }
  };
  const handleChangePasswordMain = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const response = await axios({
      url: `/api/schools/change-password/${schoolId}`,
      method: "put",
      data: {
        newPassword: changePassword,
      },
      headers: {
        Authorization: `Bearer ${schoolToken}`,
      },
    });

    if (response.data.passwordChange) {
      setIsLoading(false);
      setIsError(false);
      setCanChangePassword(true);
      setChangePasswordErrorMessage(null);
      setIsSuccess(true);

      setTimeout(() => {
        dispatch(closeEditProfileModal());
        dispatch(fetchSchoolData(authToken));
        localStorage.removeItem("avatar");
      }, 3000);
    }
  };

  return (
    <>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <IoCloudDone style={{ fontSize: "5rem", paddingTop: "-5px" }} />
                <span>Password changed successfully.</span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <ChangePasswordWrapper>
          {!canChangePassword && (
            <ChangePasswordContent>
              <h2>Change Password</h2>
              <p>Input current password in the field below.</p>
              <hr />
              {isError && changePasswordErrorMessage && (
                <div className="error-message">
                  <p>
                    <BiErrorCircle
                      style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                    />
                    <span>{changePasswordErrorMessage}</span>
                  </p>
                </div>
              )}
              <form
                onSubmit={(e) => {
                  handleChangePassword(e);
                }}
              >
                <div className="form-group">
                  <label
                    htmlFor="change-password"
                    className="change-password-label"
                  >
                    <RiLockPasswordLine style={{ fontSize: "1.4rem" }} />
                    <span>Current Password:</span>
                  </label>
                  <input
                    id="change-password"
                    type="password"
                    value={changePassword}
                    placeholder="Enter current password here"
                    onChange={(e) => {
                      checkPassword(e);
                      setChangePassword(e.target.value);
                    }}
                  />
                  <p className="error">
                    {passwordErrorMessage && (
                      <span>
                        <BiErrorCircle />
                      </span>
                    )}
                    <span>{passwordErrorMessage}</span>
                  </p>
                </div>
                <p className="info">
                  <FiInfo style={{ fontSize: "1rem" }} />
                  <span>Enter current password you sign in with.</span>
                </p>
                {isLoading && <Spinner />}
                {isPasswordValid && !isLoading && <button>Submit</button>}
              </form>
            </ChangePasswordContent>
          )}
          {canChangePassword && (
            <ChangePasswordContent>
              <h2>Change Password</h2>
              <p>Fill the input field below with new password.</p>
              <hr />
              {isError && changePasswordErrorMessage && (
                <div className="error-message">
                  <p>
                    <BiErrorCircle
                      style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                    />
                    <span>{changePasswordErrorMessage}</span>
                  </p>
                </div>
              )}
              <form
                onSubmit={(e) => {
                  handleChangePasswordMain(e);
                }}
              >
                <div className="form-group">
                  <label
                    htmlFor="change-password"
                    className="change-password-label"
                  >
                    <RiLockPasswordLine style={{ fontSize: "1.4rem" }} />
                    <span>Password:</span>
                  </label>
                  <input
                    id="change-password"
                    type="password"
                    value={changePassword}
                    placeholder="Enter new password here"
                    onChange={(e) => {
                      checkPasswordMain(e);
                      setChangePassword(e.target.value);
                    }}
                  />
                  {passwordErrorMessages.map((mess, index) => (
                    <p key={index} className="error">
                      {mess && (
                        <span>
                          <BiErrorCircle />
                        </span>
                      )}
                      <span>{mess}</span>
                    </p>
                  ))}
                </div>
                <p className="info">
                  <FiInfo style={{ fontSize: "1rem" }} />
                  <span>
                    Enter new password you want to be signing in with.
                  </span>
                </p>
                {isLoading && <Spinner />}
                {isPasswordValid && !isLoading && <button>Submit</button>}
              </form>
            </ChangePasswordContent>
          )}
        </ChangePasswordWrapper>
      )}
    </>
  );
};

// Create Student
const CreateStudent = () => {
  const dispatch = useDispatch();
  const { data: schoolData } = useSelector((state) => state.schoolData);

  const handleCreateTemplate = () => {
    dispatch(showForm("createTemplate"));
  };
  const handleCancel = () => {
    dispatch(closeEditProfileModal());
  };

  return (
    <CreateStudentWrapper>
      <CreateStudentContent>
        <h2>Create Student Profile</h2>
        <hr style={{ visibility: "hidden", marginBottom: "10px" }} />
        {!schoolData?.templates?.student && (
          <>
            <img
              className="no-template-svg"
              src={noTemplateFoundSvg}
              alt="No Template Found"
            />
            <p>
              Sorry, we could not find any template for student registration.
              <br />
              Would you like to create a template right now.
            </p>
            <div className="choice-buttons">
              <button onClick={handleCancel}>No, maybe later</button>
              <button onClick={handleCreateTemplate}>Yes, I would</button>
            </div>
          </>
        )}
      </CreateStudentContent>
    </CreateStudentWrapper>
  );
};
// Create Template
const CreateTemplate = () => {
  const [formFields, setFormFields] = useState({
    firstName: {
      name: "First Name",
      type: "text",
    },
    lastName: {
      name: "Last Name",
      type: "text",
    },
    otherNames: {
      name: "Other Names",
      type: "text",
    },
    dateOfBirth: {
      name: "Date of Birth",
      type: "text",
    },
    nationality: {
      name: "Nationality",
      type: "text",
    },
    phoneNumber: {
      name: "Phone Number",
      type: "text",
    },
    Address: {
      name: "Address",
      type: "text",
    },
    email: {
      name: "Email",
      type: "text",
    },
  });
  const [templateOption, setTemplateOption] = useState({
    name: "",
    type: "Select field type",
    options: "",
  });
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [templateMessage, setTemplateMessage] = useState(null);

  const dispatch = useDispatch();
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const handleCreateTemplate = () => {
    dispatch(showForm("createTemplate"));
  };
  const handleCancel = () => {
    dispatch(closeEditProfileModal());
  };
  const handleChange = (e) => {
    setTemplateOption((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTemplate = (e) => {
    if (
      templateOption.name.trim() === "" &&
      templateOption.type === "Select field type"
    ) {
      return setErrors("Please enter valid field name and field type");
    }
    if (templateOption.name.trim() === "") {
      return setErrors("Please enter valid field name");
    }
    if (templateOption.name.trim().length < 3) {
      return setErrors("Field name cannot be less than 3 characters");
    }
    if (templateOption.type === "Select field type") {
      return setErrors("Please select field type");
    }
    if (templateOption.options.length < 1) {
      return setErrors("Options field cannot be empty");
    }
    if (templateOption.options.trim().split(" ").length < 2) {
      return setErrors("Options values must be more than 1.");
    }
    setErrors(null);
    setFormFields((prev) => ({
      ...prev,
      [templateOption.name
        .split(" ")
        .map((str, i) =>
          i < 1 ? str.toLowerCase() : str[0].toUpperCase() + str.slice(1)
        )
        .join("")]: {
        name: templateOption.name
          .split(" ")
          .map((str, i) => str[0].toUpperCase() + str.slice(1))
          .join(" "),
        type: templateOption.type,
      },
    }));
    setTemplateOption({
      name: "",
      type: "Select field type",
    });
  };

  const handleTemplateDelete = (field) => {
    let newFormFields = { ...formFields };
    delete newFormFields[field[0]];
    console.log(newFormFields);
    setFormFields(newFormFields);
  };

  const handleTemplateSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    setTemplateOption({
      name: "",
      type: "Select field type",
    });
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setTemplateMessage(null);
    const response = await axios({
      url: `/api/schools/${schoolId}/update`,
      method: "put",
      data: {
        templateName: "students",
        templateData: formFields,
      },
      headers: {
        Authorization: `Bearer ${schoolToken}`,
      },
    });
    if (response.status !== 200 && response.statusText !== "OK") {
      setIsLoading(false);
      setIsError(true);
      return setTemplateMessage("Sorry, cannot save template at the moment.");
    }
    setIsLoading(false);
    setIsError(false);
    setIsSuccess(true);
    return setTemplateMessage("Template saved successfully.");
  };
  const handleOptionsFormat = (e) => {
    setTemplateOption((prev) => ({
      ...prev,
      options: e.target.value
        .split(",")
        .map((str) => str.trim())
        .join(" "),
    }));
  };

  return (
    <CreateTemplateWrapper>
      <CreateTemplateContent
        errors={errors}
        isSuccess={isSuccess}
        isError={isError}
      >
        <h2>Create Registration Template</h2>
        <p>Set fields required for standard registration.</p>
        <hr />
        <div className="add-template-field-cont">
          <div className="add-template-group">
            <h3>Add template form</h3>
            {errors && (
              <p className="errors">
                <BiErrorCircle style={{ fontSize: "1.2rem" }} />
                <span>{errors}</span>
              </p>
            )}
            <div className="field-values">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                value={templateOption.name}
                placeholder="Field name"
              />
              <TemplateOptions
                templateOption={templateOption}
                setTemplateOption={setTemplateOption}
                //   formData={formData}
                errors={errors}
                setErrors={setErrors}
              />
              {templateOption.type === "Options" && (
                <div>
                  <span className="nb">
                    <BsInfoCircleFill />
                    <span>Input must be a comma(,) seperated list.</span>
                  </span>
                  <input
                    onChange={handleChange}
                    onBlur={handleOptionsFormat}
                    name="options"
                    type="text"
                    value={templateOption.options}
                    placeholder="Field options"
                  />
                </div>
              )}
            </div>
            <button onClick={handleAddTemplate}>
              <MdPlaylistAdd style={{ fontSize: "1.4rem", color: "white" }} />
              <span>Add field</span>
            </button>
          </div>
          <div className="template-creator">
            <form onSubmit={handleTemplateSubmit} className="templates">
              <h3>Required fields</h3>
              {templateMessage && (
                <p className={isError ? "errors" : "success"}>
                  <BiErrorCircle style={{ fontSize: "1.2rem" }} />
                  <span>{templateMessage}</span>
                </p>
              )}
              {Object.entries(formFields).map((field, index) => (
                <div className="form-group" key={index}>
                  <label>{field[1].name}:</label>
                  <div>
                    <span>
                      {field[1].type[0].toUpperCase() + field[1].type.slice(1)}
                    </span>
                  </div>
                  <div
                    className="delete-field"
                    onClick={() => handleTemplateDelete(field)}
                  >
                    <MdDeleteForever style={{ fontSize: "1.4rem" }} />
                  </div>
                </div>
              ))}
              {!isLoading && (
                <button className="submit">
                  <TbTemplate style={{ fontSize: "1.4rem", color: "white" }} />
                  <span>Submit Template</span>
                </button>
              )}
              {isLoading && (
                <div className="loading">
                  <Spinner />
                </div>
              )}
            </form>
          </div>
        </div>
      </CreateTemplateContent>
    </CreateTemplateWrapper>
  );
};

const Form = () => {
  const { formToShow } = useSelector((state) => state.config);

  return (
    <>
      {formToShow === "editProfile" && <EditProfileForm />}
      {formToShow === "changeAvatar" && <ChangeAvatar />}
      {formToShow === "changeCoverPhoto" && <ChangeCoverPhoto />}
      {formToShow === "changePassword" && <ChangePassword />}
      {formToShow === "createStudent" && <CreateStudent />}
      {formToShow === "createTemplate" && <CreateTemplate />}
    </>
  );
};

export default Form;
