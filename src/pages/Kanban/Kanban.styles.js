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
  padding: 10px;
  width: 100%;

  main {
    flex: 1;
    border-radius: 10px;
    background: var(--background);
    width: 0;
    border: 1px solid var(--dark-mid-gray);
  }

  .create-kanban {
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
    .create-kanban-button-group {
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
          transform: scale(1.05);
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
  .available-kanban {
    padding: 20px;
    background: var(--background);
    border-radius: 10px;
  }

  /* Kanban Component Stylings */
  #kanban {
    white-space: nowrap;
    margin-top: 50px;
  }

  .list {
    border-radius: 8px;
    margin: 5px;
    background-color: var(--translucent-white);
    display: inline-block;
    vertical-align: top;
    white-space: normal;
  }

  .list-title {
    font-size: 16px;
    padding: 10px;
    padding-left: 30px;
    margin-bottom: -10px;
    font-weight: bold;
    cursor: pointer;
    font-family: var(--garamond);
    font-weight: 600;
    color: var(--primary-color) !important;
    font-size: 1.2rem;
  }

  .scrollable-list {
    height: 400px;
    width: 260px;
  }

  .sortable-cards {
    min-height: 380px;
  }

  .card {
    position: relative;
    background-color: var(--background);
    box-sizing: border-box;
    width: 230px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    font-family: var(--hind);
  }

  .card-subject {
    padding-bottom: 10px;
  }

  .card-assignee {
    opacity: 0.6;
  }

  .card-delete {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 0.5em;
    padding: 5px;
    border-radius: 10px;
    background: var(--translucent-white);
    filter: grayscale(1) brightness(300%);
    backdrop-filter: invert(85%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease;

    :hover {
      filter: none !important;
    }
  }

  .priority-color-codes {
    width: 100%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }

  .priority-color-codes_title {
    font-size: clamp(0.8rem, 1vw, 1rem);
  }

  .priority-color-codes_box {
    display: flex;
    gap: clamp(10px, 2vw, 20px);
    flex: 1;
  }

  .priority-color-codes_number {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: clamp(40px, 3vw, 70px);
    color: text;
    font-family: var(--hind);
    list-style-type: none;

    span {
      color: var(--text);
      font-size: clamp(0.8rem, 1vw, 1rem);
    }

    div {
      width: 100%;
      height: 6px;
      background-color: red;
      border-radius: 6px;
    }
  }
  .priority-color-codes_number:nth-child(1) div {
    background: var(--dark-mid-gray);
  }
  .priority-color-codes_number:nth-child(2) div {
    background: var(--lime);
  }
  .priority-color-codes_number:nth-child(3) div {
    background: var(--orange);
  }
  .priority-color-codes_number:nth-child(4) div {
    background: var(--red);
  }

  .card-priority {
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 5px;
    width: 5px;
    border-radius: 2px;
    background: var(--whitesmoke);
  }

  .priority-1 {
    background: var(--dark-mid-gray);
  }

  .priority-2 {
    background: var(--lime);
  }

  .priority-3 {
    background: var(--orange);
  }

  .priority-4 {
    background: var(--red);
  }

  .instructions-panel {
    background: var(--background);
    border-radius: 10px;
    margin: 30px 10px;
    border: 1px solid var(--dark-mid-gray);
    padding: 10px;

    ul {
      padding: 10px 0;
    }

    li {
      list-style-position: inside;
      span {
        font-family: var(--hind);
        color: var(--text);
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
        color: var(--whitesmoke);
        font-size: 0.9rem;
      }
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
