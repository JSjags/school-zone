import styled from "styled-components";
import footerBg from "../../images/footer-bg.png";

export const Wrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
      to right,
      var(--transparent-primary-color),
      var(--transparent-secondary-color)
    ),
    url(${footerBg});
  background-size: contain;
  color: white;
`;

export const Content = styled.div`
  width: 80%;
  display: grid;
  margin: 0 auto;
  font-family: var(--hind);
  padding: 10px;
  grid-gap: 10px;
  grid-template-areas:
    "ql ql ql h h h h h h h h h h h"
    "ql ql ql h h h h h h h h h h h"
    "ql ql ql h h h h h h h h h h h"
    "ql ql ql h h h h h h h h h h h"
    "ql ql ql h h h h h h h h h h h"
    "c  c  c  c c c c c c c c c c c";

  .quick-links {
    grid-area: ql;

    p {
      font-family: var(--garamond);
      position: relative;
      padding-bottom: 5px;
      width: fit-content;

      ::after {
        content: "";
        width: 30%;
        height: 3px;
        background: white;
        box-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
        position: absolute;
        border-radius: 1.5px;
        bottom: 0;
        left: 0;
        transform: skewX(-45deg);
      }
    }
    ul {
      padding: 5px 0;
      display: flex;
      flex-direction: column;
      gap: 5px;

      li {
        font-size: 0.9em;
        list-style-type: none;
        width: fit-content;
        display: flex;
        align-items: start;
        justify-content: space-around;
        position: relative;

        ::after {
          content: "";
          width: 0;
          height: 1px;
          background: white;
          position: absolute;
          bottom: 0;
          left: 0;
          transform: skewX(-45deg);
          transition: all 200ms ease;
        }

        :hover::after {
          width: 100%;
        }

        a {
          text-decoration: none;
          color: var(--white);
        }
      }
    }
  }
  .handles {
    grid-area: h;

    p {
      font-family: var(--garamond);
      position: relative;
      width: fit-content;
      padding-bottom: 5px;

      ::after {
        content: "";
        width: 30%;
        height: 3px;
        background: white;
        box-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
        position: absolute;
        bottom: 0;
        border-radius: 3px;
        left: 0;
        transform: skewX(-45deg);
      }
    }
    ul {
      padding: 5px 0;
      display: flex;
      flex-direction: column;
      gap: 5px;

      li {
        font-size: 0.9em;
        list-style-type: none;
        width: fit-content;
        position: relative;
        cursor: pointer;

        ::after {
          content: "";
          width: 0;
          height: 1px;
          background: white;
          position: absolute;
          bottom: 0;
          left: 0;
          transform: skewX(-45deg);
          transition: all 200ms ease;
        }

        :hover::after {
          width: 100%;
        }

        a {
          text-decoration: none;
          color: var(--white);
        }
      }
    }
  }
  .copyright {
    font-family: var(--garamond);
    color: var(--white);
    grid-area: c;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .quick-links {
      width: clamp(150px, 100%, 250px);
    }
    .handles {
      width: clamp(150px, 100%, 250px);
    }
  }
`;
