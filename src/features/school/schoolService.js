import axios from "axios";

const baseUrl = "/api/schools";

// fetch school data
const fetchSchoolData = async (authToken, page) => {
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
    ? `${baseUrl}/posts?page=${obj.pageNumber}&query=${obj.query}`
    : `${baseUrl}/posts?page=${obj.pageNumber}`;
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
