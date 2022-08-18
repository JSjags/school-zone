import styled from "styled-components";

export const OptionsWrapper = styled.div`
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  outline-color: var(--primary-color);
  outline-offset: 2px;
  outline-width: 3px;
  min-width: 300px;
  width: clamp(240px, 100%, 500px);
  height: 40px;
  margin-bottom: 20px;
  position: relative;

  #options-list {
    top: 70px;
    position: absolute;
    z-index: 1000;
    width: 100%;
    background: var(--white);
    border-radius: 5px;
    overflow: hidden;
    margin-top: -20px;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.3);

    li {
      font-family: var(--hind);
      list-style-type: none;
      padding: 10px;
      transition: all 200ms ease-in-out;
      text-transform: capitalize;

      :hover {
        background: var(--primary-color);
        color: white;
      }
    }
  }
`;

export const OptionsContent = styled.div`
  cursor: pointer;

  input {
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
    background: var(--whitesmoke);
    margin-top: 15px;
    margin-bottom: 5px;
    transition: all 200ms ease-in-out;
    text-transform: capitalize;
    position: relative;
    z-index: 10;

    :hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    }
    :focus {
      background: var(--white);
    }
  }
`;
