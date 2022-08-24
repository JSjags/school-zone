import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  gap: 5px;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  border: none;
  align-items: center;
  background: white;
  border: 1px solid var(--light-gray);
  cursor: pointer;
  transition: all 300ms ease;

  :hover {
    background-color: white;
    color: var(--primary-color);
    box-shadow: 0 4px 10px var(--primary-color);
    border: 1px solid transparent;
    transform: scale(1.05);
  }

  span {
    font-size: clamp(1rem, 1vw, 1.2rem);
    font-weight: 500;
    font-family: var(--hind);
  }
`;
