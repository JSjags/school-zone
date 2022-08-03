import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const Content = styled.div`
  width: 100%;
  padding: 10px 50px 10px 60px;

  .hero {
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hero-text {
    width: 50%;

    .hero-text-header {
      font-family: var(--garamond);
      margin-bottom: 20px;
      color: var(--primary-color);
      text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
    }
    .hero-text-desc {
      font-family: var(--hind);
      color: var(--deep-gray);
    }
    button {
      font-size: 1rem;
      border: none;
      font-family: var(--hind);
      font-size: 1rem;
      margin-top: 30px;
      padding: 10px 20px;
      color: var(--deep-gray);
      border-radius: 20px;
      transition: all 300ms ease-in-out;

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }

  svg {
    width: 40%;
    margin: auto;
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
    }
    .points-left {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
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
        color: var(--deep-gray);
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

  //////////////////////////////////////////server image svg//////////////////////////////////////////
  svg#freepik_stories-memory-storage:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-memory-storage.animated #freepik--floor--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Floor--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut,
      1.5s Infinite linear shake;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Shadows--inject-62 {
    animation: 1.5s Infinite linear wind;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Plants--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      1.5s Infinite linear wind;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Gears--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      3s Infinite linear shake;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Clouds--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft,
      1.5s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Conection--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Cloud--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-memory-storage.animated #freepik--big-cloud--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
      1.5s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--server--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Server--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut,
      6s Infinite linear heartbeat;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Folder--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--folder--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0.3333333333333333s;
    opacity: 0;
  }
  svg#freepik_stories-memory-storage.animated #freepik--folder--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0.6666666666666666s;
    opacity: 0;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Folders--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated #freepik--Character--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated
    #freepik--speech-bubble--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 0s;
  }
  svg#freepik_stories-memory-storage.animated
    #freepik--speech-bubble--inject-62 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      6s Infinite linear floating;
    animation-delay: 0s, 1s;
  }

  //////////////////////////////////////visualize image svg//////////////////////////////////////////////////
  svg#freepik_stories-data-extraction:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--floor--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Floor--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut,
      1.5s Infinite linear wind;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--server-2--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp,
      6s Infinite linear shake;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-data-extraction.animated
    #freepik--speech-bubble--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft,
      3s Infinite linear shake;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--server--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 0s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Cable--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--server-1--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      6s Infinite linear heartbeat;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Line--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--folder--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Folder--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
      1.5s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Laptop--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Device--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Screen--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      3s Infinite linear floating;
    animation-delay: 1s, 2s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Glass--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  svg#freepik_stories-data-extraction.animated
    #freepik--magnifying-glass--inject-109 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight,
      3s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-data-extraction.animated #freepik--line--inject-109 {
    animation: 2.9s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 2s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Document--inject-109 {
    animation: 2.9s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0.725s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--shadow--inject-109 {
    animation: 2.9s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 1.45s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--document--inject-109 {
    animation: 2.9s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 2.175s;
    opacity: 0;
  }
  svg#freepik_stories-data-extraction.animated #freepik--Documents--inject-109 {
    animation: 2.9s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight,
      3s Infinite linear floating;
    animation-delay: 2s, 2.9s;
    opacity: 0;
  }

  ///////////////////////////////////reliable image svg//////////////////////////////////////////////////////////

  svg#freepik_stories-pipeline-maintenance:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-pipeline-maintenance.animated
    #freepik--Walls--inject-362 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0s;
  }
  svg#freepik_stories-pipeline-maintenance.animated
    #freepik--Character--inject-362 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 1s;
    opacity: 0;
  }
  svg#freepik_stories-pipeline-maintenance.animated
    #freepik--character-1--inject-362 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 1s;
    opacity: 0;
  }
  svg#freepik_stories-pipeline-maintenance.animated
    #freepik--Pipelines--inject-362 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
      6s Infinite linear floating;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-pipeline-maintenance.animated
    #freepik--character-2--inject-362 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 2s;
    opacity: 0;
  }
  svg#freepik_stories-pipeline-maintenance.animated
    #freepik--speech-bubble--inject-362 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 2.5s;
    opacity: 0;
  }

  ///////////////////////////////////////secure image svg///////////////////////////////////////////////////

  svg#freepik_stories-private-data:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Floor--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut,
      1.5s Infinite linear wind;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-private-data.animated #freepik--Shadows--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight,
      1.5s Infinite linear wind;
    animation-delay: 2s, 3s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Gears--inject-434 {
    animation: 1.5s Infinite linear floating;
    animation-delay: 0s;
  }
  svg#freepik_stories-private-data.animated #freepik--Plant--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      1.5s Infinite linear wind;
    animation-delay: 2.5s, 3.5s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Folder--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--folder--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 0.3333333333333333s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--folder--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 0.6666666666666666s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Folders--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Lines--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      6s Infinite linear shake;
    animation-delay: 1s, 2s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Title--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 1.6s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--shield--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0.5s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Shield--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut,
      3s Infinite linear heartbeat;
    animation-delay: 1.6s, 2.6s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Key--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn,
      3s Infinite linear heartbeat;
    animation-delay: 2s, 3s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--character--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 2s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated #freepik--Character--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 2s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated
    #freepik--speech-bubble--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 2.5s;
    opacity: 0;
  }
  svg#freepik_stories-private-data.animated
    #freepik--speech-bubble--inject-434 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
      3s Infinite linear floating;
    animation-delay: 2.5s, 3.5s;
    opacity: 0;
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

  ///////////////////////////server image svg animations///////////////////////////////////////
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
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    30% {
      transform: scale(1);
    }
    40% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(1);
    }
    100% {
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

  ////////////////////////////////////server image svg animation ends here///////////////////////////////////////

  //////////////////////////////////visualize image svg animations///////////////////////////////////////////////
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
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    30% {
      transform: scale(1);
    }
    40% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
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
  //////////////////////////////////visualize image svg animations ends here///////////////////////////////////////////////

  /////////////////////////////////reliable image svg animations starts here////////////////////////////////////////////////

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

  /////////////////////////////////reliable image svg animations ends here////////////////////////////////////////////////

  /////////////////////////////////Secure image svg animations starts here////////////////////////////////////////////////

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
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    30% {
      transform: scale(1);
    }
    40% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
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

  /////////////////////////////////Secure image svg animations ends here////////////////////////////////////////////////
`;
