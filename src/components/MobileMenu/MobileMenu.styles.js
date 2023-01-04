import styled from "styled-components";

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background);
  z-index: 1;
  padding: 15vh 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
    height: 60%;

    .home-menu-btn {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;

        span {
          font-family: var(--garamond);
          color: var(--primary-color);
        }
      }
    }

    img {
      width: 70px;
      height: 70px;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0;
      gap: 20px;
      justify-content: space-around;
      height: 100%;

      li {
        list-style-type: none;
        position: relative;
        text-align: center;

        a {
          text-decoration: none;
          color: var(--primary-color);
          padding: 0 5px;
          font-family: var(--garamond);
        }

        ::after {
          content: "";
          width: 0;
          height: 25%;
          display: block;
          position: absolute;
          bottom: 5%;
          left: 0;
          background-color: var(--secondary-color);
          z-index: -1;
          transition: all 200ms ease-in-out;
        }

        :hover::after {
          width: 100%;
        }
      }
    }
  }

  .account {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;

    button {
      border: none;
      color: var(--primary-color);
      font-size: 1.1em;
      vertical-align: middle;
      cursor: pointer;
      font-family: var(--garamond);
    }
    #signup {
      background: transparent;
      position: relative;

      ::after {
        content: "";
        width: 0;
        height: 25%;
        display: block;
        position: absolute;
        bottom: 5%;
        left: 0;
        background-color: var(--secondary-color);
        z-index: -1;
        transition: all 200ms ease-in-out;
      }

      :hover::after {
        content: "";
        width: 100%;
        height: 25%;
        display: block;
        position: absolute;
        bottom: 5%;
        left: 0;
        background-color: var(--secondary-color);
        z-index: -1;
      }
    }

    #login {
      display: inline-block;
      border-radius: 15px;
      padding: 5px 10px;
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      transition: all 300ms ease-in-out;

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--secondary-color);
        color: white;
      }
    }
  }
`;
