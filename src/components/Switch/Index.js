import { useDispatch } from "react-redux";
import {
  openEditProfileModal,
  showForm,
} from "../../features/config/configData";
import { SwitchContent, SwitchWrapper } from "./Switch.styles";

const Switch = ({ isOn, setIsOn, name, callback }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOn((prev) => {
      if (name === "schoolSlug" && !prev[name] === false) {
        dispatch(openEditProfileModal());
        dispatch(showForm("deleteSlug"));
      }
      return {
        ...prev,
        [name]: !prev[name],
      };
    });
  };
  return (
    <SwitchWrapper as="div" onClick={handleClick} isOn={isOn}>
      <SwitchContent isOn={isOn} />
    </SwitchWrapper>
  );
};

export default Switch;
