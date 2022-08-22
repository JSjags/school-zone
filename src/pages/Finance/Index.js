import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import {
  openEditProfileModal,
  setCurrentPage,
  showForm,
} from "../../features/config/configData";

import { BsPersonPlus } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

import { Wrapper, Content } from "./Finance.styles";
import EditModal from "../../components/EditModal/Index";
import PageHeader from "../../components/PageHeader/Index";

import noFinanceSvg from "../../assets/no-financial-data.svg";

const Finance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { financialData } = useSelector((state) => state.schoolData.data);
  const { isEditProfileModalOpen } = useSelector((state) => state.config);

  const handleCreateFinance = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
    if (schoolData.templates?.finance === undefined) {
      dispatch(openEditProfileModal());
      return dispatch(showForm("createFinance"));
    }

    dispatch(openEditProfileModal());
    dispatch(showForm("recordFinance"));
  };

  const handleCreateTemplate = () => {
    dispatch(openEditProfileModal());
    dispatch(showForm("createFinanceTemplate"));
  };

  useEffect(() => {
    dispatch(setCurrentPage("finance"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSchoolData(schoolToken));
  }, []);

  return (
    <Wrapper>
      {isEditProfileModalOpen && <EditModal />}
      <Content>
        <main>
          <PageHeader title="Finance" />
          {financialData === undefined && (
            <div className="create-finance">
              <img alt="add-student" src={noFinanceSvg}></img>
              <p>No financial data found.</p>
              <div className="create-finance-button-group">
                <button onClick={handleCreateFinance}>
                  <BsPersonPlus style={{ fontSize: "2rem" }} />
                  <span>Record Revenue | Expense</span>
                </button>
                <button onClick={handleCreateTemplate}>
                  <IoCreateOutline style={{ fontSize: "2rem" }} />
                  <span>Create Financial Template</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </Content>
    </Wrapper>
  );
};

export default Finance;
