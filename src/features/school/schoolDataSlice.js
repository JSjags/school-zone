import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import schoolService from "./schoolService";

const initialState = {
  data: {},
  messages: {
    inbox: [],
    outbox: [],
  },
  isLoading: false,
  isSettingsLoading: false,
  isPostsLoading: false,
  isSuccess: false,
  isSettingsSuccess: false,
  isPostsSuccess: false,
  isError: false,
  isSettingsError: true,
  isPostsError: false,
  message: null,
  settingsMessage: null,
  postsMessage: null,
  pageNumber: null,
  postsToDelete: [],
  postId: null,
};

export const fetchSchoolData = createAsyncThunk(
  "schoolData/fetchSchoolData",
  async (authToken, thunkAPI) => {
    try {
      const currentPage = thunkAPI.getState().config.currentPage;
      const schoolData = await schoolService.fetchSchoolData(
        authToken,
        currentPage
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

export const fetchSchoolPosts = createAsyncThunk(
  "schoolData/fetchSchoolPosts",
  async (obj, thunkAPI) => {
    try {
      const postsData = await schoolService.fetchSchoolPosts(obj);
      return await thunkAPI.fulfillWithValue(postsData);
    } catch (error) {
      const message =
        error.name ||
        error.response.data.message ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const setMessagesAsync = createAsyncThunk(
  "schoodata/setMessageAsync",
  async (obj, { dispatch }) => {
    dispatch(setMessages({ type: obj.type, results: obj.results }));
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
    setPostsToDelete: (state, action) => {
      state.postsToDelete = action.payload;
    },
    resetPostsToDelete: (state) => {
      state.postsToDelete = [];
    },
    setPostToShow: (state, action) => {
      state.postId = action.payload;
    },
    resetPostToShow: (state) => {
      state.postId = null;
    },
    setMessages: (state, action) => {
      state.messages[action.payload.type] = [
        ...state.messages[action.payload.type],
        ...action.payload.results,
      ];
    },
    resetMessages: (state) => {
      state.messages = {
        inbox: [],
        outbox: [],
      };
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
        state.data = action.payload ? action.payload : {};
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
      // School Posts
      .addCase(fetchSchoolPosts.pending, (state) => {
        state.isPostsLoading = true;
        state.isPostsSuccess = false;
        state.isPostsError = false;
        state.postsMessage = null;
      })
      .addCase(fetchSchoolPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isPostsLoading = false;
        state.isPostsSuccess = true;
        state.isPostsError = false;
        state.postsMessage = null;
        state.pageNumber = action.payload.pageNumber;
      })
      .addCase(fetchSchoolPosts.rejected, (state, action) => {
        state.isPostsLoading = false;
        state.isPostsError = true;
        state.isPostsSuccess = false;
        state.postsMessage = action.payload;
      })
      // School Settings
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

export const {
  setSchoolData,
  resetSchoolData,
  setPostsToDelete,
  resetPostsToDelete,
  setPostToShow,
  resetPostToShow,
  setMessages,
  resetMessages,
} = schoolDataSlice.actions;

export default schoolDataSlice.reducer;
