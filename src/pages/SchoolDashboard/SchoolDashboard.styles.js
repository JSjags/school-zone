import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  min-height: 100vh;
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
  padding: 10px 10px 10px 0;
  width: 100%;

  main {
    flex: 1;
    border-radius: 10px;
    background: var(--background);
    width: 0;
    border: 1px solid var(--dark-mid-gray);

    .student-staff-cont {
      width: 100%;
      border-radius: 10px;
      padding: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .student-board {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      min-height: 200px;
      background-color: yellow;
      padding: 1rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;
    }

    .staff-board {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      min-height: 200px;
      background-color: rebeccapurple;
      padding: 1rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;
    }
    .finance-cont {
      width: 100%;
      border-radius: 10px;
      padding: 0 1rem 0.5rem;
      min-height: 200px;
    }
    .finance-board {
      width: clamp(200px, 100%, 1500px);
      min-height: 200px;
      padding: 1rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;
    }
    .cont {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .statement {
      width: clamp(200px, 30%, 1500px);
    }
    .statements {
      justify-content: space-between;
      padding: 1vmax 0 2vmax;
      width: clamp(200px, 100%, 1500px);
      display: flex;
      row-gap: 20px;
      flex-direction: column;
      backdrop-filter: invert(0.05);
      padding-left: 10px;
      border-radius: 20px;

      .rev,
      .exp {
        width: (200px, 100%, 1500px);
        min-height: 70px;
        display: flex;
        flex-direction: column;
        text-align: left;

        p {
          font-size: 1.5rem;
          font-family: var(--hind);
          color: var(--text);
          text-align: center;
          letter-spacing: 1px;
        }
      }
    }
    .recent-records {
      padding: 1vmax 0 2vmax;
      width: clamp(200px, 30%, 1500px);
      height: clamp(200px, 25vmax, 400px);
      backdrop-filter: invert(0.05);
      padding: 10px;
      border-radius: 20px;
      overflow: overlay;

      ::-webkit-scrollbar {
        appearance: none;
        width: 5px;
        height: 5px;
      }
      ::-webkit-scrollbar-track {
        width: 3px;
        height: 3px;
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb {
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background: var(--secondary-color);
      }

      .records-cont {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        row-gap: 10px;

        .financial_item {
          min-height: 40px;
          background-color: red;
          border-radius: 10px;
        }

        .revenue {
          background-color: var(--lime);
          padding: 5px;

          .type {
            color: var(--lime);
          }
        }

        .expense {
          background-color: var(--red);
          padding: 5px;

          .type {
            color: var(--red);
          }
        }

        .financial_item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .type {
          padding: 5px 10px;
          font-family: var(--garamond);
          background-color: var(--white);
          border-radius: 20px;
          font-weight: bolder;
          width: fit-content;
          font-size: 0.8rem;
        }
        .value {
          font-family: var(--hind);
          color: var(--white);
        }
        .statement {
          width: 100%;
          font-family: var(--hind);
          color: var(--white);
          font-size: 0.8rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 0;
          margin-top: 3px;
        }
      }

      .no-records {
        width: 100%;
        height: 100%;
        align-self: center;
        justify-self: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;

        img {
          width: clamp(40px, 30%, 100px);
        }

        p {
          color: var(--text);
          font-family: var(--hind);
          line-height: 100%;
          vertical-align: middle;
        }
      }
    }
    .pie-chart {
      width: clamp(200px, 38%, 1500px);
    }
    .others-cont {
      width: 100%;
      border-radius: 10px;
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .recent-articles {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      min-height: 200px;
      background-color: yellow;
      padding: 1rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;
    }

    .upcoming-schedules {
      width: clamp(200px, calc(50% - 0.5rem), 1500px);
      min-height: 200px;
      background-color: rebeccapurple;
      padding: 1rem;
      border: 1px solid var(--dark-mid-gray);
      border-radius: 10px;
    }
  }

  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;

    img {
      width: 25%;
    }
    p {
      font-family: var(--hind);
      font-weight: 500;
      color: var(--text);
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: var(--text);
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;

  /* .button-group {
    display: flex;
    align-items: center;
    gap: 40px;

    button {
      border: none;
      padding: 0.5rem 1rem;
      background: var(--dark-mid-gray);
      font-size: 1rem;
      border-radius: 1.5rem;
      font-family: var(--hind);
      cursor: pointer;
      transition: all 300ms ease-in-out;

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  } */
`;
export const ErrorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: red;
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;

  .button-group {
    display: flex;
    align-items: center;
    gap: 40px;

    button {
      border: none;
      padding: 0.5rem 1rem;
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      font-size: 1rem;
      border-radius: 1.5rem;
      font-family: var(--hind);
      cursor: pointer;
      transition: all 300ms ease-in-out;
      color: var(--text);

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
      }
    }
  }
`;
