import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  outline-color: var(--primary-color);
  outline-offset: 2px;
  outline-width: 3px;
  min-width: 300px;
  width: 500px;
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
  }
  ul {
    background-color: whitesmoke;
    border-radius: 5px;
    overflow: hidden;
    margin-top: -20px;
    margin-bottom: 20px;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.3);

    li {
      font-family: var(--hind);
      list-style-type: none;
      padding: 10px;
      transition: all 200ms ease-in-out;

      :hover {
        background: var(--primary-color);
        color: white;
      }
    }
  }
  #institution-list {
    margin-top: 20px;
    position: absolute;
    width: 100%;
  }
`;

export const Content = styled.div`
  position: relative;
`;
