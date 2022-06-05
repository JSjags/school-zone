import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    margin-top: 30px;
`
export const Content = styled.div`
    width: 100%;
    min-height: 150vh;
    padding: 10px 50px 10px 60px;

    .hero {
        width: 100%;
        height: 60vh;
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
            text-shadow: 
            -1px -1px var(--light-tint),
            1px 1px var(--dark-tint);
        }
        .hero-text-desc {
            font-family: var(--hind);
        }
        button {
            font-size: ;
            border: none;
            font-family: var(--hind);
            font-size: 1em;
            margin-top: 30px;
            padding: 10px 20px;
            border-radius: 20px;
            transition: all 300ms ease-in-out;

            :hover {
                box-shadow: 
                -2px -2px var(--light-tint),
                2px 2px var(--dark-tint);
                background: var(--primary-color);
                color: white;
            }
        }
    }

    svg {
        width: 40%;
        margin: auto;
    }
    svg#freepik_stories-shared-workspace:not(.animated) .animable {
        opacity: 0;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--Shadows--inject-226 {
        animation: 3s Infinite  linear wind;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--Window--inject-226 {
        animation: 1.5s Infinite  linear wind;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--Board--inject-226 {
        animation: 3s Infinite  linear floating;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--Character--inject-226 {
        animation: 1.3s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideLeft;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--character-3--inject-226 {
        animation: 1.3s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideLeft;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--character--inject-226 {
        animation: 1.2s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--character-2--inject-226 {
        animation: 1.2s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--desk--inject-226 {
        animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--Desk--inject-226 {
        animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--Plants--inject-226 {
        animation: 3s Infinite  linear wind;
        animation-delay: 0s;
    }svg#freepik_stories-shared-workspace.animated #freepik--character--inject-226 {
        animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideUp;
        animation-delay: 0s;
    }svg#freepik_stories-shared-workspace.animated #freepik--character-1--inject-226 {
        animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideUp;
        animation-delay: 0s;
    }
    svg#freepik_stories-shared-workspace.animated #freepik--speech-bubble--inject-226 {
        animation: 3s Infinite  linear floating;
        animation-delay: 0s;
    }

    @keyframes wind {
        0% {
            transform: rotate( 0deg );
        }
        25% {
            transform: rotate( 1deg );
        }
        75% {
            transform: rotate( -1deg );
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
`