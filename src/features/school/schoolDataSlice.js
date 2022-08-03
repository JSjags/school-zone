import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import schoolService from "./schoolService";

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
};

export const fetchSchoolData = createAsyncThunk(
  "schoolData/fetchSchoolData",
  async (authToken, thunkAPI) => {
    try {
      const schoolData = await schoolService.fetchSchoolData(authToken);
      return await thunkAPI.fulfillWithValue(schoolData);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const { setSchoolData, resetSchoolData } = schoolDataSlice.actions;

export default schoolDataSlice.reducer;
