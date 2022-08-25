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

  .create-finance {
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
    .create-finance-button-group {
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
        background: var(--white);
        font-family: var(--hind);
        cursor: pointer;
        box-shadow: 0 5px 10px var(--dark-mid-gray);
        transition: all 300ms ease;

        span {
          white-space: nowrap;
        }

        :hover {
          background: white;
          transform: scale(1.1);
          box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
          background: var(--primary-color);
          color: white;
          letter-spacing: 2px;
          font-size: 1.1rem;
          -webkit-text-stroke: 0.5px var(--primary-color-active);
          text-shadow: 0 10px 3px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .available-finance {
    padding: 20px;
  }

  .action-buttons-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-hand {
    display: flex;
    flex-wrap: nowrap;

    .item {
      border: 1px solid var(--dark-mid-gray);
    }
  }
  .item {
    display: flex;
    gap: 5px;
    align-items: center;
    border-radius: 10px;
    padding: 5px 10px 5px 5px;

    label {
      font-size: clamp(1.1rem, 2vw, 1.2rem);
      font-weight: 500;
    }
  }
  .finance-box {
    width: 100%;
    min-height: 100px;
    box-shadow: 0 10px 20px var(--dark-mid-gray);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      padding-bottom: 20px;
    }
  }
  .financial-item {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 10px var(--dark-mid-gray);
    padding: 5px;
  }
  .revenue {
    overflow: hidden;
    background: url(https://cdn2.iconfinder.com/data/icons/wsd-business-2/64/wsd-business-01-512.png),
      #00d600;
    position: relative;
    background-repeat: no-repeat;
    background-size: clamp(200px, 50%, 500px);
    background-position: 80% 20%;

    h3 {
      background: white;
      padding: 5px 10px;
      color: #00d600;
      border-radius: 100000px;
      width: fit-content;
      margin: 10px 0;
    }

    .statement-id {
      color: #00d600;
    }
  }
  .expense {
    overflow: hidden;
    background: url(https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-4/24/018_163_arrow_chart_low-512.png),
      red;
    position: relative;
    background-repeat: no-repeat;
    background-size: clamp(200px, 50%, 500px);
    background-position: 90% 60%;

    h3 {
      background: white;
      padding: 5px 10px;
      color: red;
      border-radius: 100000px;
      width: fit-content;
      margin: 10px 0;
    }

    .statement-id {
      color: red;
    }
  }
  .amount {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .in-figures {
    font-size: clamp(1.2rem, 3vw, 1.7rem);
    color: var(--white);
    font-family: var(--hind);
    display: inline-block;
    font-weight: 500;
  }
  .in-words {
    display: inline-block;
    margin-left: 20px;
    font-size: clamp(1.1rem, 1vw, 1.2rem);
    text-transform: capitalize;
    color: var(--white);
    font-family: var(--hind);
  }
  .description {
    padding: 5px 0 0px;
  }
  .desc-title {
    font-family: var(--garamond);
    color: white;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: var(--primary-color);
    text-underline-offset: 1px;
    text-decoration-thickness: 3px;
    text-decoration-skip-ink: none;
  }
  .desc-body {
    font-family: var(--hind);
    color: white;
  }

  .statement-id {
    color: #00d600;
    margin-top: 10px;
    background: var(--white);
    padding: 2px 5px;
    border-radius: 20px;
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    span {
      white-space: nowrap;
      font-family: var(--hind);
      display: inline-block;
      margin-left: 5px;
      text-overflow: ellipsis;
      font-size: clamp(0.5rem, 1vw, 0.8rem);
    }
  }
  .date-time {
    display: flex;
    gap: 20px;
  }

  .page-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
  }
  .page-controls {
    width: clamp(200px, 100%, 300px);
    height: clamp(50px, 5vh, 70px);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .page-controls_btn {
    color: var(--primary-color);
    background: transparent;
    border: none;
    font-size: clamp(14px, 2rem, 30px);
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: center;
    cursor: pointer;
    transition: all 200ms linear;

    :hover {
      transform: scale(1.4);
      color: var(--secondary-color);
    }
  }
  .page-controls_number {
    color: var(--primary-color);
    font-family: var(--garamond);
    font-size: clamp(1.2rem, 1vw, 1.3rem);
    display: inline-flex;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 3px 7px var(--dark-mid-gray);
  }
  .page-details {
    width: clamp(200px, 100%, 300px);
    height: clamp(50px, 5vh, 70px);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .current-items {
    color: var(--primary-color);
    font-family: var(--garamond);
    font-size: clamp(1rem, 1vw, 2rem);
    display: inline-flex;
    padding: 5px 0;
    border-radius: 5px;
  }
  .total-items {
    color: var(--primary-color);
    font-family: var(--garamond);
    font-size: clamp(1.1rem, 1vw, 1.2rem);
    display: inline-flex;
    padding: 5px 0;
    border-radius: 5px;
  }
`;
