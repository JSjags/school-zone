import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --garamond: 'EB Garamond', serif;
        --hind: 'Hind Madurai', sans-serif;
        --primary-color: #f46e16;
        --secondary-color: #63b231;
        --light-tint: #54f6f6;
        --dark-tint: #fb413f;
        --deep-gray: rgba(0, 0, 0, 1);
        --whitesmoke: whitesmoke;
        --mid-gray: #d9d9d9;
        --dark-mid-gray: #bababa;
        --secondary-dark-mid-gray: rgba(0, 149, 12, 0.5);
        --white: #ffffff;
        --light-gray: rgba(0, 0, 0, 0.3);
        --lightest-gray: rgba(0, 0, 0, 0.1);
        --whitesmoke: rgba(0, 0, 0, 0.05);
        --system-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        --dark-gray: rgba(0, 0, 0, 0.7);
        --translucent-white: rgba(255, 255, 255, 0.9);
        --text-shadow: 
        -1px -1px var(--light-tint),
        1px 1px var(--dark-tint);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        position: relative;
    }
     h1, h2, h3, h4, h5, label {
        color: var(--primary-color);
        font-family: var(--garamond);
    }
    .primary-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--primary-color);
      font-family: var(--hind);
      color: white;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    
    }
    .secondary-btn {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--white);
      font-family: var(--hind);
      border: 2px solid var(--secondary-color);
      color: var(--secondary-color);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
        box-shadow: 0 5px 10px var(--secondary-dark-mid-gray);
        background: var(--secondary-color);
        color: white;
      }
    }
    .primary-white-btn {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--white);
      font-family: var(--hind);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
        box-shadow: 0 5px 10px var(--primary-dark-mid-gray);
        background: var(--primary-color);
        color: white;
      }
    }
    .white-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--white);
      font-family: var(--hind);
      color: black;
      font-weight: 500;
      transition: all 200ms ease;
      width: 100%;
      cursor: pointer;
      transition: all 300ms ease;

      :hover {
        background: white;
          box-shadow: 0 5px 10px var(--secondary-dark-mid-gray);
          color: var(--secondary-color);
      }
    
    }
`;
