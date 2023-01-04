import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  ${(props) =>
    props.isSuccess === false &&
    css`
      display: flex;
      align-items: flex-start;
      justify-content: center;
    `};

  .publish-success-message {
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: clamp(200px, 40vw, 500px);
    margin: 10px auto 0;
    gap: 5px;
    border: 1px solid var(--white);
    font-family: var(--hind);
    color: var(--white);
    background: rgba(0, 255, 0, 0.3);
    border-radius: 5px;
    font-family: var(--hind);
    position: absolute;
  }
  .publish-error-message {
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: var(--white);
    width: clamp(200px, 40vw, 500px);
    gap: 5px;
    background: rgba(255, 0, 0, 0.3);
    padding: 5px;
    border: 1px solid var(--white);
    border-radius: 5px;
    font-family: var(--hind);
    margin: 10px auto 0;
  }
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
  .create-article {
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
    .create-article-button-group {
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
  .buttons-holder {
    width: 100%;
    display: flex;
    gap: clamp(15px, 5%, 30px);
  }
  .available-articles {
    width: 100%;
    padding: 20px;
    background: var(--background);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: clamp(20px, 3%, 30px);
    flex-direction: column;
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
      display: flex;
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
  .articles-box.column {
    width: 100%;
    min-height: 100px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transform-style: preserve-3d;

    .article {
      width: clamp(100px, 100%, 900px);
      height: clamp(150px, 20vh, 250px);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      gap: 20px;
      border-radius: 10px;
      transition: all 200ms linear;
      position: relative;

      :hover {
        transform: scale(1.01);
        box-shadow: 0 5px 12px var(--light-gray);
      }
    }
    .article-banner-cont {
      width: clamp(100px, 30%, 240px);
      height: clamp(100px, 100%, 240px);
      border-radius: 5px;
      overflow: hidden;
    }
    .article-banner {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .article-details {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      height: 100%;
      padding: 5px 0 0;

      .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        cursor: pointer;
        white-space: normal;
        position: relative;
        margin-bottom: 3px;
        text-decoration: underline solid var(--transparent) 3px;
        transition: all 200ms linear;

        :hover {
          text-decoration-color: var(--secondary-color);
        }
      }
      .author {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: var(--dark-mid-gray);
        font-size: 0.8rem;
        font-family: var(--hind);
      }
      .time {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: var(--whitesmoke);
        font-size: 0.7rem;
        font-family: var(--hind);
        margin-bottom: 5px;
      }
      .summary {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: var(--text);
        font-family: var(--hind);
      }
    }

    .manage-buttons {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
    }

    @media screen and (max-width: 768px) {
      .action-buttons-box {
        flex-direction: column;
        align-items: flex-end;
        row-gap: 20px;
      }
      .article-banner-cont {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
      }
      .article-details {
        width: 100%;
        background: var(--translucent-white);
        backdrop-filter: blur(3px);
        border-radius: 5px;
        padding: 10px;
      }
    }
  }

  .articles-box.grid {
    width: 100%;
    min-height: 100px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;

    .article {
      height: clamp(300px, 50vh, 300px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      gap: 10px;
      border-radius: 10px;
      transition: all 200ms linear;

      :hover {
        transform: scale(1.01);
        box-shadow: 0 5px 12px var(--light-gray);
      }
    }
    .article-banner-cont {
      width: 100%;
      height: clamp(200px, 100%, 320px);
      border-radius: 5px;
      overflow: hidden;
    }

    .article-banner {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .article-details {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 5px;

      .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        cursor: pointer;
        white-space: normal;
        position: relative;
        margin-bottom: 3px;
        text-decoration: underline solid var(--transparent) 3px;
        transition: all 200ms linear;

        :hover {
          text-decoration-color: var(--secondary-color);
        }
      }
      .author {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: var(--dark-mid-gray);
        font-size: 0.8rem;
        font-family: var(--hind);
      }
      .time {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: var(--whitesmoke);
        font-size: 0.7rem;
        font-family: var(--hind);
        margin-bottom: 5px;
      }
      .summary {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        color: var(--text);
        font-family: var(--hind);
      }
    }
    .manage-buttons {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      padding: 10px 0;
      justify-content: space-around;
      align-items: center;
      backdrop-filter: blur(5px);
    }
  }
  .search-text {
    color: var(--secondary-color);
    font-weight: 500;
    font-size: clamp(1.5rem, 2vw, 1.7rem);
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

  .page-info {
    width: 100%;
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
    font-size: clamp(1rem, 1vw, 1.3rem);
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

  .search-title {
    letter-spacing: 1px;
  }
  .search-text {
    color: var(--secondary-color);
  }
  .search-subtitle {
    color: var(--text);
    font-family: var(--hind);

    span {
      font-weight: bolder;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .action-buttons-box {
      flex-direction: column;
      align-items: flex-end;
      row-gap: 20px;
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
