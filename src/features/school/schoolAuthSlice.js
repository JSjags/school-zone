import { createSlice } from "@reduxjs/toolkit";

const schoolCredentials = JSON.parse(localStorage.getItem("schoolCredentials"));

const initialState = schoolCredentials
  ? schoolCredentials
  : {
      schoolId: null,
      token: null,
      isLoggedIn: false,
    };

export const schoolAuthSlice = createSlice({
  name: "schoolAuth",
  initialState,
  reducers: {
    loginSchool: (state, action) => {
      state.schoolId = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSchool: (state) => {
      state.schoolId = "";
      state.token = "";
      state.isLoggedIn = false;
    },
    resetSchoolAuth: (state) => {
      state.schoolId = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { loginSchool, logoutSchool, resetSchoolAuth } =
  schoolAuthSlice.actions;

export default schoolAuthSlice.reducer;
