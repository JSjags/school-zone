import { SwitchContent, SwitchWrapper } from "./Switch.styles";

const Switch = ({ isOn, setIsOn, name }) => {
  const handleClick = () => {
    setIsOn((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  return (
    <SwitchWrapper as="div" onClick={handleClick} isOn={isOn}>
      <SwitchContent isOn={isOn} />
    </SwitchWrapper>
  );
};

export default Switch;
