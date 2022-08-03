import { configureStore } from "@reduxjs/toolkit";
import schoolAuthReducer from "../features/school/schoolAuthSlice";
import schoolDataReducer from "../features/school/schoolDataSlice";
import configReducer from "../features/config/configData";

export const store = configureStore({
  reducer: {
    schoolAuth: schoolAuthReducer,
    schoolData: schoolDataReducer,
    config: configReducer,
  },
});
