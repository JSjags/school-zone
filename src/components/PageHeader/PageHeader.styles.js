import styled from "styled-components";

export const HeaderWrapper = styled.header`
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
  border-radius: 0 0 10px 10px;

  h1 {
    padding-left: 2rem;
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
      color: var(--text);
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
    background-color: var(--transparent);
    border: none;
    font-family: var(--hind);
    font-size: 1rem;
    padding: 10px 20px;
    color: var(--text);
    border-radius: 20px;
    border: 1px solid var(--dark-mid-gray);
    transition: all 300ms ease-in-out;
    cursor: pointer;

    :hover {
      box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
      background: var(--primary-color);
      color: white;
    }
  }

  @media screen and (max-width: 480px) {
    #sign-out {
      padding: 10px 0;
      border: none;
      transition: all 300ms ease-in-out;
      cursor: pointer;

      span {
        display: none;
      }

      :hover {
        box-shadow: none !important;
        background: none !important;
        color: none !important;
      }
    }
  }
`;
