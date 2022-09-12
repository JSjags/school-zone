import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";
import moment from "moment";

import { storage } from "../../firebase/firebase.config";
import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import {
  closeEditProfileModal,
  openEditProfileModal,
  setCurrentPage,
  showForm,
} from "../../features/config/configData";

import HtmlEditor, {
  Toolbar,
  MediaResizing,
  ImageUpload,
  Item,
} from "devextreme-react/html-editor";

import {
  Content,
  ErrorContainer,
  LoadingContainer,
  Wrapper,
} from "./Posts.styles";
import { BiError, BiMessageAltAdd } from "react-icons/bi";

import PageHeader from "../../components/PageHeader/Index";
import Spinner from "../../components/Spinner/Index";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRef } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import EditModal from "../../components/EditModal/Index";
import { useCallback } from "react";
import Text from "../../components/Text/Index";
import ImagePicker from "../../components/ImagePicker/Index";
import TextArea from "../../components/TextArea/Index";
import { BsInfoCircleFill } from "react-icons/bs";

import noPostsSvg from "../../assets/no-posts.svg";
import { TbListDetails } from "react-icons/tb";
import Options from "../../components/Options/Index";
import { RiFilterLine } from "react-icons/ri";
import SearchBar from "../../components/SearchBar/Index";

const LightTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/LightTheme")
);
const DarkTheme = React.lazy(() =>
  import("../../DEThemes/SchedulerThemes/DarkTheme")
);

const EditorTheme = ({ children }) => {
  const CHOSEN_THEME =
    useSelector((state) => state.schoolData.data.settings.theme) ?? "Light";
  return (
    <>
      <React.Suspense fallback={<></>}>
        {CHOSEN_THEME.trim() === "Light" && <LightTheme />}
        {CHOSEN_THEME.trim() === "Dark" && <DarkTheme />}
      </React.Suspense>
      {children}
    </>
  );
};

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [publishingError, setPublishingError] = useState(false);
  const [publishingSuccess, setPublishingSuccess] = useState(false);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const viewOptions = useRef("Column Grid");

  const [formData, setFormData] = useState({
    view: "Column",
    filter: "All",
  });

  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);
  const { articles } = useSelector((state) => state.schoolData.data);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);
  const [maxIndex, setMaxIndex] = useState(pageNumber * 10);

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

    dispatch(fetchSchoolData(schoolToken));
  }, [schoolToken, dispatch, navigate, message]);

  useEffect(() => {
    dispatch(setCurrentPage("posts"));
  }, [dispatch]);

  const redirect = (location) => {
    if (location === "home") {
      localStorage.removeItem("schoolCredentials");
      return navigate("/");
    } else {
      localStorage.removeItem("schoolCredentials");
      return navigate("/login");
    }
  };

  return (
    <Wrapper isSuccess={isSuccess ? true : false}>
      {/* {publishingSuccess && (
        <div className="publish-success-message">
          <AiOutlineFileDone style={{ fontSize: "1.4rem" }} />
          <p>{uploadInfo.message}</p>
        </div>
      )}
      {publishingError && (
        <div className="publish-error-message">
          <BiError style={{ fontSize: "1.4rem", paddingTop: "-5px" }} />
          <p>{uploadInfo.message}</p>
        </div>
      )} */}
      {isEditProfileModalOpen && <EditModal />}
      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isSuccess && (
        <Content>
          <main>
            <PageHeader title="Posts" />
            {(articles === undefined || articles.length <= 0) && (
              <div className="create-article">
                <img alt="add-article" src={noPostsSvg}></img>
                <p>No posts found.</p>
                <div className="create-article-button-group">
                  <button onClick={() => navigate("/schooldashboard/editor")}>
                    <BiMessageAltAdd style={{ fontSize: "2rem" }} />
                    <span>Create Post | Article</span>
                  </button>
                </div>
              </div>
            )}
            {!isLoading && articles.length >= 1 && (
              <>
                <div className="available-articles">
                  <div className="action-buttons-box">
                    <div className="left-hand">
                      <div className="item">
                        <TbListDetails style={{ fontSize: "1.4rem" }} />
                        <Options
                          options={viewOptions.current}
                          value={formData.view}
                          setFormData={setFormData}
                          name="posts"
                        />
                      </div>
                    </div>
                    <div className="right-hand">
                      <div className="item filter">
                        <RiFilterLine style={{ fontSize: "1.6rem" }} />
                        <Options
                          options={"All Date Alphabet"}
                          value={formData.filter}
                          setFormData={setFormData}
                          name="filter"
                        />
                      </div>
                      <SearchBar
                        showSearch={showSearch}
                        setShowSearch={setShowSearch}
                        setSearchText={setSearchText}
                        financeData={articles}
                        setSearchedData={setSearchedData}
                        setPageNumber={setPageNumber}
                        setMaxIndex={setMaxIndex}
                        filter={formData.filter}
                      />
                    </div>
                  </div>
                  <div className="articles-box">
                    {articles.map((article) => (
                      <div className="article">
                        <div className="article-banner-cont">
                          <img
                            className="article-banner"
                            src={article.articleDetails.cover}
                            alt="banner"
                          />
                        </div>
                        <div className="article-details">
                          <h3
                            className="
                      title"
                          >
                            {article.articleDetails.title}
                          </h3>
                          <p
                            className="
                      author"
                          >
                            by {article.articleDetails.author}
                          </p>
                          <p
                            className="
                      time"
                          >
                            {moment(article.articleDetails.timeStamp).fromNow()}
                          </p>
                          <p
                            className="
                      summary"
                          >
                            {article.articleDetails.summary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
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

export default Posts;
