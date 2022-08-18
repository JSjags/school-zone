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
    margin: 0 auto 30px;
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

  header {
    display: flex;
    align-items: center;
    padding: 1rem;
    font-family: var(--garamond);
    gap: 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--translucent-white);
    backdrop-filter: blur(5px);
    border-radius: 5px;

    h1 {
      color: var(--primary-color);
      flex: 1;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      li {
        position: relative;
        display: flex;
        align-items: center;
        list-style-type: none;
        font-size: 1rem;
        font-family: var(--hind);
        transition: all 200ms ease;
        cursor: pointer;

        :hover {
          color: var(--primary-color);
        }
      }
      li:nth-child(1) {
        span {
          position: absolute;
          display: block;
          top: -2rem;
          left: -150%;
          opacity: 0;
          color: var(--primary-color);
          font-size: 0.8em;
          background: var(--primary-color);
          border-radius: 5px;
          padding: 2px 5px;

          ::after {
            position: absolute;
            content: "";
            display: block;
            border-top: 8px solid var(--primary-color);
            border-right: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid transparent;
            border-radius: 3px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -60%;
          }
        }

        :hover span {
          top: -2rem;
          left: -95%;
          color: white;
          opacity: 1;
          transition: all 500ms ease;
        }
      }
      li:nth-child(2) {
        span {
          position: absolute;
          display: block;
          top: -2rem;
          left: -170%;
          opacity: 0;
          color: var(--primary-color);
          font-size: 0.8em;
          background: var(--primary-color);
          border-radius: 5px;
          padding: 2px 5px;

          ::after {
            position: absolute;
            content: "";
            display: block;
            border-top: 8px solid var(--primary-color);
            border-right: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid transparent;
            border-radius: 3px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -60%;
          }
        }

        :hover span {
          top: -2rem;
          left: -128%;
          color: white;
          opacity: 1;
          transition: all 500ms ease;
        }
      }
      li:nth-child(3) {
        span {
          position: absolute;
          display: block;
          top: -2rem;
          left: -120%;
          opacity: 0;
          color: var(--primary-color);
          font-size: 0.8em;
          background: var(--primary-color);
          border-radius: 5px;
          padding: 2px 5px;

          ::after {
            position: absolute;
            content: "";
            display: block;
            border-top: 8px solid var(--primary-color);
            border-right: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid transparent;
            border-radius: 3px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -60%;
          }
        }

        :hover span {
          top: -2rem;
          left: -72%;
          color: white;
          opacity: 1;
          transition: all 500ms ease;
        }
      }
    }
    #sign-out {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      background-color: whitesmoke;
      border: none;
      font-family: var(--hind);
      font-size: 1rem;
      padding: 10px 20px;
      color: var(--deep-gray);
      border-radius: 20px;
      transition: all 300ms ease-in-out;
      cursor: pointer;

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }

  .create-student {
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
    .create-student-button-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5%;
      flex-wrap: wrap;

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border: none;
        height: 100%;
        border-radius: 10px;
        padding: 50px 20px;
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
  .student-avatar {
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
  .available-students {
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
`;
