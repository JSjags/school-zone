import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditProfileModalOpen: false,
  formToShow: null,
  currentPage: null,
  studentImageUrl: null,
  staffImageUrl: null,
  financeStatementId: null,
  isDashboardMenuOpen: window.innerWidth > 768,
  isHomeMenuOpen: window.innerWidth > 768,
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
      state.financeStatementId = null;
      document.body.style.overflowY = "scroll";
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
    setFinanceStatementId: (state, action) => {
      state.financeStatementId = action.payload;
    },
    setSchoolSettings: (state, action) => {
      state.settings = action.payload;
    },
    setDashboardMenu: (state, action) => {
      state.isDashboardMenuOpen = !state.isDashboardMenuOpen;
    },
    setHomeMenu: (state, action) => {
      state.isHomeMenuOpen = !state.isHomeMenuOpen;
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
  setFinanceStatementId,
  setDashboardMenu,
  setHomeMenu,
} = configSlice.actions;

export default configSlice.reducer;
