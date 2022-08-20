import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  background: var(--whitesmoke);
  ${(props) =>
    props.isSuccess === false &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
  .saving-success-message {
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: clamp(200px, 40vw, 500px);
    margin: 10px auto 0;
    gap: 5px;
    border: 1px solid green;
    font-family: var(--hind);
    color: green;
    background: rgba(0, 255, 0, 0.3);
    border-radius: 5px;
    font-family: var(--hind);
  }
  .saving-error-message {
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: red;
    width: clamp(200px, 40vw, 500px);
    gap: 5px;
    background: rgba(255, 0, 0, 0.3);
    padding: 5px;
    border: 1px solid red;
    border-radius: 5px;
    font-family: var(--hind);
    margin: 10px auto 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 10px 10px 0;

  #grid-container {
    width: calc(100% - 20px);
    min-height: 600px;
    border-radius: 10px;
    margin: 0 auto 10px;
    position: relative;
    border-radius: 10px;
  }

  #grid-component {
    font-family: var(--garamond);
    width: 100%;
    min-height: 100%;
    position: absolute;
    bottom: 0;
    top: 0;
    box-shadow: 0 10px 20px var(--lightest-gray);
    border-radius: 10px;
    scrollbar-color: var(--primary-color);
    overflow-y: scroll;
    border: 1px solid var(--light-gray);

    ::-webkit-scrollbar {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: var(--whitesmoke);
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      height: 5px;
      background: var(--primary-color);
    }
    ::-webkit-scrollbar-corner {
      width: 40px;
      height: 40px;
    }

    /* Vertical Scrollbar */
    ::-webkit-scrollbar-button:single-button:vertical:decrement {
      background: url("https://th.bing.com/th/id/R.d88a26f4961929012f52d92dedff3512?rik=9lXgpy6CP5uufw&pid=ImgRaw&r=0"),
        rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
    ::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
      background: url("https://th.bing.com/th/id/R.d88a26f4961929012f52d92dedff3512?rik=9lXgpy6CP5uufw&pid=ImgRaw&r=0"),
        var(--primary-color-active);
      border-radius: 50%;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
    ::-webkit-scrollbar-button:single-button:vertical:decrement:active {
      background: url("https://th.bing.com/th/id/R.d88a26f4961929012f52d92dedff3512?rik=9lXgpy6CP5uufw&pid=ImgRaw&r=0"),
        var(--primary-color);
      border-radius: 50%;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
    ::-webkit-scrollbar-button:single-button:vertical:increment {
      background: url("https://cdn.onlinewebfonts.com/svg/img_68483.png"),
        rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
    ::-webkit-scrollbar-button:single-button:vertical:increment:hover {
      background: url("https://cdn.onlinewebfonts.com/svg/img_68483.png"),
        var(--primary-color-active);
      border-radius: 50%;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
    ::-webkit-scrollbar-button:single-button:vertical:increment:active {
      background: url("https://cdn.onlinewebfonts.com/svg/img_68483.png"),
        var(--primary-color);
      border-radius: 50%;
      padding: 1px;
      background-size: 7px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  main {
    flex: 1;
    background: blue;
    border-radius: 10px;
    background: white;
    min-height: 100vh;
    position: relative;
  }
  .create-staff {
    margin-top: 100px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    font-family: var(--hind);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      width: 25%;
    }
    p {
      font-weight: 500;
    }
    .create-staff-button-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5%;
      flex-wrap: wrap;

      button {
        width: clamp(200px, 10vw, 215px);
        height: clamp(130px, 5vh, 190px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border: none;
        margin: 20px;
        border-radius: 10px;
        font-weight: 500;
        font-size: 1rem;
        background: whitesmoke;
        font-family: var(--hind);
        cursor: pointer;
        transition: all 300ms ease;

        span {
          white-space: nowrap;
        }

        :hover {
          background: white;
          box-shadow: 0 5px 10px var(--dark-mid-gray);
        }
      }
    }
  }
  .staff-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--mid-gray);
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 0 0 0 0.5px var(--light-gray);
    transition: all 200ms ease;

    :hover {
      transform: scale(1.2);
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .staff-id {
    padding: 5px;
    color: var(--primary-color);
    align-items: center;
    background-color: var(--whitesmoke);
    border-radius: 10px;
    display: flex;
    gap: 5px;
    width: fit-content;

    span {
      color: var(--secondary-color);
      text-transform: none;
    }
  }
  .available-staffs {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    padding: 20px 10px;

    button {
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
    }
  }

  .instructions-panel {
    background: var(--white);
    border-radius: 10px;
    margin: 30px 10px;
    border: 1px solid var(--light-gray);
    padding: 10px;

    ul {
      padding: 10px 0;
    }

    li {
      list-style-position: inside;
      span {
        font-family: var(--hind);
      }
    }
    li::marker {
      content: "📎 ";
      font-size: 1.2em;
    }

    p.info-notice {
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--primary-color);
      padding-left: 5px;
      margin-top: 20px;

      span {
        font-family: var(--hind);
        color: var(--dark-gray);
        font-size: 0.9rem;
      }
    }
  }
`;
