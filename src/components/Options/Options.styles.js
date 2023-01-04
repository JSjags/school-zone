import styled, { css } from "styled-components";

export const OptionsWrapper = styled.div`
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  outline-color: var(--primary-color);
  outline-offset: 2px;
  outline-width: 3px;
  ${({ name, value }) =>
    name === "view" || name === "filter" || name === "theme" || name === "posts"
      ? css`
          width: calc(${value.length}ch + 55px);
        `
      : css`
          width: clamp(200px, 100%, 500px);
        `}
  height: 40px;
  position: relative;

  #options-list {
    right: 0;
    position: absolute;
    z-index: 1000;
    ${({ name, value }) =>
      name === "view" ||
      name === "filter" ||
      name === "theme" ||
      name === "posts"
        ? css`
            width: max-content;
            top: 70px;
          `
        : css`
            margin-bottom: 20px;
            top: 70px;
            width: clamp(200px, 100%, 500px); ;
          `}
    background: var(--background);
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid var(--whitesmoke);
    margin-top: -20px;
    box-shadow: 0 7px 10px var(--dark-gray);

    li {
      font-family: var(--hind);
      list-style-type: none;
      padding: 10px;
      transition: all 200ms ease-in-out;
      text-transform: capitalize;
      color: var(--text);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 3px;

      :hover {
        background: var(--primary-color);
        color: white;
      }
    }
  }
`;

export const OptionsContent = styled.div`
  cursor: pointer;
  position: relative;

  input {
    display: block;
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    caret-color: var(--primary-color);
    outline-color: var(--primary-color);
    color: var(--text);
    font-family: var(--hind);
    backdrop-filter: blur(5px);
    height: 40px;
    outline-offset: 2px;
    outline-width: 3px;
    cursor: pointer;
    ${({ name, value }) =>
      name === "view" ||
      name === "filter" ||
      name === "theme" ||
      name === "posts"
        ? css`
            border: 1px solid var(--dark-mid-gray);
            width: calc(${value.length}ch + 45px);
            background: var(--background);
          `
        : css`
            width: clamp(240px, 100%, 500px);
            margin-top: 15px;
            margin-bottom: 5px;
            background: var(--translucent-white);
            backdrop-filter: invert(0.3);
          `}
    transition: all 200ms ease-in-out;
    text-transform: capitalize;
    position: relative;
    z-index: 10;

    :hover {
      box-shadow: 0 5px 8px var(--dark-gray);
    }
    :focus {
      background: var(--background);
    }
  }
`;
