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

  #code-box {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 5px;
    flex: 25%;
    background: whitesmoke;
    border-radius: 5px;
    padding: 0 8px 0 10px;
    position: relative;
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
    left: 0;
    width: fit-content;
    height: 200px;
    border-radius: 5px;
    overflow-y: scroll;
    background-color: white;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.4);

    ::-webkit-scrollbar {
      width: 1.4vw;
      height: 3.3vh;
    }
    ::-webkit-scrollbar-track {
      background-color: whitesmoke;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--primary-color);
    }
    ::-webkit-scrollbar-button:single-button:decrement {
      background: url("https://th.bing.com/th/id/R.d88a26f4961929012f52d92dedff3512?rik=9lXgpy6CP5uufw&pid=ImgRaw&r=0"),
        rgba(0, 0, 0, 0.3);
      border-radius: 0 5px 5px 5px;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
    ::-webkit-scrollbar-button:single-button:increment {
      background: url("https://cdn.onlinewebfonts.com/svg/img_68483.png"),
        rgba(0, 0, 0, 0.3);
      border-radius: 5px 5px 5px 0;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
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
