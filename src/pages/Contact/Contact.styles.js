import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px clamp(10px, 3vw, 60px);
`;
export const Content = styled.div`
  font-family: var(--hind);
  width: 100%;
  position: relative;

  h1,
  h2,
  h3 {
    width: 60%;
    font-family: var(--garamond);
    color: var(--primary-color);
    margin-top: 5vh;
    text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
  }
  p {
    margin-top: 5vh;
  }
  .form-container {
    width: 100%;
    display: flex;
    align-items: center;

    /* svg reset */
    #freepik--floor--inject-27 {
      fill: var(--translucent-white);
    }
    #freepik--shadow--inject-27 {
      fill: var(--background);
    }
    #freepik--Shadow--inject-27 {
      fill: var(--background);
    }

    svg {
      flex: 0.4;
      margin: auto;
    }
    svg#freepik_stories-get-in-touch:not(.animated) .animable {
      opacity: 0;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Floor--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38)
          lightSpeedRight,
        1.5s Infinite linear wind;
      animation-delay: 0s, 1s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Shadows--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft,
        1.5s Infinite linear wind;
      animation-delay: 0s, 3.5s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Pictures--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn,
        1.5s Infinite linear wind;
      animation-delay: 0s, 0s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Plants--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight,
        1.5s Infinite linear wind;
      animation-delay: 0s, 1s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--table--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
      animation-delay: 0s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Table--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
      animation-delay: 0s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Mobile--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
      animation-delay: 0s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Device--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
      animation-delay: 0s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Mail--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
      animation-delay: 0s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Chat--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
      animation-delay: 0.3333333333333333s;
      opacity: 0;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Phone--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
      animation-delay: 0.6666666666666666s;
      opacity: 0;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Icons--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft,
        6s Infinite linear shake;
      animation-delay: 0s, 1s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Window--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp,
        6s Infinite linear floating;
      animation-delay: 0s, 1s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--window--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn;
      animation-delay: 0s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--Character--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn;
      animation-delay: 0.3333333333333333s;
      opacity: 0;
    }
    svg#freepik_stories-get-in-touch.animated
      #freepik--speech-bubble--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn;
      animation-delay: 0.6666666666666666s;
      opacity: 0;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--character-2--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn,
        1.5s Infinite linear floating;
      animation-delay: 0s, 1s;
    }
    svg#freepik_stories-get-in-touch.animated #freepik--character-1--inject-27 {
      animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
      animation-delay: 0s;
    }
    @keyframes lightSpeedRight {
      from {
        transform: translate3d(50%, 0, 0) skewX(-20deg);
        opacity: 0;
      }
      60% {
        transform: skewX(10deg);
        opacity: 1;
      }
      80% {
        transform: skewX(-2deg);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes wind {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(1deg);
      }
      75% {
        transform: rotate(-1deg);
      }
    }
    @keyframes slideLeft {
      0% {
        opacity: 0;
        transform: translateX(-30px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes slideRight {
      0% {
        opacity: 0;
        transform: translateX(30px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }
      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
    @keyframes slideUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: inherit;
      }
    }
    @keyframes floating {
      0% {
        opacity: 1;
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
  form {
    max-width: 500px;
    padding-top: 20px;
    flex: 0.6;

    p {
      font-size: 1.1em;
      color: var(--primary-color);
      font-family: var(--garamond);
      margin-bottom: 10px;
    }
    input,
    textarea {
      color: var(--text);
      background: var(--translucent-white);
      font-family: var(--hind);
      border: none;
      padding: 10px 5px;
      border-radius: 10px;
      margin-bottom: 10px;
      max-width: 100%;
    }
    input {
      outline-color: var(--primary-color);
      outline-offset: 2px;
      caret-color: var(--primary-color);
      font-size: 1.1em;
      width: 100%;
      color: var(--text);
      backdrop-filter: brightness(0.8);

      :focus {
        background: var(--background);
      }
      ::placeholder {
        color: #bababa;
      }
    }
    textarea {
      height: 300px;
      width: 100%;
      resize: none;
      font-family: var(--hind);
      outline-color: var(--primary-color);
      outline-offset: 2px;
      caret-color: var(--primary-color);
      font-size: 1.1em;
      color: var(--text);
      backdrop-filter: brightness(0.8);

      :focus {
        background: var(--background);
      }
      ::placeholder {
        color: #bababa;
      }
    }

    button {
      display: block;
      margin-top: 20px;
      margin-bottom: 50px;
      font-family: var(--hind);
      border: none;
      padding: 10px 20px;
      font-size: 1.1em;
      background: var(--primary-color);
      color: var(--white);
      border-radius: 10px;
      cursor: pointer;
      outline-color: var(--primary-color);
      outline-offset: 2px;
      transition: all 300ms ease-in-out;

      :focus {
        background: var(--primary-color);
      }
      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid var(--primary-color);
    position: relative;
    overflow: visible;

    ::after {
      content: "OR";
      color: var(--primary-color);
      display: block;
      padding: 5px;
      position: absolute;
      background: var(--background);
      font-family: var(--garamond);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .options {
    width: 100%;
    margin-top: 20px;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    gap: 40px;

    a {
      font-size: 1.1em;
      text-decoration: none;
      color: var(--white);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: var(--primary-color);
      font-family: var(--hind);
      border-radius: 20px;
      padding: 10px;
      cursor: pointer;
      outline-color: var(--primary-color);
      outline-offset: 2px;
      transition: all 300ms ease-in-out;

      :focus {
        background: white;
      }
      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }
  .thank-you {
    font-family: var(--hind);
    color: var(--text);
    margin-top: 10px;
  }
  @media screen and (max-width: 720px) {
    h1,
    h2,
    h3 {
      width: clamp(200px, 80%, 800px);
      text-align: center;
      margin: 5vh auto;
    }
    .form-container {
      width: clamp(200px, 100%, 800px);
      flex-wrap: wrap-reverse;

      svg {
        flex: none;
        width: clamp(200px, 100%, 800px);
      }
    }
    form {
      width: 100%;
      flex: none;
    }
  }
`;
