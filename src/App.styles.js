import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  ${(props) =>
    props.isLoggedIn === true &&
    css`
      width: clamp(200px, 100%, 1560px);
      margin: 0 auto;
      display: flex;
      min-height: 100vh;
      background: var(--background);
      position: relative;
      top: 0;
      left: 0;
      z-index: 10;
    `}
`;
