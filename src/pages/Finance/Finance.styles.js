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
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  width: 100%;

  main {
    flex: 1;
    border-radius: 5px;
    background: var(--background);
    min-height: 100vh;
    border: 1px solid var(--dark-mid-gray);
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
      color: var(--text);
    }
    .create-finance-button-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5%;
      flex-wrap: wrap;

      button {
        width: clamp(200px, 20vw, 230px);
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
        font-size: clamp(0.8rem, calc(0.8rem + 0.1vw), 1rem);
        background: var(--background);
        color: var(--text);
        font-family: var(--hind);
        cursor: pointer;
        box-shadow: 0 5px 10px var(--dark-gray);
        border: 1px solid var(--dark-mid-gray);
        transition: all 300ms ease;

        span {
          white-space: nowrap;
        }

        :hover {
          background: var(--white);
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
    background: var(--background);
    border-radius: 10px;
  }

  .action-buttons-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }
  .left-hand {
    display: flex;
    flex-wrap: nowrap;

    .item {
      border: 1px solid var(--dark-mid-gray);
      color: var(--text);
    }
  }
  .right-hand {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    gap: 10px;

    .item.filter {
      border: 1px solid var(--dark-mid-gray);
      height: fit-content;
    }
  }
  .item {
    display: flex;
    gap: 5px;
    align-items: center;
    border-radius: 10px;
    padding: 5px 10px 5px 5px;
    color: var(--text);

    label {
      font-size: clamp(1.1rem, 2vw, 1.2rem);
      font-weight: 500;
    }
  }
  .finance-box {
    width: 100%;
    min-height: 100px;
    box-shadow: 0 10px 20px var(--light-gray);
    border: 1px solid var(--dark-mid-gray);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform-style: preserve-3d;
  }
  .search-text {
    color: var(--secondary-color);
    font-weight: 500;
    font-size: clamp(1.5rem, 2vw, 1.7rem);
    text-transform: capitalize;
  }
  .filter-view {
    color: var(--secondary-color);
    font-weight: 500;
    text-transform: capitalize;
  }
  .filter-text {
    color: var(--secondary-color);
    font-weight: 500;
    text-transform: capitalize;
  }
  .financial-item {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 10px var(--light-gray);
    padding: 5px;
    transition: all 300ms ease;
    transform: translateY(-20px);
    cursor: pointer;

    :hover {
      transform: scale(1.02) translateY(-10px) translateZ(10px);
      box-shadow: 0 10px 30px var(--dark-gray);
    }
  }
  .header-rule {
    width: 5%;
    border: none;
    border-bottom: 6px solid var(--primary-color);
    border-radius: 2px 2px 6px 6px;
    transform: translateY(-20px);
  }
  .revenue {
    overflow: hidden;
    background: url(https://cdn2.iconfinder.com/data/icons/wsd-business-2/64/wsd-business-01-512.png),
      var(--lime);
    position: relative;
    background-repeat: no-repeat;
    background-size: clamp(200px, 50%, 500px);
    background-position: 80% 20%;

    h3 {
      background: var(--white);
      padding: 5px 10px;
      color: var(--lime);
      border-radius: 100000px;
      width: fit-content;
      margin: 10px 0;
    }

    .statement-id {
      color: var(--lime);
    }
  }
  .expense {
    overflow: hidden;
    background: url(https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-4/24/018_163_arrow_chart_low-512.png),
      var(--red);
    position: relative;
    background-repeat: no-repeat;
    background-size: clamp(200px, 50%, 500px);
    background-position: 90% 60%;

    h3 {
      background: var(--white);
      padding: 5px 10px;
      color: var(--red);
      border-radius: 100000px;
      width: fit-content;
      margin: 10px 0;
    }

    .statement-id {
      color: var(--red);
    }
  }
  .amount {
    letter-spacing: none;
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
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .desc-title {
    font-family: var(--garamond);
    color: var(--white);
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: var(--primary-color);
    text-underline-offset: 1px;
    text-decoration-thickness: 3px;
    text-decoration-skip-ink: none;
  }
  .desc-body {
    font-family: var(--hind);
    color: var(--white);
  }

  .statement-id {
    color: var(--lime);
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
    position: relative;
    justify-content: center;
    cursor: pointer;
    transition: all 200ms linear;

    :hover {
      transform: scale(1.4);
      color: var(--secondary-color);
    }
  }
  .page-controls_btn.disabled {
    cursor: not-allowed;
    opacity: 0.4;

    :hover {
      transform: scale(1);
      color: var(--primary-color);
    }
    ::after {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50px;
      backdrop-filter: grayscale(100%);
    }
  }
  .page-controls_number {
    color: var(--primary-color);
    font-family: var(--garamond);
    font-size: clamp(1.2rem, 1vw, 1.3rem);
    display: inline-flex;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 3px 7px var(--dark-gray);
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
  .no-results {
    font-family: var(--hind);
    margin: 0 0 10px 0;
    color: var(--text);
  }
  .finance-summary {
    position: relative;
    width: fit-content;
    padding-bottom: 20px;
    left: 0;

    ::after {
      content: "";
      position: absolute;
      display: block;
      bottom: 14px;
      width: 40%;
      height: 4px;
      border-radius: 2px 2px 4px 4px;
      background: var(--secondary-color);
    }
  }
  .total-finance {
    width: clamp(50px, 5vw, 70px);
    height: clamp(50px, 5vw, 70px);
    background: var(--background);
    border-radius: 50%;
    box-shadow: 0 5px 10px var(--dark-gray);
    border: 1px solid var(--dark-mid-gray);
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: all 200ms linear;
    cursor: pointer;

    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--background);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(50px, 5vw, 70px);
      cursor: pointer;
      color: var(--primary-color);
      transition: all 300ms ease;
    }

    :hover button {
      color: var(--background);
      background-color: var(--primary-color);
    }
    :hover {
      transform: scale(1.1);
    }
  }
  .total-finance.active {
    width: clamp(240px, 100%, 500px);
    height: auto;
    display: grid;
    border-radius: 10px;
    padding: 10px;
    z-index: 100;

    button {
      border-radius: 50px;
      align-self: flex-end;
      justify-self: right;
      background-color: var(--primary-color);
      color: var(--text);
      font-family: var(--hind);
      padding: 5px 20px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(1rem, 5vw, 1.2rem);
      width: fit-content;
      height: fit-content;
      cursor: pointer;
      transition: all 300ms ease;

      :hover {
        box-shadow: -3px -3px var(--light-tint), 3px 3px var(--dark-tint);
      }
    }

    :hover button {
      color: var(--text);
      background-color: var(--primary-color);
    }
    :hover {
      transform: scale(1.03);
    }
  }

  .total-finance-info {
    width: clamp(240px, 100%, 500px);
    height: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }
  .total-revenue {
    color: var(--lime);
  }
  .total-expenses {
    color: var(--red);
  }
  .total-revenue,
  .total-expenses,
  .financial-status {
    width: 100%;

    h2 {
      font-weight: 600;
    }

    p,
    .financial-status-box {
      width: 100%;
      text-align: center;
      font-family: var(--hind);
      font-size: clamp(1.2rem, 3vw, 1.4rem);
      letter-spacing: 1px;
      font-weight: 500;
      margin: 5px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
  .deficit {
    color: var(--red);
  }
  .surplus {
    color: var(--lime);
  }
`;
