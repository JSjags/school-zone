import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--dark-gray);
  backdrop-filter: blur(5px);
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;

  .close-btn {
    display: flex;
    justify-content: right;

    svg:hover {
      cursor: pointer;
      fill: var(--primary-color);
      transform: scale(1.1);
    }
  }
`;