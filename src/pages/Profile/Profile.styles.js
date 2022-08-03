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
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 10px 10px 0;
  width: 100%;

  main {
    flex: 1;
    background: blue;
    border-radius: 10px;
    background: white;
    min-height: 100vh;
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

  .profile-upper-section {
  }
  .profile-cover {
    width: 100%;
    height: 200px;
    background-color: var(--dark-mid-gray);
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .profile-pic {
    width: 90%;
    height: 200px;
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    gap: 30px;
    transform: translateY(-60%);
    position: relative;
    z-index: 100;

    ::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: block;
      position: absolute;
      z-index: -10;
      top: 60%;
      left: 0;
      transform: translate(-100%, -100%);
      box-shadow: 5px 5px 0 var(--white);
    }

    ::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: block;
      position: absolute;
      z-index: -10;
      top: 60%;
      left: 209px;
      transform: translate(-100%, -100%);
      box-shadow: -5px 5px 0 var(--white);
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: var(--mid-gray);
      border: 2px solid var(--white);
    }
  }
  .profile-name {
    h2 {
      font-family: var(--garamond);
      color: var(--primary-color);
    }
    p {
      font-family: var(--hind);
      color: var(--dark-gray);
    }
  }

  .profile-lower-section {
    width: 90%;
    margin: 0 auto;
    min-height: 60vh;
    background: white;
    transform: translate(0, -100px);

    .sub-section:first-child {
      margin-bottom: 30px;
    }
    .sub-section {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 10px 20px;
      border-radius: 10px;
      box-shadow: 0 7px 20px var(--mid-gray);

      h2 {
        color: var(--primary-color);
        font-family: var(--garamond);
        margin-bottom: 10px;
      }
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 20px;
        font-size: 1.2rem;
        text-align: right;

        label {
          color: var(--primary-color);
          display: inline;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 5rem;
          text-align: center;
        }

        input {
          color: var(--dark-mid-gray);
          padding: 10px 5px;
          font-size: 1rem;
          background-color: whitesmoke;
          border: none;
          border-radius: 10px;
          font-family: var(--hind);
          width: 280px;

          :focus {
            border: none;
            background: whitesmoke;
            outline: none;
          }

          ::selection {
            background: transparent;
          }
        }
      }
      .profile-id-btn {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        padding: 10px;
        font-size: 1.2rem;
        font-family: var(--garamond);
        color: var(--primary-color);
        border-radius: 10px;
        border: none;
        cursor: pointer;
        background: white;
        transition: all 0.3s ease;

        span {
          position: relative;

          ::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            width: 0;
            height: 5px;
            border-radius: 4px;
            background: var(--primary-color);
            transition: all 200ms ease;
          }
        }

        :hover span::after {
          background: var(--secondary-color);
          width: 100%;
        }
      }
      .edit-details-cont {
        display: grid;
      }
      .edit-details {
        width: fit-content;
        justify-self: center;
        align-self: flex-end;
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
  }
`;
