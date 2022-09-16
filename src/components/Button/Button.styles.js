import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  gap: 5px;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  border: none;
  align-items: center;
  background: var(--background);
  color: var(--text);
  border: 1px solid var(--dark-mid-gray);
  cursor: pointer;
  transition: all 300ms ease;

  ${(props) =>
    props.isSelected
      ? css`
          background: var(--red);

          :hover {
            background-color: var(--white);
            color: var(--red);
            box-shadow: 0 4px 10px var(--dark-gray);
            border: 1px solid transparent;
            transform: scale(1.05);
          }
        `
      : css`
          background: var(--background);

          :hover {
            background-color: var(--primary-color);
            color: var(--white);
            box-shadow: 0 4px 10px var(--dark-gray);
            border: 1px solid transparent;
            transform: scale(1.05);
          }
        `};

  ${(props) =>
    props.status
      ? css`
          background: var(--background);
          color: var(--lime);
          border: 1px solid var(--lime);

          :hover {
            background-color: var(--lime);
            border: 1px solid var(--lime);
            color: var(--white);
            box-shadow: 0 4px 10px var(--dark-gray);
            border: 1px solid transparent;
            transform: scale(1.05);
          }
        `
      : undefined}

  span {
    font-size: clamp(1rem, 1vw, 1.2rem);
    font-weight: 500;
    font-family: var(--hind);
  }
`;
