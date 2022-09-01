import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { BiErrorCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbTemplate } from "react-icons/tb";
import { FaCameraRetro } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import {
  MdPlaylistAdd,
  MdDeleteForever,
  MdPublishedWithChanges,
} from "react-icons/md";
import { BsImage, BsCloudUpload, BsInfoCircleFill } from "react-icons/bs";
import { isStrongPassword } from "validator";
import { MdChangeCircle, MdPreview } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { FcApproval } from "react-icons/fc";
import { IoCloudDone } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { isEmail, isMobilePhone } from "validator";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
  deleteObject,
} from "firebase/storage";

import { v4 as uuidv4 } from "uuid";

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
  CreateProfileContent,
  CreateProfileWrapper,
  CreateTemplateContent,
  CreateTemplateWrapper,
  DeleteModalContent,
  DeleteModalWrapper,
  EditProfileContent,
  EditProfileWrapper,
  RecordFinanceContent,
  RecordFinanceWrapper,
  SavingContent,
  SavingWrapper,
  StaffProfileContent,
  StaffProfileWrapper,
  StudentProfileContent,
  StudentProfileWrapper,
  StudentRegistrationContent,
  StudentRegistrationWrapper,
  SuccessMessageContent,
  SuccessMessageWrapper,
} from "./Form.styles";
import InstitutionLevel from "../InstitutionLevel/Index";
import PhoneNumber from "../PhoneNumber/Index";
import Spinner from "../Spinner/Index";
import Text from "../Text/Index";
import Number from "../Number/Index";
import Options from "../Options/Index";
import DatePicker from "../DatePicker/Index";
import ImagePicker from "../ImagePicker/Index";

import noTemplateFoundSvg from "../../assets/no-template.svg";
import TemplateOptions from "../TemplateOptions/Index";
import TimePicker from "../TimePicker/Index";
import { useMemo } from "react";
import { useLayoutEffect } from "react";

