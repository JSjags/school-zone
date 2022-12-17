import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_BASE_URL
    : "";

// fetch school data
const fetchSchoolData = async (authToken, isCancelled) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}/api/schools/info`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

// fetch school articles and posts
const fetchSchoolPosts = async (obj) => {
  const url = obj.query
    ? `${baseUrl}/api/schools/posts?page=${obj.pageNumber}&query=${obj.query}&sort=${obj.sort}`
    : `${baseUrl}/api/schools/posts?page=${obj.pageNumber}&sort=${obj.sort}`;
  const response = await axios({
    method: "get",
    url,
    headers: {
      Authorization: `Bearer ${obj.authToken}`,
    },
  });

  return response.data;
};

// fetch school settings
const fetchSchoolSettings = async (authToken) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}/api/schools/settings`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

const schoolService = {
  fetchSchoolData,
  fetchSchoolSettings,
  fetchSchoolPosts,
};

export default schoolService;
