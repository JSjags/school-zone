import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 0px clamp(10px, 3%, 50px);
  z-index: 10;
  background: var(--translucent-white);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  width: 100%;
  transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
`;
export const Content = styled.div`
  width: clamp(200px, 100%, 1560px);
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    font-size: 1.1em;
    ${() =>
      window.innerWidth < 769 &&
      css`
        flex: 1;
      `}

    .home-menu-btn {
      flex: 1;
      display: flex;
      justify-content: flex-end;
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
      justify-content: space-between;
      margin-left: 50px;
      gap: 20px;

      li {
        list-style-type: none;
        position: relative;

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
    justify-content: space-between;

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

  @media screen and (max-width: 375px) {
    padding: 0;

    /* .home-menu-btn div span {
      display: none;
    } */
  }
`;
