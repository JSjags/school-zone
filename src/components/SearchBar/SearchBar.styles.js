import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  display: grid;
  justify-items: right;
`;

export const SearchBarContent = styled.div`
  width: fit-content;
  padding: 10px 0;
  position: relative;
  padding-right: 20px;

  input {
    padding: 5px 0;
    border: none;
    font-family: var(--hind);
    font-size: clamp(1rem, 1vw, 1.1rem);
    outline: none;

    :focus + .underline {
      height: 2px;
    }
    :focus + .underline::after {
      width: 100%;
    }
  }

  .underline {
    display: block;
    height: 1px;
    width: 100%;
    background: var(--dark-mid-gray);
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 500ms ease;

    ::after {
      content: "";
      display: block;
      background: var(--primary-color);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 100%;
      transition: all 500ms cubic-bezier(1, 0, 0, 1);
    }
  }
`;