import { createSlice } from "@reduxjs/toolkit";

const schoolCredentials = JSON.parse(localStorage.getItem("schoolCredentials"));

const initialState = schoolCredentials
  ? schoolCredentials
  : {
      id: null,
      token: null,
      isLoggedIn: false,
    };

export const schoolAuthSlice = createSlice({
  name: "schoolAuth",
  initialState,
  reducers: {
    loginSchool: (state, action) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSchool: (state) => {
      state.id = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    resetSchoolAuth: (state) => {
      state.id = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSchool, logoutSchool, resetSchoolAuth } =
  schoolAuthSlice.actions;

export default schoolAuthSlice.reducer;
