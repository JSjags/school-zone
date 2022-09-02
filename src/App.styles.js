import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  ${(props) =>
    props.isLoggedIn === true &&
    css`
      width: 100%;
      display: flex;
      min-height: 100vh;
      background: var(--background);
    `}
`;
