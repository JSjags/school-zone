import styled, { css } from "styled-components";

export const SwitchWrapper = styled.div`
  width: 40px;
  height: 20px;
  padding: 0 2px;
  border: 1px solid var(--dark-mid-gray);
  border-radius: 25px;
  display: flex;
  ${({ isOn }) =>
    isOn
      ? css`
          justify-content: flex-end;
          background: var(--primary-color);
          box-shadow: inset 1px 1px 3px var(--light-gray);
        `
      : css`
          justify-content: flex-start;
          background: transparent;
        `}
  align-items: center;
  transition: all 200ms linear;
  margin: 10px 5px 10px 0;
  cursor: pointer;
`;
export const SwitchContent = styled.div`
  width: 15px;
  height: 15px;
  ${({ isOn }) =>
    isOn
      ? css`
          background: var(--white);
          border: var(--white);
        `
      : css`
          background: var(--primary-color);
          border: var(--primary-color);
        `}
  transition: all 200ms linear;
  border-radius: 50%;
`;
