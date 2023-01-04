import styled, { css } from "styled-components";

export const NumberWrapper = styled.input`
  display: block;
  font-size: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  outline-color: var(--primary-color);
  font-family: var(--hind);
  backdrop-filter: blur(5px);
  height: 40px;
  outline-offset: 2px;
  outline-width: 3px;
  cursor: pointer;
  width: clamp(240px, 100%, 500px);
  /* margin-top: 15px; */
  margin-right: 5px;
  margin-bottom: 5px;
  transition: all 200ms ease-in-out;
  color: var(--text);

  ${({ name, value }) =>
    name === "paginationResults"
      ? css`
          border: 1px solid var(--dark-mid-gray);
          width: calc(${value.toString().length}ch + 45px);
          background: var(--background);
        `
      : css`
          width: clamp(240px, 100%, 500px);
          margin-top: 15px;
          margin-bottom: 5px;
          background: var(--background);
          backdrop-filter: invert(0.3);
        `}

  :hover {
    box-shadow: 0 5px 8px var(--dark-gray);
  }

  :focus {
    background: var(--background);
  }

  ::-webkit-inner-spin-button {
    appearance: none;
  }
`;
