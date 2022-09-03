import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import schoolService from "./schoolService";

const initialState = {
  data: {},
  isLoading: false,
  isSettingsLoading: false,
  isSuccess: false,
  isSettingsSuccess: false,
  isError: false,
  isSettingsError: true,
  message: null,
  settingsMessage: null,
};

export const fetchSchoolData = createAsyncThunk(
  "schoolData/fetchSchoolData",
  async (authToken, thunkAPI) => {
    try {
      const controller = thunkAPI.getState().schoolData.controller;
      const schoolData = await schoolService.fetchSchoolData(
        authToken,
        controller
      );
      return await thunkAPI.fulfillWithValue(schoolData);
    } catch (error) {
      if (!error.name === "CanceledError") {
        const message =
          error.name ||
          error.response.data.message ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const fetchSchoolSettings = createAsyncThunk(
  "config/fetchSchoolSettings",
  async (token, thunkAPI) => {
    try {
      const settingsData = await schoolService.fetchSchoolSettings(token);
      return await thunkAPI.fulfillWithValue(settingsData);
    } catch (error) {
      const message =
        error.name ||
        error.response.data.message ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// export const cancelFetchSchoolData = createAsyncThunk(
//   "schoolData/cancelFetchSchoolData",
//   async () => {
//     controller.abort();
//   }
// );

export const schoolDataSlice = createSlice({
  name: "schoolData",
  initialState,
  reducers: {
    setSchoolData: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
    },
    resetSchoolData: (state) => {
      state.data = {};
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchoolData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(fetchSchoolData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = null;
      })
      .addCase(fetchSchoolData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(fetchSchoolSettings.pending, (state) => {
        state.isSettingsLoading = true;
        state.isSettingsError = false;
        state.isSettingsSuccess = false;
      })
      .addCase(fetchSchoolSettings.fulfilled, (state, action) => {
        state.data = { ...state.data, settings: action.payload.data };
        state.isSettingsLoading = false;
        state.isSettingsError = false;
        state.isSettingsSuccess = true;
      })
      .addCase(fetchSchoolSettings.rejected, (state, action) => {
        state.isSettingsLoading = false;
        state.isSettingsSuccess = false;
        state.isSettingsError = true;
        state.settingsMessage = action.payload;
      });
  },
});

export const { setSchoolData, resetSchoolData } = schoolDataSlice.actions;

export default schoolDataSlice.reducer;
