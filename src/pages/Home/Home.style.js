import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;
export const Content = styled.div`
  width: clamp(240px, 100%, 2560px);
  margin: 0 auto;

  /* Hero illustration reset */
  #freepik--Shadow--inject-226 {
    fill: var(--translucent-white);
    filter: brightness(50%);
  }
  #freepik--shadow--inject-226 {
    fill: var(--translucent-white);
    filter: brightness(50%);
  }
  #freepik--floor--inject-226 {
    fill: var(--translucent-white);
  }
  #eltx6dxt9xu9 {
    fill: var(--translucent-white);
  }

  /* Mid banner illustration reset */
  #freepik--floor--inject-1--inject-2 {
    fill: var(--translucent-white);
  }
  #freepik--shadow--inject-1--inject-2 {
    fill: var(--translucent-white);
    filter: brightness(50%);
  }
  #freepik--Shadow--inject-1--inject-2 {
    fill: var(--translucent-white);
    filter: brightness(50%);
  }
  #ela0azwp1wxk {
    fill: var(--translucent-white);
  }

  .hero {
    width: 100%;
    padding: 10px clamp(20px, 3%, 60px) 10px clamp(20px, 3%, 60px);
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
  }

  .hero-text {
    width: clamp(300px, 50%, 800px);

    .hero-text-header {
      font-family: var(--garamond);
      margin-bottom: 20px;
      color: var(--primary-color);
      text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
    }
    .hero-text-desc {
      font-family: var(--hind);
      color: var(--text);
    }
    a {
      text-decoration: none;
    }
    button {
      font-size: 1rem;
      border: none;
      font-family: var(--hind);
      font-size: 1rem;
      margin: 30px auto 0;
      padding: 10px 20px;
      color: var(--white);
      border-radius: 20px;
      transition: all 300ms ease-in-out;
      background: var(--primary-color);
      displblock :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }

  .section-header {
    width: clamp(240px, 100%, 1440px);
    margin: 10vh auto 0;

    h1,
    h2 {
      text-align: center;
      text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
    }
    p {
      width: clamp(240px, 100%, 500px);
      margin: 5vh auto 0;
      font-family: var(--hind);
      text-align: center;
      color: var(--text);
    }
  }

  .features {
    width: clamp(240px, 80%, 2560px);
    margin: 10vh auto 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 10vh;

    .feature-card {
      width: clamp(220px, 30%, 500px);
      background: var(--translucent-white);
      padding: 20px 20px 40px;
      border-radius: 20px;

      .icon-cont {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :nth-child(1) .icon-cont {
        background-color: rgba(99, 178, 49, 0.3);
      }
      :nth-child(2) .icon-cont {
        background-color: rgba(244, 110, 22, 0.3);
      }
      :nth-child(3) .icon-cont {
        background-color: rgba(235, 219, 51, 0.3);
      }

      .feature-title {
        margin-top: 20px;
        text-align: center;
        text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
      }
      .feature-detail {
        margin-top: 20px;
        font-family: var(--hind);
        color: var(--text);
        text-align: center;
      }
    }
  }
  .difficulty {
    position: relative;
    margin: 20vh auto 0;
    padding: 5vh 10vw;
    width: clamp(240px, 100%, 2560px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 3vh;
    flex-wrap: wrap-reverse;
    background-color: #f46e16;
    opacity: 1;
    background: var(--translucent-white);
    overflow: hidden;
    backdrop-filter: invert(0.3);

    ::before {
      content: "";
      width: 10vw;
      height: 10vw;
      border-radius: 50%;
      filter: blur(20px);
      background: #63b231;
      z-index: -1;
      pointer-events: none;
      display: block;
      position: absolute;
      top: 20%;
      left: 20%;
      animation: blob-down 5s ease infinite;
    }
    ::after {
      content: "";
      width: 10vw;
      height: 10vw;
      border-radius: 50%;
      filter: blur(20px);
      background: #f46e16;
      z-index: -1;
      pointer-events: none;
      display: block;
      position: absolute;
      bottom: 20%;
      right: 20%;
      animation: blob-up 5s ease infinite;
    }

    .difficulty-detail {
      width: clamp(240px, 50%, 720px);
      padding: 0 20px;

      h1 {
        text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
      }

      p {
        font-family: var(--hind);
        margin-top: 20px;
        color: var(--text);
      }
    }
    svg {
      width: clamp(100px, 20%, 300px);
      margin: 0;
    }
  }
  section {
    width: clamp(240px, 80%, 2560px);
    margin: 10vh auto 0;
  }
  svg {
    width: clamp(50px, 40%, 600px);
    margin: auto;
  }
  img {
    width: 70%;
    margin: auto;
  }
  .cta-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    min-height: 20vmax;
    position: relative;
    background: linear-gradient(
        to right,
        var(--transparent-primary-color),
        var(--transparent-secondary-color)
      ),
      url(/user-mockup.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;

    .difficulty {
      margin: 0 auto;
      background: transparent;
      overflow: hidden;
      height: 100%;
      backdrop-filter: invert(0);

      ::before {
        content: "";
        display: none;
      }
      ::after {
        content: "";
        display: none;
      }

      .difficulty-detail {
        width: clamp(240px, 50%, 720px);
        padding: 0 20px;

        h1 {
          text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
          text-align: center;
        }

        p {
          font-family: var(--hind);
          margin-top: 20px;
          text-align: center;
          color: var(--white);
        }
        a {
          display: block;
          font-size: 1rem;
          font-family: var(--hind);
          font-size: 1rem;
          margin: 30px auto 0;
          padding: 10px 20px;
          color: var(--white);
          border-radius: 20px;
          transition: all 300ms ease-in-out;
          background: var(--primary-color);
          width: fit-content;
          text-decoration: none;

          :hover {
            box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
            background: var(--primary-color);
            color: white;
          }
        }
      }
      svg {
        width: 20%;
        margin: 0;
      }
    }

    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        105deg,
        var(--transparent-primary-color),
        var(--transparent-secondary-color)
      );
      z-index: -1;
    }
  }

  //////////////////////////////////hero image svg///////////////////////////////////////////////////////////

  svg#freepik_stories-shared-workspace:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-shared-workspace.animated #freepik--Shadows--inject-226 {
    animation: 3s Infinite linear wind;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated #freepik--Window--inject-226 {
    animation: 1.5s Infinite linear wind;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated #freepik--Board--inject-226 {
    animation: 3s Infinite linear floating;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated
    #freepik--Character--inject-226 {
    animation: 1.3s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated
    #freepik--character-3--inject-226 {
    animation: 1.3s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated
    #freepik--character--inject-226 {
    animation: 1.2s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated
    #freepik--character-2--inject-226 {
    animation: 1.2s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated #freepik--desk--inject-226 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated #freepik--Desk--inject-226 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated #freepik--Plants--inject-226 {
    animation: 3s Infinite linear wind;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated
    #freepik--character--inject-226 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated
    #freepik--character-1--inject-226 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  svg#freepik_stories-shared-workspace.animated
    #freepik--speech-bubble--inject-226 {
    animation: 3s Infinite linear floating;
    animation-delay: 0s;
  }

  .home-content {
    min-height: 200px;

    .points-right {
      display: flex;
      align-items: center;
      margin-top: 20vh;
      gap: 5vmin;
    }
    .points-left {
      display: flex;
      align-items: center;
      /* flex-direction: row-reverse; */
      gap: 5vmin;
      margin-top: 20vh;
    }
    .points-box {
      width: 50%;

      h2 {
        font-family: var(--garamond);
        margin-bottom: 20px;
        color: var(--primary-color);
        text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
      }
      p {
        font-family: var(--hind);
        color: var(--text);
      }
    }
  }

  ///////////////////////////////////////time image svg///////////////////////////////////////////////////////
  #freepik_stories-time-management:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Floor--inject-1--inject-2 {
    animation: 1.5s Infinite linear wind;
    animation-delay: 0s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Calendar--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight,
      3s Infinite linear wind;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Gears--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
      3s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Wrench--inject-1--inject-2 {
    animation: 3s Infinite linear floating;
    animation-delay: 0s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--books--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Books--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut,
      3s Infinite linear floating;
    animation-delay: 0s, 0s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--list--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 0s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--List--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      6s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Pencil--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight,
      3s Infinite linear wind;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Clock--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  svg#freepik_stories-time-management.animated
    #freepik--character--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-time-management.animated
    #freepik--Character--inject-1--inject-2 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp,
      6s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  ///////////////////////////////////////svg's end here///////////////////////////////////////////////////

  ///////////////////////////////////////hero image svg animations///////////////////////////////////////////

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
  ///////////////////////////hero image svg  animations ends here///////////////////////////////////////////

  ///////////////////////////time image svg animations//////////////////////////////////////////
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
  @keyframes zoomOut {
    0% {
      opacity: 0;
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
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

  ///////////////////////////time image svg animation ends here///////////////////////////////////////////

  /////////////////////////////////Mid banner blob animations start here////////////////////////////////////////////////

  @keyframes blob-down {
    0% {
      top: 20%;
      left: 20%;
      border-radius: 50%;
    }
    10% {
      border-radius: 10% 16% 42% 25%;
    }
    20% {
      left: 10%;
      border-radius: 45% 20% 12% 32%;
    }
    30% {
      border-radius: 20% 40% 10% 50%;
    }
    40% {
      top: 50%;
      border-radius: 10% 16% 42% 25%;
    }
    50% {
      border-radius: 45% 20% 12% 32%;
      top: 80%;
      left: 15%;
    }
    60% {
      top: 50%;
      border-radius: 20% 40% 10% 50%;
    }
    70% {
      border-radius: 32% 12% 45% 33%;
      left: 25%;
    }
    80% {
      top: 40%;
      border-radius: 32% 12% 45% 33%;
    }
    90% {
      border-radius: 20% 40% 10% 50%;
    }
    100% {
      border-radius: 50%;
      top: 20%;
      left: 20%;
    }
  }

  @keyframes blob-up {
    0% {
      right: 20%;
      bottom: 20%;
      border-radius: 50%;
    }
    10% {
      border-radius: 10% 16% 42% 25%;
    }
    20% {
      bottom: 10%;
      border-radius: 45% 20% 12% 32%;
    }
    30% {
      border-radius: 20% 40% 10% 50%;
    }
    40% {
      right: 40%;
      border-radius: 10% 16% 42% 25%;
    }
    50% {
      border-radius: 45% 20% 12% 32%;
      right: 60%;
      bottom: 45%;
    }
    60% {
      right: 50%;
      border-radius: 20% 40% 10% 50%;
    }
    70% {
      border-radius: 32% 12% 45% 33%;
      bottom: 30%;
    }
    80% {
      right: 40%;
      border-radius: 32% 12% 45% 33%;
    }
    90% {
      border-radius: 20% 40% 10% 50%;
    }
    100% {
      border-radius: 50%;
      right: 20%;
      bottom: 20%;
    }
  }

  /////////////////////////////////Mid banner blob animations ends here////////////////////////////////////////////////

  @media screen and (max-width: 540px) {
    .hero-text-header {
      text-align: center;
    }
    .hero-text-desc {
      text-align: center;
    }
    button {
      margin: 30px auto 0;
      display: block;
    }
    .difficulty {
      margin: 0 auto;
    }
    .difficulty-detail {
      width: clamp(240px, 50%, 720px);

      h1 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .section-header {
      padding: 5vh 0;
      backdrop-filter: invert(0.1);
    }
    .home-content {
      .points-right {
        flex-wrap: wrap;
      }
      .points-left {
        flex-wrap: wrap-reverse;
      }
      .points-box {
        width: 80%;
        text-align: center;
        margin: 0 auto;
      }

      img {
        display: block;
        width: 100%;
        margin: auto;
      }
    }
    .cta-box .difficulty {
      backdrop-filter: invert(0);
    }
  }
`;
