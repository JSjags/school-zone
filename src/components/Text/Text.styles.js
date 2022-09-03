import styled from "styled-components";

export const TextWrapper = styled.input`
  display: block;
  font-size: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  outline-color: var(--primary-color);
  font-family: var(--hind);
  height: 40px;
  outline-offset: 2px;
  outline-width: 3px;
  cursor: pointer;
  width: clamp(240px, 100%, 500px);
  margin-top: 15px;
  margin-bottom: 5px;
  transition: all 200ms ease-in-out;
  backdrop-filter: blur(5px);
  color: var(--text);
  background: var(--translucent-white);

  :hover {
    box-shadow: 0 5px 8px var(--dark-gray);
  }

  :focus {
    background: var(--background);
  }
`;
