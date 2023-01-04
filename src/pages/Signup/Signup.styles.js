import styled from "styled-components";
import bgImg from "../../images/footer-bg.png";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(244, 110, 22, 0.7)),
    url(${bgImg});
  background-size: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

export const Content = styled.div`
  width: clamp(200px, 90vw, 600px);
  padding: 40px 20px;
  background: var(--background);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

  h1 {
    color: var(--primary-color);
    text-shadow: var(--text-shadow);
    margin-bottom: 10px;
  }
  p {
    font-family: var(--hind);
    color: var(--deep-gray);
    color: var(--text);
  }
  hr {
    border: none;
    border-bottom: 1px solid var(--primary-color);
    margin: 5px 0 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    background: var(--background);
  }
  label {
    color: var(--primary-color);
    font-size: 1rem;
    margin-bottom: 10px;
    font-family: var(--garamond);
  }
  input {
    display: block;
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    caret-color: var(--primary-color);
    outline-color: var(--primary-color);
    font-family: var(--hind);
    height: 40px;
    outline-offset: 2px;
    outline-width: 3px;
    cursor: pointer;
    width: clamp(200px, 100%, 600px);
    background: var(--translucent-white);
    margin-bottom: 5px;
    transition: all 200ms ease-in-out;
    color: var(--text);
    backdrop-filter: invert(0.3);

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
    background: var(--primary-color);
    font-family: var(--hind);
    color: white;
    transition: all 200ms ease;

    :hover {
      box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
      background: var(--primary-color);
      color: white;
    }
  }
  .error-cont {
    display: flex;
    color: red;
    line-height: 0.8em;
    align-items: center;
  }
  .password-error {
    display: flex;
    flex-direction: column;
    line-height: 0.8em;
    color: red;
    gap: 2px;
    font-size: 0.8em;
    margin-bottom: 25px;
  }
  .error {
    display: flex;
    align-items: center;
    line-height: 0.8em;
    color: red;
    gap: 2px;
    font-size: 0.8em;
    margin-bottom: 25px;
  }
`;
