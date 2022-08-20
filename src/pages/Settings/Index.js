import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import { setCurrentPage } from "../../features/config/configData";

import { Wrapper, Content } from "./Settings.styles";
import PageHeader from "../../components/PageHeader/Index";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCurrentPage("settings"));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <main>
          <PageHeader title="Settings" />
        </main>
      </Content>
    </Wrapper>
  );
};

export default Settings;
