import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { resetSchoolAuth } from "../../features/school/schoolAuthSlice";
import {
  fetchSchoolData,
  resetSchoolData,
} from "../../features/school/schoolDataSlice";
import { setCurrentPage } from "../../features/config/configData";

import { BsPersonPlus } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

import { Wrapper, Content } from "./Finance.styles";
import PageHeader from "../../components/PageHeader/Index";
import noFinanceSvg from "../../assets/no-financial-data.svg";

const Finance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { financialData } = useSelector((state) => state.schoolData.data);

  useEffect(() => {
    dispatch(setCurrentPage("finance"));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <main>
          <PageHeader title="Finance" />
          {financialData === undefined && (
            <div className="create-finance">
              <img alt="add-student" src={noFinanceSvg}></img>
              <p>No financial data found.</p>
              <div className="create-finance-button-group">
                <button>
                  <BsPersonPlus style={{ fontSize: "2rem" }} />
                  <span>Register Staff</span>
                </button>
                <button>
                  <IoCreateOutline style={{ fontSize: "2rem" }} />
                  <span>Create Register Template</span>
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
