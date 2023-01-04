import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  background: var(--background);
  ${(props) =>
    props.isSuccess === false &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  width: 100%;

  main {
    flex: 1;
    border-radius: 0 0 10px 10px;
    background: var(--background);
    border: 1px solid var(--dark-mid-gray);
    min-height: 100vh;
    width: 100%;
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
      transform: translate(-93%, -97%);
      box-shadow: 5px 5px 0 var(--background);
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
      transform: translate(-100%, -97%);
      box-shadow: -5px 5px 0 var(--background);
    }

    .profile-pic-img-cont {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 2px solid var(--white);
      background: var(--white);
    }
    .profile-pic-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--white);
      display: block;
      object-fit: cover;
    }
  }
  .profile-name {
    h2 {
      font-family: var(--garamond);
      color: var(--primary-color);
    }
    p {
      font-family: var(--hind);
      color: var(--text);
    }
  }

  .profile-lower-section {
    width: 90%;
    margin: 0 auto;
    min-height: 60vh;
    background: var(--background);
    transform: translate(0, -100px);

    .sub-section:first-child {
      margin-bottom: 30px;
      margin-top: 20px;
    }
    .sub-section {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 10px 20px;
      border-radius: 10px;
      box-shadow: 0 7px 20px var(--dark-gray);
      border: 1px solid var(--dark-mid-gray);

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
          background-color: var(--translucent-white);
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
        background: var(--background);
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
        background-color: var(--background);
        border: none;
        color: var(--primary-color);
        font-family: var(--garamond);
        font-size: 1rem;
        padding: 10px 20px;
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

  @media screen and (max-width: 375px) {
    .profile-id-btn {
      svg {
        font-size: 1.5rem !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    main {
      background-image: linear-gradient(
          360deg,
          var(--transparent-primary-color),
          var(--transparent-secondary-color)
        ),
        url(${({ coverPhoto }) => coverPhoto});
      background-size: cover;
      background-attachment: fixed;
      padding-bottom: 20px;
    }
    .profile-cover {
      display: none;
    }
    .profile-pic {
      height: fit-content;
      margin: 20px auto;
      align-items: center;
      gap: 10px;
      transform: translateY(0);
      position: static;

      ::after {
        display: none;
      }
      ::before {
        display: none;
      }

      .profile-pic-img-cont {
        width: 30%;
        height: fit-content;
        border-radius: 50%;
        border: 2px solid var(--white);
        background: var(--background);

        .profile-pic-img {
          width: 100%;
          /* height: 100%; */
          border-radius: 50%;
          background: var(--white);
          display: block;
          object-fit: cover;
        }
      }
    }
    .profile-name {
      width: 70%;
      h2 {
        font-size: 1.2rem;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
      }
      p {
        font-family: var(--hind);
        color: var(--text);
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--white);
      }
    }
    .profile-lower-section {
      background: transparent;
      transform: translate(0, -0);
    }
    .profile-lower-section .sub-section {
      background: var(--background);
    }
    .profile-lower-section .sub-section div label {
      justify-content: flex-start;
    }
  }
`;
