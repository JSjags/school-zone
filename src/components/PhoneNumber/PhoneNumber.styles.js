import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  min-width: 300px;
  width: 500px;
`;

export const Content = styled.div`
  font-size: 1rem;
  gap: 20px;
  display: flex;
  position: relative;
  z-index: 10;

  #code-box {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 5px;
    flex: 25%;
    border-radius: 5px;
    backdrop-filter: invert(0.3);
    padding: 0 8px 0 10px;
    position: relative;
    background: var(--translucent-white);
    cursor: pointer;

    :hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    }

    img {
      width: 25px;
      border-radius: 3px;
    }
    #country-code {
      width: 60%;
      margin-bottom: 0;
      padding: 0;
      cursor: pointer;
      outline: none;
      background: var(--translucent-white);
      backdrop-filter: invert(0.5);
      border: 1px solid transparent;

      :hover {
        box-shadow: none;
      }
    }
  }
  .input-box {
    width: 75%;

    #phone {
      width: 100%;
    }
  }
  #phone {
    width: 80%;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: textfield;
      appearance: none;
    }
  }

  #country-options {
    position: absolute;
    bottom: -210px;
    z-index: 100000;
    left: 0;
    width: fit-content;
    height: 200px;
    border-radius: 5px;
    overflow-y: scroll;
    background-color: var(--background);
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.4);

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background-color: var(--background);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--secondary-color);
    }

    .country-flag {
      padding-bottom: 5px;
      display: flex;
      width: 100%;
      align-items: center;
      padding: 5px;
      gap: 5px;
      transition: all 200ms ease-in-out;

      #country-dial-code {
        width: 40px;
      }
      #country-name {
        white-space: nowrap;
        text-align: left;
      }

      :hover {
        background-color: var(--primary-color);
        color: white;
        cursor: pointer;
      }
    }
  }
`;
