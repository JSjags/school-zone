import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  background: var(--background);
  ${(props) =>
    props.isSuccess === false &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  width: 100%;

  main {
    flex: 1;
    background: blue;
    border-radius: 10px;
    background: var(--background);
    border: 1px solid var(--dark-mid-gray);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;
    background: var(--background);

    img {
      width: 100px;
    }
    p {
      font-family: var(--hind);
      color: var(--text);
    }
  }

  .settings-section {
    padding: clamp(10px, 1vw, 20px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }
  .section-header {
    font-weight: 600;
    margin-bottom: 5px;
  }
  .setting-item {
    width: clamp(240px, 100%, 1920px);
    border-radius: 10px;
    box-shadow: 0 3px 10px var(--dark-gray);
    border: 1px solid var(--dark-mid-gray);
    display: flex;
    align-items: flex-start;
    min-height: 100px;
    padding: 10px 0;
  }
  .setting-icon {
    width: clamp(20px, 5%, 40px);
    margin: 0 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    color: var(--primary-color);
    font-size: clamp(1.4rem, 1vw, 1.4rem);
    margin: 15px 5px;

    svg {
      width: clamp(15px, 2%, 20px);
      height: clamp(15px, 2%, 20px);
    }
  }
  .setting-content {
    width: 100%;
  }
  .setting-title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px 10px;
    justify-content: space-between;
    padding: 0 10px 0 0;
    background: var(--background);
    border-radius: 10px;

    h3 {
      font-size: clamp(1rem, 2vw, 1.2rem);
      white-space: nowrap;
      font-weight: 400;
      flex: 1;
    }
  }
  .setting-info {
    font-size: clamp(0.6em, calc(0.8em + 0.5vw), 0.8em);
    border-radius: 10px;
    color: var(--text);
    padding: 0 10px 10px;
    font-family: var(--hind);
  }
  .toast-item {
    display: grid;
  }
  .page-results-warning {
    width: fit-content;
    padding: 5px 10px;
    background: var(--red);
    color: var(--white);
    border-radius: 5px;
    font-family: var(--hind);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-self: right;
  }
  .settings-error {
    width: fit-content;
    padding: 5px 10px;
    background: var(--red);
    color: var(--white);
    border-radius: 5px;
    font-family: var(--hind);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-self: right;
  }
  .settings-success {
    width: fit-content;
    padding: 5px 10px;
    background: var(--green);
    color: var(--white);
    border-radius: 5px;
    font-family: var(--hind);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-self: right;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 3px 10px var(--dark-gray);
  }
  .save-change-button {
    border: 1px solid var(--dark-mid-gray);
    background: var(--body);
    width: fit-content;
    padding: 10px;
    box-shadow: 0 3px 10px var(--dark-gray);
    color: var(--text);
    border-radius: 5px;
    font-family: var(--hind);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-self: right;
    cursor: pointer;
    transition: background, border, color, filter 300ms linear;
    position: relative;

    :hover {
      background: var(--primary-color);
      border: 1px solid var(--transparent);
      color: var(--white);
    }
  }
  .save-change-button:disabled {
    filter: grayscale(0.5);
    cursor: not-allowed;
    pointer-events: none;
  }
  .url-sample {
    font-family: var(--hind);
    border-radius: 5px 5px 10px 0;
    padding: 5px 10px;
    backdrop-filter: invert(0.3);
    color: var(--text);
    font-size: clamp(0.6em, calc(0.8em + 0.5vw), 0.8em);
  }
`;
