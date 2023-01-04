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
import { BiError, BiUserCircle } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdMessage, MdNotifications, MdSettings } from "react-icons/md";
import {
  openEditProfileModal,
  showForm,
} from "../../features/config/configData";

import EditModal from "../../components/EditModal/Index";
import { Wrapper, Content } from "./Profile.styles";
import {
  defaultCoverPicUrl,
  defaultAvatarUrl,
} from "../../components/SideBar/Index";
import {
  ErrorContainer,
  LoadingContainer,
} from "../SchoolDashboard/SchoolDashboard.styles";
import Spinner from "../../components/Spinner/Index";
import PageHeader from "../../components/PageHeader/Index";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const authToken = useSelector((state) => state.schoolAuth.token);

  const { data, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.schoolData
  );

  const handleEditProfileModal = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    dispatch(openEditProfileModal());
    dispatch(showForm("editProfile"));
  };
  const handleAvatarChange = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    dispatch(openEditProfileModal());
    dispatch(showForm("changeAvatar"));
  };
  const handleCoverPhotoChange = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    dispatch(openEditProfileModal());
    dispatch(showForm("changeCoverPhoto"));
  };
  const handleChangePassword = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    dispatch(openEditProfileModal());
    dispatch(showForm("changePassword"));
  };

  const redirect = (location) => {
    if (location === "home") {
      localStorage.removeItem("schoolCredentials");
      return navigate("/");
    } else {
      localStorage.removeItem("schoolCredentials");
      return navigate("/login");
    }
  };

  useEffect(() => {
    if (message !== null && message.includes("jwt expired")) {
      localStorage.removeItem("schoolCredentials");
      dispatch(resetSchoolAuth());
      dispatch(resetSchoolData());
      navigate("/login");
    }
    if (message !== null && message.includes("User not authorized")) {
      localStorage.removeItem("schoolCredentials");
      dispatch(resetSchoolAuth());
      dispatch(resetSchoolData());
      navigate("/login");
    }

    dispatch(fetchSchoolData(authToken));
  }, []);

  useEffect(() => {
    dispatch(setCurrentPage("profile"));
  }, [dispatch]);

  return (
    <Wrapper isSuccess={isSuccess ? true : false}>
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isSuccess && (
        <Content
          coverPhoto={
            data.backdrop_image ? data.backdrop_image : defaultCoverPicUrl
          }
        >
          {isEditProfileModalOpen && <EditModal />}
          <main>
            <PageHeader title="Profile" />
            <section className="profile-upper-section">
              <div className="profile-cover">
                <img
                  alt="profile-cover"
                  src={
                    data.backdrop_image
                      ? data.backdrop_image
                      : defaultCoverPicUrl
                  }
                />
              </div>
              <div className="profile-pic">
                <div className="profile-pic-img-cont">
                  <img
                    className="profile-pic-img"
                    alt="profile-pic"
                    src={
                      data.avatar_image ? data.avatar_image : defaultAvatarUrl
                    }
                  />
                </div>
                <div className="profile-name">
                  <h2>{data.name}</h2>
                  <p>{data.email}</p>
                </div>
              </div>
            </section>
            <section className="profile-lower-section">
              <section className="sub-section">
                <h2>School Information</h2>
                <div>
                  <label>Name:</label>
                  <input type="text" readOnly value={data.name} />
                </div>
                <div>
                  <label>E-mail:</label>
                  <input type="text" readOnly value={data.email} />
                </div>
                <div>
                  <label>Phone:</label>
                  <input type="text" readOnly value={data.phoneNumber} />
                </div>
                <div>
                  <label>Institution:</label>
                  <input type="text" readOnly value={data.institutionLevel} />
                </div>
                <div>
                  <label>Country:</label>
                  <input type="text" readOnly value={data.country} />
                </div>
                <div>
                  <label>Address:</label>
                  <input type="text" readOnly value={data.address} />
                </div>
                <button
                  onClick={handleEditProfileModal}
                  className="edit-details"
                >
                  Edit School Details
                </button>
              </section>
              <section className="sub-section">
                <h2>Profile Identity</h2>
                <button
                  className="profile-id-btn"
                  onClick={() => {
                    handleCoverPhotoChange();
                  }}
                >
                  <BsImage style={{ fontSize: "2rem" }} />
                  <span>Change Cover Photo</span>
                </button>
                <button
                  className="profile-id-btn"
                  onClick={() => {
                    handleAvatarChange();
                  }}
                >
                  <BiUserCircle style={{ fontSize: "2rem" }} />
                  <span>Change Avatar Photo</span>
                </button>
                <button
                  className="profile-id-btn"
                  onClick={() => {
                    handleChangePassword();
                  }}
                >
                  <RiLockPasswordLine style={{ fontSize: "2rem" }} />
                  <span>Change Password</span>
                </button>
              </section>
            </section>
          </main>
        </Content>
      )}
      {isError && (
        <ErrorContainer>
          <BiError
            style={{
              color: "red",
              fontSize: "5rem",
            }}
          />
          <p>
            {message.includes("jwt expired")
              ? "Timeout"
              : `${message}, try refreshing the page.`}
          </p>
          <div className="button-group">
            <button onClick={() => redirect("home")}>Go to homepage</button>
            <button onClick={() => redirect("login")}>Go to Sign in</button>
          </div>
        </ErrorContainer>
      )}
    </Wrapper>
  );
};

export default Profile;
