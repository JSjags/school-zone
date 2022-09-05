import { useDispatch, useSelector } from "react-redux";
import {
  openEditProfileModal,
  showForm,
} from "../../features/config/configData";
import { fetchSchoolSettings } from "../../features/school/schoolDataSlice";
import { SwitchContent, SwitchWrapper } from "./Switch.styles";

const Switch = ({ isOn, setIsOn, name, callback }) => {
  const dispatch = useDispatch();

  const { token: schoolToken } = useSelector((state) => state.schoolAuth);

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
    dispatch(fetchSchoolSettings(schoolToken));
  };
  return (
    <SwitchWrapper as="div" onClick={handleClick} isOn={isOn}>
      <SwitchContent isOn={isOn} />
    </SwitchWrapper>
  );
};

export default Switch;
