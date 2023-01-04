import styled from "styled-components";
import loginBg from "../../images/login-bg.jpg";

export const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(244, 110, 22, 0.7)),
    url(${loginBg});
  background-size: cover;
  background-position-y: 50%;
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

export const Content = styled.div`
  width: clamp(200px, 90vw, 400px);
  padding: 40px 20px;
  background: var(--background);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

  h1 {
    font-family: var(--garamond);
    color: var(--primary-color);
    text-shadow: var(--text-shadow);
    margin-bottom: 10px;
  }
  p {
    font-family: var(--hind);
    color: var(--text);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--primary-color);
    margin: 5px 0 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    color: var(--primary-color);
    font-size: 1rem;
    font-family: var(--garamond);
    margin-bottom: 10px;
  }
  input {
    display: block;
    font-family: var(--hind);
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    caret-color: var(--primary-color);
    outline-color: var(--primary-color);
    outline-offset: 2px;
    outline-width: 3px;
    width: clamp(200px, 100%, 400px);
    background: var(--translucent-white);
    backdrop-filter: invert(0.3);
    color: var(--text);
    margin-bottom: 30px;
    transition: all 200ms ease-in-out;

    :hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    }

    :focus {
      background: transparent;
    }
  }
  button {
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    width: fit-content;
    font-family: var(--hind);
    background: var(--primary-color);
    color: white;
    transition: all 200ms ease;

    :hover {
      box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
      background: var(--primary-color);
      color: white;
    }
  }

  .error-message {
    width: clamp(100px, 100%, 300px);
    padding: 5px;
    border: 2px solid red;
    border-radius: 5px;
    margin-bottom: 20px;
    background: rgba(255, 0, 0, 0.3);

    p {
      color: red;
      display: flex;
      align-items: center;
      gap: 3px;

      span {
        display: block;
      }
    }
  }
`;
