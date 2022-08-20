import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditProfileModalOpen: false,
  formToShow: null,
  curentPage: null,
  studentImageUrl: null,
  staffImageUrl: null,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    openEditProfileModal: (state) => {
      state.isEditProfileModalOpen = true;
    },
    closeEditProfileModal: (state) => {
      state.isEditProfileModalOpen = false;
      state.formToShow = null;
      state.studentImageUrl = null;
    },
    showForm: (state, action) => {
      state.formToShow = action.payload;
    },
    setStudentImgUrl: (state, action) => {
      state.studentImageUrl = action.payload;
    },
    setStaffImgUrl: (state, action) => {
      state.staffImageUrl = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  openEditProfileModal,
  closeEditProfileModal,
  showForm,
  setCurrentPage,
  setStudentImgUrl,
  setStaffImgUrl,
} = configSlice.actions;

export default configSlice.reducer;
