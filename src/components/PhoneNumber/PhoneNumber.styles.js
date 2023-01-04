import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  caret-color: var(--primary-color);
  width: clamp(200px, 100%, 800px); ;
`;

export const Content = styled.div`
  font-size: 1rem;
  gap: clamp(10px, 3vw, 20px);
  display: flex;
  position: relative;
  z-index: 10;

  #code-box {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 5px;
    border-radius: 5px;
    backdrop-filter: invert(0.3);
    padding: 0 8px 0 10px;
    position: relative;
    background: var(--translucent-white);
    cursor: pointer;
    color: var(--text);
    width: clamp(150px, 25%, 150px);

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
      padding: 0 0 0 10px;
      cursor: pointer;
      outline: none;
      background: inherit;
      color: var(--text);
      border: none;

      :hover {
        box-shadow: none;
      }
    }
  }
  .input-box {
    width: clamp(100px, 80%, 650px);

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
    width: clamp(200px, 100%, 500px);
    height: 200px;
    border-radius: 5px;
    background-color: var(--background);
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.4);
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--secondary-color);
    }
    ::-webkit-scrollbar-corner {
      border-radius: 5px;
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
        color: var(--text);
      }
      #country-name {
        white-space: nowrap;
        text-align: left;
        color: var(--text);
      }

      :hover {
        background-color: var(--primary-color);
        cursor: pointer;
      }
      :hover p {
        color: white;
      }
    }
  }
`;
