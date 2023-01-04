import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  ${(props) =>
    props.isSuccess === false &&
    css`
      display: flex;
      align-items: flex-start;
      justify-content: center;
    `};

  .publish-success-message {
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: clamp(200px, 40vw, 500px);
    margin: 10px auto 0;
    gap: 5px;
    border: 1px solid var(--white);
    font-family: var(--hind);
    color: var(--white);
    background: var(--lime);
    border-radius: 5px;
    font-family: var(--hind);
    position: absolute;
    left: 30%;
    top: 20px;
    z-index: 10000;
  }
  .publish-error-message {
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: var(--white);
    width: clamp(200px, 40vw, 500px);
    gap: 5px;
    background: var(--red);
    padding: 5px;
    border: 1px solid var(--white);
    border-radius: 5px;
    font-family: var(--hind);
    margin: 10px auto 0;
    position: absolute;
    left: 30%;
    top: 20px;
    z-index: 10000;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  width: 100%;

  main {
    flex: 1;
    border-radius: 10px;
    background: var(--background);
    width: 0;
  }

  #editor {
    border-color: var(--dark-mid-gray);
    border-radius: 10px;
    min-height: 70vh;
  }
  .dx-htmleditor-content {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1.42;
    width: 100%;
    outline: 0;
    overflow-y: auto;
    padding: 12px 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: var(--text);
  }
  .button-holder {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 60px;
    margin: 30px 0 0;
    padding: 0 20px;
  }
  .details {
    margin: 20px;
  }
  .label {
    font-weight: 700;
    font-size: 1rem;
    -webkit-transform: translateY(100px);
    -ms-transform: translateY(100px);
    display: block;
    transform: translateY(10px);
  }
  .widget-container {
    padding: 20px;
  }
  .instructions-panel {
    background: var(--background);
    border-radius: 10px;
    padding: 10px;
    width: 100%;

    p.info-notice {
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--primary-color);
      padding-left: 10px;

      span {
        font-family: var(--hind);
        color: var(--text);
        filter: invert(40%);
        font-size: 0.9rem;
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: var(--text);
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;
`;
export const ErrorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: red;
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;

  .button-group {
    display: flex;
    align-items: center;
    gap: 40px;

    button {
      border: none;
      padding: 0.5rem 1rem;
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      font-size: 1rem;
      border-radius: 1.5rem;
      font-family: var(--hind);
      cursor: pointer;
      transition: all 300ms ease-in-out;
      color: var(--text);

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
      }
    }
  }
`;
