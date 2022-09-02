import axios from "axios";

const baseUrl = "/api/schools";

const fetchSchoolData = async (authToken) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}/info`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

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
};

export default schoolService;
