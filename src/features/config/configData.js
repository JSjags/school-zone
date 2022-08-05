import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditProfileModalOpen: false,
  formToShow: null,
  curentPage: null,
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
    },
    showForm: (state, action) => {
      state.formToShow = action.payload;
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
} = configSlice.actions;

export default configSlice.reducer;
