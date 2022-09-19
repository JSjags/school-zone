import axios from "axios";

const baseUrl = "/api/schools";

// fetch school data
const fetchSchoolData = async (authToken, isCancelled) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}/info`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

// fetch school articles and posts
const fetchSchoolPosts = async (obj) => {
  const url = obj.query
    ? `${baseUrl}/posts?page=${obj.pageNumber}&query=${obj.query}&sort=${obj.sort}`
    : `${baseUrl}/posts?page=${obj.pageNumber}&sort=${obj.sort}`;
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
    url: `${baseUrl}/settings`,
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