// Form types and modals

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
      // get downloadURL from firebase storage
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
    dispatch(showForm("createStudentTemplate"));
  };
  const handleCancel = () => {
    dispatch(closeEditProfileModal());
  };

  return (
    <CreateProfileWrapper>
      <CreateProfileContent>
        <h2>Create Student Profile</h2>
        <hr style={{ visibility: "hidden", marginBottom: "10px" }} />
        {schoolData.templates?.students === undefined && (
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
      </CreateProfileContent>
    </CreateProfileWrapper>
  );
};

// Create Staff
const CreateStaff = () => {
  const dispatch = useDispatch();
  const { data: schoolData } = useSelector((state) => state.schoolData);

  const handleCreateTemplate = () => {
    dispatch(showForm("createStaffTemplate"));
  };
  const handleCancel = () => {
    dispatch(closeEditProfileModal());
  };

  return (
    <CreateProfileWrapper>
      <CreateProfileContent>
        <h2>Create Staff Profile</h2>
        <hr style={{ visibility: "hidden", marginBottom: "10px" }} />
        {schoolData?.templates?.staffs === undefined && (
          <>
            <img
              className="no-template-svg"
              src={noTemplateFoundSvg}
              alt="No Template Found"
            />
            <p>
              Sorry, we could not find any template for staff registration.
              <br />
              Would you like to create a template right now.
            </p>
            <div className="choice-buttons">
              <button onClick={handleCancel}>No, maybe later</button>
              <button onClick={handleCreateTemplate}>Yes, I would</button>
            </div>
          </>
        )}
      </CreateProfileContent>
    </CreateProfileWrapper>
  );
};

// Create Finance
const CreateFinance = () => {
  const dispatch = useDispatch();
  const { data: schoolData } = useSelector((state) => state.schoolData);

  const handleCreateTemplate = () => {
    dispatch(showForm("createFinanceTemplate"));
  };
  const handleCancel = () => {
    dispatch(closeEditProfileModal());
  };

  return (
    <CreateProfileWrapper>
      <CreateProfileContent>
        <h2>Record Revenue | Expense</h2>
        <hr style={{ visibility: "hidden", marginBottom: "10px" }} />
        {schoolData?.templates?.finance === undefined && (
          <>
            <img
              className="no-template-svg"
              src={noTemplateFoundSvg}
              alt="No Finance Template Found"
            />
            <p>
              Sorry, we could not find any template for recording revenue or
              expense.
              <br />
              Would you like to create a template right now.
            </p>
            <div className="choice-buttons">
              <button onClick={handleCancel}>No, maybe later</button>
              <button onClick={handleCreateTemplate}>Yes, I would</button>
            </div>
          </>
        )}
      </CreateProfileContent>
    </CreateProfileWrapper>
  );
};

// Create  Student Template
const CreateStudentTemplate = () => {
  const initialFormFields = {
    firstName: {
      name: "First Name",
      type: "Text",
    },
    lastName: {
      name: "Last Name",
      type: "Text",
    },
    otherNames: {
      name: "Other Names",
      type: "Text",
    },
    dateOfBirth: {
      name: "Date of Birth",
      type: "Text",
    },
    nationality: {
      name: "Nationality",
      type: "Text",
    },
    phoneNumber: {
      name: "Phone Number",
      type: "Text",
    },
    Address: {
      name: "Address",
      type: "Text",
    },
    email: {
      name: "Email",
      type: "Text",
    },
  };

  const dispatch = useDispatch();
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const [formFields, setFormFields] = useState(
    schoolData.templates?.students
      ? { ...schoolData.templates.students }
      : initialFormFields
  );
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

  const handleChange = (e) => {
    setTemplateOption((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTemplate = (e) => {
    if (templateOption.name.trim().toLowerCase() === "image") {
      return setErrors("Image is a reserved field name.");
    }
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
    if (
      templateOption.type === "Options" &&
      templateOption.options.length < 1
    ) {
      return setErrors("Options field cannot be empty");
    }
    if (
      templateOption.type === "Options" &&
      templateOption.options.trim().split(" ").length < 2
    ) {
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
        [templateOption.options && "options"]:
          templateOption.options && templateOption.options,
      },
    }));
    setTemplateOption({
      name: "",
      type: "Select field type",
      options: "",
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
    console.log(response);
    if (response.status !== 200 && response.statusText !== "OK") {
      setIsLoading(false);
      setIsError(true);
      return setTemplateMessage("Sorry, cannot save template at the moment.");
    }
    setIsLoading(false);
    setIsError(false);
    setIsSuccess(true);
    setTemplateMessage("Template saved successfully.");

    return setTimeout(() => {
      dispatch(closeEditProfileModal());
    }, 3000);
  };
  const handleOptionsFormat = (e) => {
    setTemplateOption((prev) => ({
      ...prev,
      options: e.target.value
        .split(",")
        .map((str) => str.trim().split(" ").join("-"))
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
                  {isError ? (
                    <BiErrorCircle style={{ fontSize: "1.2rem" }} />
                  ) : (
                    <IoIosCloudDone style={{ fontSize: "1.2rem" }} />
                  )}
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

// Create Staff Template
const CreateStaffTemplate = () => {
  const initialFormFields = {
    firstName: {
      name: "First Name",
      type: "Text",
    },
    lastName: {
      name: "Last Name",
      type: "Text",
    },
    otherNames: {
      name: "Other Names",
      type: "Text",
    },
    dateOfBirth: {
      name: "Date of Birth",
      type: "Text",
    },
    nationality: {
      name: "Nationality",
      type: "Text",
    },
    phoneNumber: {
      name: "Phone Number",
      type: "Text",
    },
    Address: {
      name: "Address",
      type: "Text",
    },
    email: {
      name: "Email",
      type: "Text",
    },
  };

  const dispatch = useDispatch();
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const [formFields, setFormFields] = useState(
    schoolData.templates?.staffs
      ? { ...schoolData.templates.staffs }
      : initialFormFields
  );
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

  const handleChange = (e) => {
    setTemplateOption((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTemplate = (e) => {
    if (templateOption.name.trim().toLowerCase() === "image") {
      return setErrors("Image is a reserved field name.");
    }
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
    if (
      templateOption.type === "Options" &&
      templateOption.options.length < 1
    ) {
      return setErrors("Options field cannot be empty");
    }
    if (
      templateOption.type === "Options" &&
      templateOption.options.trim().split(" ").length < 2
    ) {
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
        [templateOption.options && "options"]:
          templateOption.options && templateOption.options,
      },
    }));
    setTemplateOption({
      name: "",
      type: "Select field type",
      options: "",
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
        templateName: "staffs",
        templateData: formFields,
      },
      headers: {
        Authorization: `Bearer ${schoolToken}`,
      },
    });
    console.log(response);
    if (response.status !== 200 && response.statusText !== "OK") {
      setIsLoading(false);
      setIsError(true);
      return setTemplateMessage("Sorry, cannot save template at the moment.");
    }
    setIsLoading(false);
    setIsError(false);
    setIsSuccess(true);
    setTemplateMessage("Template saved successfully.");

    return setTimeout(() => {
      dispatch(closeEditProfileModal());
    }, 3000);
  };
  const handleOptionsFormat = (e) => {
    setTemplateOption((prev) => ({
      ...prev,
      options: e.target.value
        .split(",")
        .map((str) => str.trim().split(" ").join("-"))
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
                  {isError ? (
                    <BiErrorCircle style={{ fontSize: "1.2rem" }} />
                  ) : (
                    <IoIosCloudDone style={{ fontSize: "1.2rem" }} />
                  )}
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

// Create Finance Template
const CreateFinanceTemplate = () => {
  const initialFormFields = {
    statementType: {
      name: "Statement Type",
      type: "Options",
      options: "Revenue Expense",
    },
    AmountInFigures: {
      name: "Amount In Figures",
      type: "Number",
    },
    AmountInWords: {
      name: "Amount In Words",
      type: "Text",
    },
    statementDescription: {
      name: "Statement Description",
      type: "Text",
    },
    date: {
      name: "Date",
      type: "Date Picker",
    },
    time: {
      name: "Time",
      type: "Time Picker",
    },
  };

  const immutableData = [
    "Statement Type",
    "Amount In Figures",
    "Amount In Words",
    "Statement Description",
    "Date",
    "Time",
  ];

  const dispatch = useDispatch();
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const [formFields, setFormFields] = useState(
    schoolData.templates?.finance
      ? { ...schoolData.templates.finance }
      : initialFormFields
  );
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

  const handleChange = (e) => {
    setTemplateOption((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTemplate = (e) => {
    if (
      immutableData
        .map((string) => string.toLowerCase())
        .includes(templateOption.name.trim().toLowerCase())
    ) {
      return setErrors(
        `${
          templateOption.name.trim().charAt(0).toUpperCase() +
          templateOption.name.trim().toLowerCase().slice(1)
        } cannot be re-assigned.`
      );
    }
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
    if (
      templateOption.type === "Options" &&
      templateOption.options.length < 1
    ) {
      return setErrors("Options field cannot be empty");
    }
    if (
      templateOption.type === "Options" &&
      templateOption.options.trim().split(" ").length < 2
    ) {
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
        ...(templateOption.options && {
          [templateOption.options && "options"]:
            templateOption.options && templateOption.options,
        }),
      },
    }));
    setTemplateOption({
      name: "",
      type: "Select field type",
      options: "",
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
        templateName: "finance",
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
    setTemplateMessage("Template saved successfully.");
    dispatch(fetchSchoolData(schoolToken));

    return setTimeout(() => {
      dispatch(closeEditProfileModal());
    }, 3000);
  };
  const handleOptionsFormat = (e) => {
    setTemplateOption((prev) => ({
      ...prev,
      options: e.target.value
        .split(",")
        .map((str) => str.trim().split(" ").join("-"))
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
                  {isError ? (
                    <BiErrorCircle style={{ fontSize: "1.2rem" }} />
                  ) : (
                    <IoIosCloudDone style={{ fontSize: "1.2rem" }} />
                  )}
                  <span>{templateMessage}</span>
                </p>
              )}
              {Object.entries(formFields).map((field, index) =>
                immutableData.includes(field[1].name) ? (
                  <div className="form-group immutable" key={index}>
                    <label>{field[1].name}:</label>
                    <div>
                      <span>
                        {field[1].type[0].toUpperCase() +
                          field[1].type.slice(1)}
                      </span>
                    </div>
                    <div
                      className="delete-field"
                      onClick={() => handleTemplateDelete(field)}
                    >
                      <MdDeleteForever style={{ fontSize: "1.4rem" }} />
                    </div>
                  </div>
                ) : (
                  <div className="form-group" key={index}>
                    <label>{field[1].name}:</label>
                    <div>
                      <span>
                        {field[1].type[0].toUpperCase() +
                          field[1].type.slice(1)}
                      </span>
                    </div>
                    <div
                      className="delete-field"
                      onClick={() => handleTemplateDelete(field)}
                    >
                      <MdDeleteForever style={{ fontSize: "1.4rem" }} />
                    </div>
                  </div>
                )
              )}
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

// Student Registration
const StudentRegistration = () => {
  const dispatch = useDispatch();
  const [hasCamera, setHasCamera] = useState("");

  const [showCamera, setShowCamera] = useState(false);
  const [, setShowCanvas] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({});

  const studentRegPageRef = useRef();
  const canvas = useRef(null);
  const context = useRef(null);

  const canvasRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const imagePickerRef = useRef();

  const avatarURL = useSelector((state) => state.schoolData.data.avatar_image);
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const invalidValues = ["", null, undefined];

  const handleVideo = () => {
    setShowCamera(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
    }
  };

  const handleSnapshot = () => {
    setShowCamera(false);
    setShowCanvas(false);

    context.current.drawImage(
      videoRef.current,
      0,
      0,
      context.current.canvas.clientWidth,
      context.current.canvas.clientHeight
    );

    setFormData((prevState) => ({
      ...prevState,
      image: {
        value: canvas.current.toDataURL("image/jpeg", 0.75),
        type: prevState.image.type,
      },
    }));
  };

  const handleImgSelection = (e) => {
    const fileReader = new FileReader();

    setShowCamera(false);
    setShowCanvas(false);

    fileReader.readAsDataURL(e.target.files[0]);

    fileReader.onloadend = (e) => {
      const url = e.target.result;
      imageRef.current.src = url;

      imageRef.current.onload = () => {
        context.current.clearRect(
          0,
          0,
          context.current.canvas.clientWidth,
          context.current.canvas.clientHeight
        );
        context.current.drawImage(
          imageRef.current,
          0,
          0,
          context.current.canvas.clientWidth,
          context.current.canvas.clientHeight
        );
        setFormData((prevState) => ({
          ...prevState,
          image: {
            value: canvas.current.toDataURL("image/jpeg", 0.75),
            type: prevState.image.type,
          },
        }));
      };
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const staffId = uuidv4();

    const dataToFirebase = {};
    const dataToMongoDB = {};

    Object.entries(formData).forEach((entry) => {
      if (entry[1].type === "Image Picker") {
        return (dataToFirebase[entry[0]] = entry[1].value);
      }
      return (dataToMongoDB[entry[0]] = entry[1].value);
    });

    dataToMongoDB.staff_id = staffId;

    try {
      // get downloadURL(s) from firebase storage for uploaded images
      const storageRefArr = Object.entries(dataToFirebase).map((data, i) =>
        ref(
          storage,
          `${schoolData.name.split(" ").join("-")}-${
            schoolData._id
          }/students/${staffId}/images/${Object.keys(dataToFirebase)[i]}`
        )
      );
      const uploadResultArr = await Promise.all(
        Object.entries(dataToFirebase).map((data, i) => {
          if (Object.values(dataToFirebase)[i].startsWith("data:")) {
            return uploadString(storageRefArr[i], data[1], "data_url");
          }
          return uploadBytes(storageRefArr[i], data[1]);
        })
      );
      const downloadUrlArr = await Promise.all(
        uploadResultArr.map((result) => getDownloadURL(result.ref))
      );

      // Update data to be sent to mongo db
      downloadUrlArr.forEach(
        (url, i) => (dataToMongoDB[Object.keys(dataToFirebase)[i]] = url)
      );

      console.log(dataToMongoDB);

      const data = await axios({
        url: `/api/schools/${schoolId}/students`,
        method: "post",
        data: [dataToMongoDB, ...schoolData.students],
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      });
      if (
        data.status === 200 &&
        data.statusText === "OK" &&
        data.data.acknowledged === true
      ) {
        // clear canvas
        context.current.clearRect(
          0,
          0,
          context.current.canvas.clientWidth,
          context.current.canvas.clientHeight
        );

        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        dispatch(fetchSchoolData(schoolToken));
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => dispatch(closeEditProfileModal()), 3000);
      }
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      studentRegPageRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    canvas.current = canvasRef.current;
    context.current = canvas.current.getContext("2d");
  }, []);

  useEffect(() => {
    (async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setHasCamera(devices.some((d) => d.kind === "videoinput"));

      Object.entries(schoolData.templates.students).forEach((arr) => {
        setFormData((prevState) => ({
          ...prevState,
          image: {
            value: null,
            type: "Image Picker",
          },
          [arr[0]]: {
            value: "",
            type: arr[1].type,
          },
        }));
      });
    })();
  }, [schoolData.templates.students]);
  return (
    <>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <FcApproval
                  style={{
                    fontSize: "5rem",
                    paddingTop: "-5px",
                  }}
                />
                <span>Student profile successfully created.</span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <StudentRegistrationWrapper>
          <StudentRegistrationContent
            image={formData.image?.value}
            showCamera={showCamera}
            ref={studentRegPageRef}
          >
            <div className="reg-header">
              <img src={avatarURL} alt="" />
              <div>
                <h2>{schoolData.name}</h2>
                <p>{schoolData.address}</p>
                <p>{schoolData.country}</p>
              </div>
            </div>
            <hr />
            <h2 className="reg-title">Student Registration Form</h2>
            {isError && (
              <div id="registration-error-message">
                <p>
                  <BiErrorCircle
                    style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                  />
                  <span>
                    Sorry, we couldn't create student profile, please try again
                    later.
                  </span>
                </p>
              </div>
            )}
            <div className="reg-form">
              <div className="passport-cont">
                <label id="passport-title">Passport</label>
                <div className="passport">
                  <img alt="" ref={imageRef} className="hidden" />
                  <canvas
                    width="426px"
                    height="426px"
                    ref={canvasRef}
                    id="canvas"
                  ></canvas>
                  {showCamera && <video ref={videoRef} autoPlay id="video" />}
                </div>
                <div className="button-group">
                  {hasCamera && !showCamera && (
                    <label className="primary-white-btn" onClick={handleVideo}>
                      <FaCameraRetro style={{ fontSize: "1.4rem" }} />
                      <span>Use Camera</span>
                    </label>
                  )}
                  {hasCamera && showCamera && (
                    <label className="secondary-btn" onClick={handleSnapshot}>
                      <FaCameraRetro style={{ fontSize: "1.4rem" }} />
                      <span>Take Photo</span>
                    </label>
                  )}
                  <input
                    id="image-picker"
                    type="file"
                    ref={imagePickerRef}
                    accept="image/*"
                    capture="camera"
                    onChange={(e) => handleImgSelection(e)}
                    className="hidden"
                  />
                  {
                    <label
                      htmlFor="image-picker"
                      className="secondary-btn"
                      onClick={handleImgSelection}
                    >
                      <RiGalleryFill style={{ fontSize: "1.5rem" }} />
                      <span>Choose from gallery</span>
                    </label>
                  }
                </div>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                {Object.entries(schoolData.templates.students).map((val, i) => (
                  <div key={i} className="field-container">
                    <label>{val[1].name}:</label>
                    {(() => {
                      switch (val[1].type) {
                        case "Text":
                          return (
                            <Text
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Number":
                          return (
                            <Number
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Options":
                          return (
                            <Options
                              options={val[1].options}
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Date Picker":
                          return (
                            <DatePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Time Picker":
                          return (
                            <TimePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Image Picker":
                          return (
                            <ImagePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                ))}
                <p className="info">
                  <BsInfoCircleFill style={{ fontSize: "1rem" }} />
                  <span>
                    No field should be left empty, unwanted fields can be filled
                    with "null" or hyphen(s) or any character of your choice.
                  </span>
                </p>
                {Object.entries(formData).every(
                  (value) => !invalidValues.includes(value[1].value)
                ) &&
                  !isLoading && (
                    <button className="primary-btn" id="submit-btn">
                      Submit
                    </button>
                  )}
                {isLoading && (
                  <Spinner
                    style={{ position: "absolute", bottom: 0, width: "100%" }}
                  />
                )}
              </form>
            </div>
            <img
              src={avatarURL}
              alt="school-logo-watermark"
              className="watermark"
            />
          </StudentRegistrationContent>
        </StudentRegistrationWrapper>
      )}
    </>
  );
};

// Staff Registration
const StaffRegistration = () => {
  const dispatch = useDispatch();
  const [hasCamera, setHasCamera] = useState("");

  const [showCamera, setShowCamera] = useState(false);
  const [, setShowCanvas] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({});

  const staffRegPageRef = useRef();
  const canvas = useRef(null);
  const context = useRef(null);

  const canvasRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const imagePickerRef = useRef();

  const avatarURL = useSelector((state) => state.schoolData.data.avatar_image);
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const invalidValues = ["", null, undefined];

  const handleVideo = () => {
    setShowCamera(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
    }
  };

  const handleSnapshot = () => {
    setShowCamera(false);
    setShowCanvas(false);

    context.current.drawImage(
      videoRef.current,
      0,
      0,
      context.current.canvas.clientWidth,
      context.current.canvas.clientHeight
    );

    setFormData((prevState) => ({
      ...prevState,
      image: {
        value: canvas.current.toDataURL("image/jpeg", 0.75),
        type: prevState.image.type,
      },
    }));
  };

  const handleImgSelection = (e) => {
    const fileReader = new FileReader();

    setShowCamera(false);
    setShowCanvas(false);

    fileReader.readAsDataURL(e.target.files[0]);

    fileReader.onloadend = (e) => {
      const url = e.target.result;
      imageRef.current.src = url;

      imageRef.current.onload = () => {
        context.current.clearRect(
          0,
          0,
          context.current.canvas.clientWidth,
          context.current.canvas.clientHeight
        );
        context.current.drawImage(
          imageRef.current,
          0,
          0,
          context.current.canvas.clientWidth,
          context.current.canvas.clientHeight
        );
        setFormData((prevState) => ({
          ...prevState,
          image: {
            value: canvas.current.toDataURL("image/jpeg", 0.75),
            type: prevState.image.type,
          },
        }));
      };
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const staffId = uuidv4();

    const dataToFirebase = {};
    const dataToMongoDB = {};

    Object.entries(formData).forEach((entry) => {
      if (entry[1].type === "Image Picker") {
        return (dataToFirebase[entry[0]] = entry[1].value);
      }
      return (dataToMongoDB[entry[0]] = entry[1].value);
    });

    dataToMongoDB.staff_id = staffId;

    try {
      // get downloadURL(s) from firebase storage for uploaded images
      const storageRefArr = Object.entries(dataToFirebase).map((data, i) =>
        ref(
          storage,
          `${schoolData.name.split(" ").join("-")}-${
            schoolData._id
          }/finance/${staffId}/images/${Object.keys(dataToFirebase)[i]}`
        )
      );
      const uploadResultArr = await Promise.all(
        Object.entries(dataToFirebase).map((data, i) => {
          if (Object.values(dataToFirebase)[i].startsWith("data:")) {
            return uploadString(storageRefArr[i], data[1], "data_url");
          }
          return uploadBytes(storageRefArr[i], data[1]);
        })
      );
      const downloadUrlArr = await Promise.all(
        uploadResultArr.map((result) => getDownloadURL(result.ref))
      );

      // Update data to be sent to mongo db
      downloadUrlArr.forEach(
        (url, i) => (dataToMongoDB[Object.keys(dataToFirebase)[i]] = url)
      );

      console.log(dataToMongoDB);

      const data = await axios({
        url: `/api/schools/${schoolId}/staffs`,
        method: "post",
        data: [dataToMongoDB, ...schoolData.staffs],
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      });
      if (
        data.status === 200 &&
        data.statusText === "OK" &&
        data.data.acknowledged === true
      ) {
        // Reset canvas

        context.current.clearRect(
          0,
          0,
          context.current.canvas.clientWidth,
          context.current.canvas.clientHeight
        );

        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        dispatch(fetchSchoolData(schoolToken));
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => dispatch(closeEditProfileModal()), 3000);
      }
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      staffRegPageRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    canvas.current = canvasRef.current;
    context.current = canvas.current.getContext("2d");
  }, []);

  useEffect(() => {
    (async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setHasCamera(devices.some((d) => d.kind === "videoinput"));

      Object.entries(schoolData.templates.staffs).forEach((arr) => {
        setFormData((prevState) => ({
          ...prevState,
          image: {
            value: null,
            type: "Image Picker",
          },
          [arr[0]]: {
            value: "",
            type: arr[1].type,
          },
        }));
      });
    })();
  }, [schoolData.templates.staffs]);

  return (
    <>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <FcApproval
                  style={{
                    fontSize: "5rem",
                    paddingTop: "-5px",
                  }}
                />
                <span>Staff profile successfully created.</span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <StudentRegistrationWrapper>
          <StudentRegistrationContent
            image={formData.image?.value}
            showCamera={showCamera}
            ref={staffRegPageRef}
          >
            <div className="reg-header">
              <img src={avatarURL} alt="" />
              <div>
                <h2>{schoolData.name}</h2>
                <p>{schoolData.address}</p>
                <p>{schoolData.country}</p>
              </div>
            </div>
            <hr />
            <h2 className="reg-title">Staff Registration Portal</h2>
            {isError && (
              <div id="registration-error-message">
                <p>
                  <BiErrorCircle
                    style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                  />
                  <span>
                    Sorry, we couldn't create staff profile, please try again
                    later.
                  </span>
                </p>
              </div>
            )}
            <div className="reg-form">
              <div className="passport-cont">
                <label id="passport-title">Passport</label>
                <div className="passport">
                  <img alt="" ref={imageRef} className="hidden" />
                  <canvas
                    width="426px"
                    height="426px"
                    ref={canvasRef}
                    id="canvas"
                  ></canvas>
                  {showCamera && <video ref={videoRef} autoPlay id="video" />}
                </div>
                <div className="button-group">
                  {hasCamera && !showCamera && (
                    <label className="primary-white-btn" onClick={handleVideo}>
                      <FaCameraRetro style={{ fontSize: "1.4rem" }} />
                      <span>Use Camera</span>
                    </label>
                  )}
                  {hasCamera && showCamera && (
                    <label className="secondary-btn" onClick={handleSnapshot}>
                      <FaCameraRetro style={{ fontSize: "1.4rem" }} />
                      <span>Take Photo</span>
                    </label>
                  )}
                  <input
                    id="image-picker"
                    type="file"
                    ref={imagePickerRef}
                    accept="image/*"
                    capture="camera"
                    onChange={(e) => handleImgSelection(e)}
                    className="hidden"
                  />
                  {
                    <label
                      htmlFor="image-picker"
                      className="secondary-btn"
                      onClick={handleImgSelection}
                    >
                      <RiGalleryFill style={{ fontSize: "1.5rem" }} />
                      <span>Choose from gallery</span>
                    </label>
                  }
                </div>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                {Object.entries(schoolData.templates.staffs).map((val, i) => (
                  <div key={i} className="field-container">
                    <label>{val[1].name}:</label>
                    {(() => {
                      switch (val[1].type) {
                        case "Text":
                          return (
                            <Text
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Number":
                          return (
                            <Number
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Options":
                          return (
                            <Options
                              options={val[1].options}
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Date Picker":
                          return (
                            <DatePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Time Picker":
                          return (
                            <TimePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Image Picker":
                          return (
                            <ImagePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                ))}
                <p className="info">
                  <BsInfoCircleFill style={{ fontSize: "1rem" }} />
                  <span>
                    No field should be left empty, unwanted fields can be filled
                    with "null" or hyphen(s) or any character of your choice.
                  </span>
                </p>
                {Object.entries(formData).every(
                  (value) => !invalidValues.includes(value[1].value)
                ) &&
                  !isLoading && (
                    <button className="primary-btn" id="submit-btn">
                      Submit
                    </button>
                  )}
                {isLoading && (
                  <Spinner
                    style={{ position: "absolute", bottom: 0, width: "100%" }}
                  />
                )}
              </form>
            </div>
            <img
              src={avatarURL}
              alt="school-logo-watermark"
              className="watermark"
            />
          </StudentRegistrationContent>
        </StudentRegistrationWrapper>
      )}
    </>
  );
};

// Record Financial Data
const RecordFinance = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({});

  const staffRegPageRef = useRef();

  const avatarURL = useSelector((state) => state.schoolData.data.avatar_image);
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );

  const invalidValues = ["", null, undefined];

  const statementId = uuidv4();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const dataToFirebase = {};
    const dataToMongoDB = {};

    Object.entries(formData).forEach((entry) => {
      if (entry[1].type === "Image Picker") {
        return (dataToFirebase[entry[0]] = entry[1].value);
      }
      return (dataToMongoDB[entry[0]] = entry[1].value);
    });

    try {
      // get downloadURL(s) from firebase storage for uploaded images
      const storageRefArr = Object.entries(dataToFirebase).map((data, i) =>
        ref(
          storage,
          `${schoolData.name.split(" ").join("-")}-${
            schoolData._id
          }/finance/${statementId}/images/${Object.keys(dataToFirebase)[i]}`
        )
      );

      // Upload data to firebase storage
      const uploadResultArr = await Promise.all(
        Object.entries(dataToFirebase).map((data, i) => {
          if (Object.values(dataToFirebase)[i].startsWith("data:")) {
            return uploadString(storageRefArr[i], data[1], "data_url");
          }
          return uploadBytes(storageRefArr[i], data[1]);
        })
      );
      const downloadUrlArr = await Promise.all(
        uploadResultArr.map((result) => getDownloadURL(result.ref))
      );

      // Update data to be sent to mongo db
      downloadUrlArr.forEach(
        (url, i) => (dataToMongoDB[Object.keys(dataToFirebase)[i]] = url)
      );

      dataToMongoDB.statement_id = statementId;

      const data = await axios({
        url: `/api/schools/${schoolId}/finance`,
        method: "post",
        data: dataToMongoDB,
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      });
      if (
        data.status === 200 &&
        data.statusText === "OK" &&
        data.data.data.acknowledged === true
      ) {
        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        dispatch(fetchSchoolData(schoolToken));
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => dispatch(closeEditProfileModal()), 3000);
      }
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      staffRegPageRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    (async () => {
      Object.entries(schoolData.templates.finance).forEach((arr) => {
        setFormData((prevState) => ({
          ...prevState,
          [arr[0]]: {
            value: "",
            type: arr[1].type,
          },
        }));
      });
    })();
  }, [schoolData.templates.finance]);

  return (
    <>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <FcApproval
                  style={{
                    fontSize: "5rem",
                    paddingTop: "-5px",
                  }}
                />
                <span>
                  {formData.statementType.value} successfully recorded.
                </span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <RecordFinanceWrapper>
          <RecordFinanceContent ref={staffRegPageRef}>
            <div className="reg-header">
              <img src={avatarURL} alt="" />
              <div>
                <h2>{schoolData.name}</h2>
                <p>{schoolData.address}</p>
                <p>{schoolData.country}</p>
              </div>
            </div>
            <hr />
            <h2 className="reg-title">Record Financial Data</h2>
            {isError && (
              <div id="registration-error-message">
                <p>
                  <BiErrorCircle
                    style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                  />
                  <span>
                    Sorry, we couldn't record {formData.statementType.value},
                    please try again later.
                  </span>
                </p>
              </div>
            )}
            <div className="reg-form">
              <form onSubmit={(e) => handleSubmit(e)}>
                {Object.entries(schoolData.templates.finance).map((val, i) => (
                  <div key={i} className="field-container">
                    <label>{val[1].name}:</label>
                    {(() => {
                      switch (val[1].type) {
                        case "Text":
                          return (
                            <Text
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Number":
                          return (
                            <Number
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Options":
                          return (
                            <Options
                              options={val[1].options}
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Date Picker":
                          return (
                            <DatePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Time Picker":
                          return (
                            <TimePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Image Picker":
                          return (
                            <ImagePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                ))}
                <p className="info">
                  <BsInfoCircleFill style={{ fontSize: "1rem" }} />
                  <span>
                    No field should be left empty, unwanted fields can be filled
                    with "null" or hyphen(s) or any character of your choice.
                  </span>
                </p>
                {Object.entries(formData).every(
                  (value) => !invalidValues.includes(value[1].value)
                ) &&
                  !isLoading && (
                    <button className="primary-btn" id="submit-btn">
                      Submit
                    </button>
                  )}
                {isLoading && (
                  <Spinner
                    style={{ position: "absolute", bottom: 0, width: "100%" }}
                  />
                )}
              </form>
            </div>
            <img
              src={avatarURL}
              alt="school-logo-watermark"
              className="watermark"
            />
          </RecordFinanceContent>
        </RecordFinanceWrapper>
      )}
    </>
  );
};

// Financial Statement View
const FinancialStatement = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  const [formData, setFormData] = useState({});

  const staffRegPageRef = useRef();

  const avatarURL = useSelector((state) => state.schoolData.data.avatar_image);
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const { financeStatementId } = useSelector((state) => state.config);

  const invalidValues = ["", null, undefined];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const dataToFirebase = {};
    const dataToMongoDB = {};

    Object.entries(formData).forEach((entry) => {
      if (
        entry[1].type === "Image Picker" &&
        entry[1].value !== formDataCopy.current[entry[0]]["value"]
      ) {
        return (dataToFirebase[entry[0]] = entry[1].value);
      }
      return (dataToMongoDB[entry[0]] = entry[1].value);
    });

    try {
      // get downloadURL(s) from firebase storage for uploaded images
      const storageRefArr = Object.entries(dataToFirebase).map((data, i) =>
        ref(
          storage,
          `${schoolData.name.split(" ").join("-")}-${
            schoolData._id
          }/finance/${financeStatementId}/images/${
            Object.keys(dataToFirebase)[i]
          }`
        )
      );

      // Upload data to firebase storage
      let uploadResultArr, downloadUrlArr;

      if (Object.entries(dataToFirebase).length && storageRefArr.length) {
        uploadResultArr = await Promise.all(
          Object.entries(dataToFirebase).map((data, i) => {
            if (Object.values(dataToFirebase)[i].startsWith("data:")) {
              return uploadString(storageRefArr[i], data[1], "data_url");
            }
            return uploadBytes(storageRefArr[i], data[1]);
          })
        );
      }
      if (uploadResultArr && uploadResultArr.length) {
        downloadUrlArr = await Promise.all(
          uploadResultArr.map((result) => getDownloadURL(result.ref))
        );
      }

      // Update data to be sent to mongo db
      if (downloadUrlArr && downloadUrlArr.length) {
        downloadUrlArr.forEach(
          (url, i) => (dataToMongoDB[Object.keys(dataToFirebase)[i]] = url)
        );
      }

      dataToMongoDB.statement_id = financeStatementId;

      const data = await axios({
        url: `/api/schools/${schoolId}/finance`,
        method: "put",
        data: dataToMongoDB,
        headers: {
          Authorization: `Bearer ${schoolToken}`,
        },
      });
      if (
        data.status === 200 &&
        data.statusText === "OK" &&
        data.data.data.acknowledged === true
      ) {
        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        dispatch(fetchSchoolData(schoolToken));
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => dispatch(closeEditProfileModal()), 3000);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      staffRegPageRef.current.scrollIntoView();
    }
  };

  const filteredFinance = useMemo(
    () =>
      schoolData.finance
        .filter((item) => item.statement_id === financeStatementId)
        .map(({ statement_id, ...rest }) => rest),
    [schoolData.finance, financeStatementId]
  );

  useLayoutEffect(() => {
    (() => {
      Object.entries(schoolData.templates.finance).forEach((arr) => {
        setFormData((prevState) => ({
          ...prevState,
          [arr[0]]: {
            value: filteredFinance[0][arr[0]],
            type: arr[1].type,
          },
        }));
      });
    })();
  }, [schoolData.templates.finance, filteredFinance]);

  const formDataCopy = useRef({});

  useEffect(() => {
    if (Object.values(formDataCopy.current).length) {
      console.log(formDataCopy.current);
      return setShowSubmit(
        Object.entries(formDataCopy.current).some(
          (val) => val[1]["value"] !== formData[val[0]]["value"]
        )
      );
    }
    formDataCopy.current = { ...formData };
    console.log(formDataCopy);
  }, [formData]);

  return (
    <>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <FcApproval
                  style={{
                    fontSize: "5rem",
                    paddingTop: "-5px",
                  }}
                />
                <span>
                  {formData.statementType.value} of ID: {financeStatementId}{" "}
                  successfully updated.
                </span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <RecordFinanceWrapper>
          <RecordFinanceContent ref={staffRegPageRef}>
            <div className="reg-header">
              <img src={avatarURL} alt="" />
              <div>
                <h2>{schoolData.name}</h2>
                <p>{schoolData.address}</p>
                <p>{schoolData.country}</p>
              </div>
            </div>
            <hr />
            <h2 className="reg-title">Manage Financial Record</h2>
            {isError && (
              <div id="registration-error-message">
                <p>
                  <BiErrorCircle
                    style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                  />
                  <span>
                    Sorry, we couldn't record {formData.statementType.value},
                    please try again later.
                  </span>
                </p>
              </div>
            )}
            <p className="info submit-btn-notice">
              <BsInfoCircleFill
                style={{ fontSize: "1.2rem", color: "var(--primary-color)" }}
              />
              <span>
                The submit button will only be displayed if any modification is
                made to the current financial record.
              </span>
            </p>
            <div className="reg-form">
              <form onSubmit={(e) => handleSubmit(e)}>
                {Object.entries(schoolData.templates.finance).map((val, i) => (
                  <div key={i} className="field-container">
                    <label>{val[1].name}:</label>
                    {(() => {
                      switch (val[1].type) {
                        case "Text":
                          return (
                            <Text
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Number":
                          return (
                            <Number
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Options":
                          return (
                            <Options
                              options={val[1].options}
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              name={val[0]}
                            />
                          );
                        case "Date Picker":
                          return (
                            <DatePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Time Picker":
                          return (
                            <TimePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        case "Image Picker":
                          return (
                            <ImagePicker
                              value={formData[val[0]]?.value}
                              setFormData={setFormData}
                              formData={formData}
                              name={val[0]}
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                ))}
                <p className="info">
                  <BsInfoCircleFill
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--primary-color)",
                    }}
                  />
                  <span>
                    No field should be left empty, unwanted fields can be filled
                    with "null" or hyphen(s) or any character of your choice.
                  </span>
                </p>
                {Object.entries(formData).every(
                  (value) => !invalidValues.includes(value[1].value)
                ) && (
                  <div className="action-btns-container">
                    {!isLoading && (
                      <p
                        onClick={() => {
                          dispatch(showForm("deleteModal"));
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          setTimeout(
                            () => (document.body.style.overflowY = "hidden"),
                            300
                          );
                        }}
                        className="delete-btn"
                        id="submit-btn"
                      >
                        <MdDeleteForever style={{ fontSize: "1.4rem" }} />
                        <span>Delete record</span>
                      </p>
                    )}

                    {!isLoading && showSubmit && (
                      <button className="primary-btn" id="submit-btn">
                        <MdPublishedWithChanges
                          style={{ fontSize: "1.4rem" }}
                        />
                        <span>Update record</span>
                      </button>
                    )}
                  </div>
                )}
                {isLoading && (
                  <Spinner
                    style={{ position: "absolute", bottom: 0, width: "100%" }}
                  />
                )}
              </form>
            </div>
            <img
              src={avatarURL}
              alt="school-logo-watermark"
              className="watermark"
            />
          </RecordFinanceContent>
        </RecordFinanceWrapper>
      )}
    </>
  );
};
// Student Profile
const StaffProfile = () => {
  const dispatch = useDispatch();

  const staffImageUrl = useSelector((state) => state.config.staffImageUrl);
  const staff = useSelector((state) => state.schoolData.data.staffs).filter(
    (staff) => staff.image === staffImageUrl
  );
  return (
    <StaffProfileWrapper>
      <StaffProfileContent>
        <h2>Staff Profile</h2>
        <img className="staff-img" src={staffImageUrl} alt="staff" />
        <div>
          <h2 className="staff-info">Staff Information</h2>
          <div className="staff-details-cont">
            {Object.entries(staff[0]).map(
              (detail) =>
                detail[0] !== "image" && (
                  <div className="staff-detail" key={detail[0]}>
                    <label>
                      {detail[0]
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, function (str) {
                          return str.toUpperCase();
                        })}
                      :
                    </label>
                    <span>{detail[1]}</span>
                  </div>
                )
            )}
            <button
              className="close-staff-profile"
              onClick={() => dispatch(closeEditProfileModal())}
            >
              Close
            </button>
          </div>
        </div>
      </StaffProfileContent>
    </StaffProfileWrapper>
  );
};

const DeleteModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();

  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { financeStatementId } = useSelector((state) => state.config);
  const { id: schoolId } = useSelector((state) => state.schoolAuth);
  const { token: schoolToken } = useSelector((state) => state.schoolAuth);

  const handleDelete = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const filteredData = schoolData.finance.filter(
      (f) => f.statement_id === financeStatementId
    );
    const imagePickerFields = Object.entries(schoolData.templates.finance)
      .filter((f) => f[1]["type"] === "Image Picker")
      .map((r) => r[0]);

    try {
      const storageRefArr = filteredData.map((item) => {
        for (const key in item) {
          if (imagePickerFields.includes(key)) {
            return ref(
              storage,
              `${schoolData.name.split(" ").join("-")}-${
                schoolData._id
              }/finance/${financeStatementId}/images/${key}`
            );
          }
        }
      });

      const firebaseResp = await Promise.all(
        storageRefArr.map((ref) => deleteObject(ref))
      );

      console.log(firebaseResp);

      if (!firebaseResp) {
        throw new Error("Doc not deleted from firebase");
      }
      try {
        const serverResponse = await axios({
          url: `/api/schools/${schoolId}/finance/remove`,
          method: "put",
          data: { financeStatementId },
          headers: {
            Authorization: "Bearer " + schoolToken,
          },
        });
        if (
          serverResponse.status !== 200 &&
          serverResponse.statusText !== "OK"
        ) {
          throw new Error("Could not delete financial record from mongoDB");
        }

        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        dispatch(fetchSchoolData(schoolToken));
        setTimeout(() => dispatch(closeEditProfileModal()), 3000);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setIsSuccess(false);
        console.log(error);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setIsSuccess(false);
      console.log(error);
    }
  };
  return (
    <DeleteModalWrapper>
      {isSuccess && (
        <SuccessMessageWrapper>
          <SuccessMessageContent>
            <div className="success-message">
              <p>
                <FcApproval
                  style={{
                    fontSize: "5rem",
                    paddingTop: "-5px",
                  }}
                />
                <span>Finance record deleted successfully.</span>
              </p>
            </div>
          </SuccessMessageContent>
        </SuccessMessageWrapper>
      )}
      {!isSuccess && (
        <DeleteModalContent>
          <h2>Delete Record</h2>
          {isError && (
            <div id="registration-error-message">
              <p>
                <BiErrorCircle
                  style={{ fontSize: "1.4rem", paddingTop: "-5px" }}
                />
                <span>
                  Sorry, we couldn't delete this record, please try again later.
                </span>
              </p>
            </div>
          )}
          <p>
            Are you sure you want to delete this financial record with
            Statement-ID : {financeStatementId}.
          </p>
          <div className="btn-group">
            {!isLoading && (
              <button
                className="white-btn"
                onClick={() => {
                  dispatch(showForm("financialStatement"));
                  document.body.style.overflowY = "scroll";
                }}
              >
                No, Cancel
              </button>
            )}
            {!isLoading && (
              <button className="delete-btn" onClick={handleDelete}>
                Yes, Delete
              </button>
            )}
            {isLoading && (
              <Spinner
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                }}
              />
            )}
          </div>
        </DeleteModalContent>
      )}
    </DeleteModalWrapper>
  );
};

// Saving Changes
const Saving = () => {
  return (
    <SavingWrapper>
      <SavingContent>
        <div>
          <Spinner />
        </div>
        <p>Saving Changes</p>
      </SavingContent>
    </SavingWrapper>
  );
};

// Student Profile
const StudentProfile = () => {
  const dispatch = useDispatch();

  const studentImageUrl = useSelector((state) => state.config.studentImageUrl);
  const student = useSelector((state) => state.schoolData.data.students).filter(
    (student) => student.image === studentImageUrl
  );
  return (
    <StudentProfileWrapper>
      <StudentProfileContent>
        <h2>Student Profile</h2>
        <img className="student-img" src={studentImageUrl} alt="Student" />
        <div>
          <h2 className="student-info">Student Information</h2>
          <div className="student-details-cont">
            {Object.entries(student[0]).map(
              (detail) =>
                detail[0] !== "image" && (
                  <div className="student-detail" key={detail[0]}>
                    <label>
                      {detail[0]
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, function (str) {
                          return str.toUpperCase();
                        })}
                      :
                    </label>
                    <span>{detail[1]}</span>
                  </div>
                )
            )}
            <button
              className="close-student-profile"
              onClick={() => dispatch(closeEditProfileModal())}
            >
              Close
            </button>
          </div>
        </div>
      </StudentProfileContent>
    </StudentProfileWrapper>
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
      {formToShow === "createStaff" && <CreateStaff />}
      {formToShow === "createFinance" && <CreateFinance />}
      {formToShow === "createStudentTemplate" && <CreateStudentTemplate />}
      {formToShow === "createStaffTemplate" && <CreateStaffTemplate />}
      {formToShow === "createFinanceTemplate" && <CreateFinanceTemplate />}
      {formToShow === "studentRegistration" && <StudentRegistration />}
      {formToShow === "staffRegistration" && <StaffRegistration />}
      {formToShow === "recordFinance" && <RecordFinance />}
      {formToShow === "studentProfile" && <StudentProfile />}
      {formToShow === "staffProfile" && <StaffProfile />}
      {formToShow === "financialStatement" && <FinancialStatement />}
      {formToShow === "deleteModal" && <DeleteModal />}
      {formToShow === "saving" && <Saving />}
    </>
  );
};

export default Form;
