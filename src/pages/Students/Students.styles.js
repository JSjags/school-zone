import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  background: var(--whitesmoke);
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

  #grid-container {
    width: calc(100% - 20px);
    min-height: 600px;
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    border-radius: 10px;
  }

  #grid-component {
    font-family: var(--garamond);
    font-size: 1.4rem;
    width: 100%;
    position: absolute;
    box-shadow: 0 10px 20px var(--lightest-gray);
  }

  #columns-directive {
    color: red !important;
    background: blue;
  }

  /* Grid Header */
  .e-grid [class^="e-"] {
    color: var(--primary-color);
    font-size: 0.8rem;
    text-transform: capitalize;
    font-weight: 600;
  }
  .e-grid .e-gridheader tr:first-child th {
    border: none;
    border-right: 0.5px solid var(--mid-gray);
    padding: 0 0 0 5px;
  }

  /* Columns */
  .e-grid:not(.e-row-responsive)
    .e-gridcontent
    tr.e-row:first-child
    .e-rowcell {
    border: none;
    border-right: 0.5px solid var(--mid-gray);
    padding: 10px 5px;
    color: black;
    font-family: var(--hind);
    font-weight: normal;
    text-transform: none;
  }
  ul#grid-component_cmenu,
  .e-contextmenu-wrapper ul.e-contextmenu,
  .e-contextmenu-container ul.e-contextmenu,
  .e-contextmenu-wrapper ul,
  .e-contextmenu-container ul,
  .e-contextmenu-wrapper ul,
  .e-contextmenu-container ul {
    background-color: #fff;
    color: red !important;
  }

  main {
    flex: 1;
    background: blue;
    border-radius: 10px;
    background: white;
    min-height: 100vh;
  }
  header {
    display: flex;
    align-items: center;
    padding: 1rem;
    font-family: var(--garamond);
    gap: 20px;

    h1 {
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
      background-color: whitesmoke;
      border: none;
      font-family: var(--hind);
      font-size: 1rem;
      padding: 10px 20px;
      color: var(--deep-gray);
      border-radius: 20px;
      transition: all 300ms ease-in-out;
      cursor: pointer;

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }

  .create-student {
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
    }
    .create-student-button-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5%;
      flex-wrap: wrap;

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border: none;
        height: 100%;
        border-radius: 10px;
        padding: 50px 20px;
        font-weight: 500;
        font-size: 1rem;
        background: whitesmoke;
        font-family: var(--hind);
        cursor: pointer;
        transition: all 300ms ease;

        span {
          white-space: nowrap;
        }

        :hover {
          background: white;
          box-shadow: 0 5px 10px var(--dark-mid-gray);
        }
      }
    }
  }
  .student-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: red;
    margin: 0 auto;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .available-students {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    padding: 20px 10px;

    button {
      display: flex;
      gap: 5px;
      width: fit-content;
      padding: 10px;
      border-radius: 5px;
      border: none;
      align-items: center;
      background: white;
      border: 1px solid var(--mid-gray);
      cursor: pointer;
      transition: all 300ms ease;

      :hover {
        background-color: white;
        color: var(--primary-color);
        box-shadow: 0 5px 7px var(--primary-color);
      }

      span {
        font-size: clamp(1rem, 1vw, 1.2rem);
        font-weight: 500;
        font-family: var(--hind);
      }
    }
  }
  /* .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;

    img {
      width: 100px;
    }
    p {
      font-family: var(--hind);
    }
  } */
`;
