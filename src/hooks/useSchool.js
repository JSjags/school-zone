import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchoolData } from "../features/school/schoolDataSlice";

const useSchool = () => {
  const dispatch = useDispatch();

  let controller = useMemo(() => new AbortController(), []);
  const signal = useMemo(() => controller.signal, [controller]);

  const authToken = useSelector((state) => state.schoolAuth.token);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const { data, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.schoolData
  );

  useEffect(() => {
    dispatch(fetchSchoolData({ authToken, signal })).then((res) =>
      console.log(res)
    );

    // return () => controller.abort(signal);
  }, [authToken, signal, dispatch, controller]);

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    message,
    authToken,
    isEditProfileModalOpen,
  };
};

export default useSchool;
