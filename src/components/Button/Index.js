import { StyledButton } from "./Button.styles";

const Button = ({ status, isSelected, callback, children }) => {
  return (
    <StyledButton
      status={status}
      isSelected={isSelected}
      as="button"
      onClick={callback}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
