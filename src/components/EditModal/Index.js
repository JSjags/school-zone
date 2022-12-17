import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { Wrapper, Content } from "./EditModal.styles";

import { closeEditProfileModal } from "../../features/config/configData";
import Form from "../Form/Index";
import { resetMessages } from "../../features/school/schoolDataSlice";

const EditModal = () => {
  const dispatch = useDispatch();
  const { formToShow } = useSelector((state) => state.config);

  const handleEditProfileModal = () => {
    dispatch(closeEditProfileModal());
    dispatch(resetMessages());
    formToShow === "changeCoverPhoto" && localStorage.removeItem("coverPhoto");
    formToShow === "changeAvatar" && localStorage.removeItem("avatar");
  };
  return (
    <Wrapper>
      <Content>
        <div className="close-btn-cont">
          <div
            className="close-btn"
            style={{
              fontSize: "3rem",
              color: "var(--white)",
              marginRight: "10px",
              marginTop: "10px",
              transition: "all 200ms ease",
            }}
            onClick={handleEditProfileModal}
          >
            <FaTimes
              style={{
                fontSize: "clamp(1rem, calc(1rem + 1vw), 3rem)",
                color: "var(--white)",
                transition: "all 200ms ease",
              }}
              onClick={handleEditProfileModal}
            />
          </div>
        </div>
        <Form />
      </Content>
    </Wrapper>
  );
};

export default EditModal;
