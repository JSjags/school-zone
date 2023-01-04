import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 50px;
  padding: 10px clamp(20px, 3vw, 60px);
`;

export const Content = styled.div`
  h1 {
    font-family: (--garamond);
    color: var(--primary-color);
    text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
    text-align: center;
    padding: 0 0 15px;
    margin-top: 20px;
    position: relative;

    ::after {
      content: "";
      width: 5%;
      height: 3px;
      background: var(--primary-color);
      box-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
      position: absolute;
      bottom: 0;
      border-radius: 3px;
      left: 50%;
      transform: skewX(-45deg) translateX(-50%);
    }
  }
  p {
    color: var(--text);
    text-align: center;
    font-family: var(--hind);
    margin-top: 15px;
  }
  .services-container {
    max-width: 1024px;
    margin: 50px auto 0;
    width: 100%;
    display: grid;
    grid-gap: 60px 40px;
    grid-template-columns: repeat(
      auto-fill,
      minmax(clamp(280px, 30%, 300px), 1fr)
    );
  }
  .service {
    font-family: var(--garamond);
    padding: 10px;
    text-align: center;
  }
  .service-icon {
    display: block;
    width: 2em;
    height: 2em;
    padding: 0.5em;
    margin: 0 auto 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    border-radius: 50%;
  }
  .services-container .service:nth-child(1) .service-icon {
    background: linear-gradient(45deg, blue, green);
  }
  .services-container .service:nth-child(2) .service-icon {
    background: linear-gradient(45deg, purple, orange);
  }
  .services-container .service:nth-child(3) .service-icon {
    background: linear-gradient(45deg, cyan, indigo);
  }
  .services-container .service:nth-child(4) .service-icon {
    background: linear-gradient(45deg, red, darkmagenta);
  }
  .services-container .service:nth-child(5) .service-icon {
    background: linear-gradient(45deg, crimson, chartreuse);
  }
  .services-container .service:nth-child(6) .service-icon {
    background: linear-gradient(45deg, coral, khaki);
  }
  .service-title {
    color: var(--primary-color);
  }
  .service-desc {
    color: var(--text);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .service-link {
    display: none;
    font-size: 0.9em;
    margin: 10px auto 0;
    border: none;
    font-family: var(--garamond);
    background: transparent;

    a {
      text-decoration: none;
      color: var(--secondary-color);
    }
  }
`;
