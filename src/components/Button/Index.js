import { StyledButton } from "./Button.styles";

const Button = ({ callback, children }) => {
  return (
    <StyledButton as="button" onClick={callback}>
      {children}
    </StyledButton>
  );
};

export default Button;
