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
  fetchSchoolPosts,
  resetSchoolData,
  setPostsToDelete,
  setPostToShow,
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
import { BiBookAdd, BiError, BiMessageAltAdd } from "react-icons/bi";

import PageHeader from "../../components/PageHeader/Index";
import Spinner from "../../components/Spinner/Index";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRef } from "react";
import {
  AiOutlineControl,
  AiOutlineEdit,
  AiOutlineFileDone,
} from "react-icons/ai";
import EditModal from "../../components/EditModal/Index";
import { useCallback } from "react";
import Text from "../../components/Text/Index";
import ImagePicker from "../../components/ImagePicker/Index";
import TextArea from "../../components/TextArea/Index";
import { BsInfoCircleFill } from "react-icons/bs";

import noPostsSvg from "../../assets/no-posts.svg";
import { TbListDetails } from "react-icons/tb";
import Options from "../../components/Options/Index";
import { BsSortDown } from "react-icons/bs";
import SearchBar from "../../components/SearchBar/Index";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import Button from "../../components/Button/Index";
import { MdDeleteOutline, MdDownloadDone } from "react-icons/md";

const PostControlButtons = ({ setDeletionArray, deletionArray, targetId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState(false);
  const alteredArray = useRef([]);

  const handleSelection = () => {
    setIsSelected((prev) => (prev = !prev));

    if (deletionArray.includes(targetId)) {
      alteredArray.current = deletionArray.filter((id) => id !== targetId);
      setDeletionArray(() => [...alteredArray.current]);
      return dispatch(setPostsToDelete([...alteredArray.current]));
    }

    dispatch(setPostsToDelete([...deletionArray, targetId]));
    setDeletionArray((prev) => [...prev, targetId]);
  };

  return (
    <>
      <Button
        callback={() => {
          dispatch(setPostToShow(targetId));
          navigate("/schooldashboard/editor");
        }}
      >
        <AiOutlineEdit style={{ fontSize: "1.4rem" }} />
        <span>Edit</span>
      </Button>
      <Button isSelected={isSelected} callback={() => handleSelection()}>
        <MdDeleteOutline style={{ fontSize: "1.4rem" }} />
        <span>{isSelected ? "Marked for deletion" : "Delete"}</span>
      </Button>
    </>
  );
};

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [managePosts, setManagePosts] = useState(false);
  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const viewOptions = useRef("Column Grid");

  const [formData, setFormData] = useState({
    view: "Column",
    filter: "Date(desc)",
  });

  const {
    data: schoolData,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.schoolData);

  const { posts } = useSelector((state) => state.schoolData.data);

  const { isPostsLoading, isPostsSuccess, isPostsError, postsMessage } =
    useSelector((state) => state.schoolData);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);

  const [deletionArray, setDeletionArray] = useState([]);

  const checkButtonRef = useCallback(
    (node) => {
      if (posts.results === undefined || posts.totalPages === undefined) return;
      if (node === null) return;
      if (posts.results === undefined) return;

      if (pageNumber - 2 < 1 && node.classList.contains("double-left")) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (pageNumber - 1 < 1 && node.classList.contains("left")) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (
        pageNumber + 1 > posts.totalPages &&
        node.classList.contains("right")
      ) {
        node.disabled = true;
        return node.classList.add("disabled");
      }
      if (
        pageNumber + 2 > posts.totalPages &&
        node.classList.contains("double-right")
      ) {
        node.disabled = true;
        return node.classList.add("disabled");
      }

      node.disabled = false;
      node.classList.remove("disabled");
    },
    [pageNumber, posts]
  );

  const handleManagePosts = () => {
    setManagePosts((prev) => !prev);

    if (deletionArray.length) {
      dispatch(openEditProfileModal());
      dispatch(showForm("deletePosts"));
    }
    setDeletionArray([]);
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

    dispatch(
      fetchSchoolPosts({
        authToken: schoolToken,
        pageNumber: 1,
        sort: formData.filter,
      })
    );
    console.log(formData.filter);
  }, [schoolToken, formData.filter, dispatch, navigate, message]);

  useEffect(() => {
    dispatch(setCurrentPage("posts"));
    setPageNumber(1);
    setShowSearch(false);
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
      {isEditProfileModalOpen && <EditModal />}
      <Content>
        <main>
          <PageHeader title="Articles" />
          {isPostsLoading && (
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>
          )}
          {!isPostsLoading && isPostsSuccess && (
            <>
              {(posts?.results === undefined || posts?.results.length <= 0) && (
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
              {!isPostsLoading && posts?.results.length >= 1 && (
                <>
                  <div className="available-articles">
                    <div className="buttons-holder">
                      <Button
                        callback={() => navigate("/schooldashboard/editor")}
                      >
                        <BiBookAdd style={{ fontSize: "1.4rem" }} />
                        <span>Add Article | Post</span>
                      </Button>
                      <Button
                        callback={handleManagePosts}
                        status={managePosts ? "done" : undefined}
                      >
                        {managePosts ? (
                          <MdDownloadDone style={{ fontSize: "1.4rem" }} />
                        ) : (
                          <AiOutlineControl style={{ fontSize: "1.4rem" }} />
                        )}
                        <span>{managePosts ? "Done" : "Manage Posts"}</span>
                      </Button>
                    </div>
                    <div className="action-buttons-box">
                      <div className="left-hand">
                        <div className="item">
                          <TbListDetails style={{ fontSize: "1.4rem" }} />
                          <Options
                            options={viewOptions.current}
                            value={formData.view}
                            setFormData={setFormData}
                            name="view"
                          />
                        </div>
                      </div>
                      <div className="right-hand">
                        <div className="item filter">
                          <BsSortDown style={{ fontSize: "1.6rem" }} />
                          <Options
                            options={
                              "Date(desc) Date(asc) Title(desc) Title(asc)"
                            }
                            value={posts.sort}
                            setFormData={setFormData}
                            name="filter"
                          />
                        </div>
                        <SearchBar
                          showSearch={showSearch}
                          setShowSearch={setShowSearch}
                          setSearchText={setSearchText}
                          financeData={posts.results}
                          setPageNumber={setPageNumber}
                          filter={formData.filter}
                          query={posts.query}
                        />
                      </div>
                    </div>
                    {showSearch && (
                      <div>
                        <h2 className="search-title">
                          Search results for{" "}
                          <span className="search-text">"{posts.query}"</span>
                        </h2>
                        <p className="search-subtitle">
                          <span>{posts.totalArticles}</span> results found.
                        </p>
                      </div>
                    )}
                    <div
                      className={
                        formData.view.trim().toLowerCase() === "column"
                          ? "articles-box column"
                          : "articles-box grid"
                      }
                    >
                      {posts.results.map((article) => (
                        <div key={article.articleId} className="article">
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
                              onClick={() => {
                                dispatch(openEditProfileModal());
                                dispatch(showForm("readArticle"));
                                dispatch(setPostToShow(article.articleId));
                              }}
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
                              {moment(
                                article.articleDetails.timeStamp
                              ).fromNow()}
                            </p>
                            <p
                              className="
                      summary"
                            >
                              {article.articleDetails.summary}
                            </p>
                          </div>
                          {managePosts && (
                            <div className="manage-buttons">
                              <PostControlButtons
                                deletionArray={deletionArray}
                                setDeletionArray={setDeletionArray}
                                targetId={article.articleId}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="page-info">
                      <div className="page-controls">
                        <button
                          ref={checkButtonRef}
                          className="page-controls_btn double-left"
                          onClick={() => {
                            dispatch(
                              fetchSchoolPosts({
                                authToken: schoolToken,
                                pageNumber: pageNumber - 2,
                                ...(posts.query && { query: posts.query }),
                                sort: formData.filter,
                              })
                            );
                            setPageNumber((prevState) => prevState - 2);
                          }}
                        >
                          <FaAngleDoubleLeft />
                        </button>
                        <button
                          ref={checkButtonRef}
                          className="page-controls_btn left"
                          onClick={() => {
                            dispatch(
                              fetchSchoolPosts({
                                authToken: schoolToken,
                                pageNumber: pageNumber - 1,
                                ...(posts.query && { query: posts.query }),
                                sort: formData.filter,
                              })
                            );
                            setPageNumber((prevState) => prevState - 1);
                          }}
                        >
                          <FaAngleLeft />
                        </button>
                        <span className="page-controls_number">
                          Page {pageNumber} of {posts.totalPages}
                        </span>
                        <button
                          ref={checkButtonRef}
                          className="page-controls_btn right"
                          onClick={() => {
                            dispatch(
                              fetchSchoolPosts({
                                authToken: schoolToken,
                                pageNumber: pageNumber + 1,
                                ...(posts.query && { query: posts.query }),
                                sort: formData.filter,
                              })
                            );
                            setPageNumber((prevState) => prevState + 1);
                          }}
                        >
                          <FaAngleRight />
                        </button>
                        <button
                          ref={checkButtonRef}
                          className="page-controls_btn double-right"
                          onClick={() => {
                            dispatch(
                              fetchSchoolPosts({
                                authToken: schoolToken,
                                pageNumber: pageNumber + 2,
                                ...(posts.query && { query: posts.query }),
                                sort: formData.filter,
                              })
                            );
                            setPageNumber((prevState) => prevState + 2);
                          }}
                        >
                          <FaAngleDoubleRight />
                        </button>
                      </div>
                      <div className="page-details">
                        <span className="current-items">
                          Items{" "}
                          {pageNumber < 2
                            ? 1
                            : (pageNumber - 1) *
                                schoolData.settings.paginationResults +
                              1}
                          -{" "}
                          {pageNumber * schoolData.settings.paginationResults >
                          posts.totalArticles
                            ? posts.totalArticles
                            : pageNumber *
                              schoolData.settings.paginationResults}
                        </span>
                        <span className="total-items">
                          ( {posts.totalArticles} Items)
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </main>
      </Content>
      {isPostsError && (
        <ErrorContainer>
          <BiError
            style={{
              color: "red",
              fontSize: "5rem",
            }}
          />
          <p>
            {postsMessage.includes("jwt expired")
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
