import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  outline-color: var(--primary-color);
  outline-offset: 2px;
  outline-width: 3px;
  width: clamp(200px, 100%, 800px);
  height: 40px;
  position: relative;
  margin-bottom: 20px;

  :focus {
    outline-color: var(--primary-color);
    outline-offset: 2px;
    outline-width: 3px;
  }
  input {
    font-family: var(--hind);
    cursor: pointer;
    background: var(--translucent-white);
    /* backdrop-filter: invert(0.3); */

    color: var(--text);
  }
  ul {
    background: var(--background);
    border-radius: 5px;
    overflow: hidden;
    margin-top: -20px;
    margin-bottom: 20px;
    box-shadow: 0 7px 10px var(--dark-gray);

    li {
      font-family: var(--hind);
      list-style-type: none;
      padding: 10px;
      transition: all 200ms ease-in-out;
      cursor: pointer;
      color: var(--text);

      :hover {
        background: var(--primary-color);
        color: var(--white);
      }
    }
  }
  #institution-list {
    margin-top: 20px;
    position: absolute;
    z-index: 10;
    width: 100%;
  }
`;

export const Content = styled.div`
  position: relative;
`;
