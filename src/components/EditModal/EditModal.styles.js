import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--dark-gray);
  backdrop-filter: blur(5px);
  padding-bottom: 20px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  overflow-x: hidden;
  margin-bottom: 20px;

  .close-btn-cont {
    display: flex;
    justify-content: right;
  }
  .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--translucent-white);
    border-radius: 50%;
    width: clamp(40px, calc(40px + 1vw), 60px);
    height: clamp(40px, calc(40px + 1vw), 60px);
    backdrop-filter: invert(0.3);
    border: 1px solid var(--dark-mid-gray);
    margin-bottom: 20px;
    padding: 5px;
    cursor: pointer;
    position: relative;
    transition: all 200ms linear;

    :hover {
      transform: scale(1.05);
      background: var(--primary-color);
      border: 1px solid var(--transparent);
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
    }
  }
`;
