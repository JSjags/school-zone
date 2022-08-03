import { useSelector, useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { Wrapper, Content } from "./EditProfile.styles";

import { closeEditProfileModal } from "../../features/config/configData";
import Form from "../Form/Index";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { formToShow } = useSelector((state) => state.config);

  const handleEditProfileModal = () => {
    dispatch(closeEditProfileModal());
    formToShow === "changeCoverPhoto" && localStorage.removeItem("coverPhoto");
    formToShow === "changeAvatar" && localStorage.removeItem("avatar");
  };
  return (
    <Wrapper>
      <Content>
        <div className="close-btn">
          <AiFillCloseCircle
            style={{
              fontSize: "3rem",
              color: "var(--white)",
              marginRight: "10px",
              marginTop: "10px",
              transition: "all 200ms ease",
            }}
            onClick={handleEditProfileModal}
          />
        </div>
        <Form />
      </Content>
    </Wrapper>
  );
};

export default EditProfile;
