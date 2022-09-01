import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  translucentEffect: "rgba(255, 255, 255, 0.7)",
  garamond: "'EB Garamond', serif",
  hind: "'Hind Madurai', sans-serif",
  primaryColor: "#f46e16",
  primaryColorHover: "#fef2eb",
  primaryColorActive: "#fbd0b5",
  secondaryColor: "#63b231",
  darkSecondaryColor: " #8ad259",
  lightTint: "#54f6f6",
  darkTint: "#fb413f",
  deepGray: "rgba(0, 0, 0, 1)",
  whitesmoke: "whitesmoke",
  midGray: "#d9d9d9",
  darkMidGray: "#bababa",
  secondaryDarkMidGray: "rgba(0, 149, 12, 0.5)",
  white: "white",
  lightGray: " rgba(0, 0, 0, 0.3)",
  lightestGray: "rgba(0, 0, 0, 0.1)",
  whiteSmoke: "rgba(0, 0, 0, 0.05)",
  systemFont:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  darkGray: "rgba(0, 0, 0, 0.7)",
  textShadow: "-1px -1px var(--light-tint), 1px 1px var(--dark-tint)",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  translucentEffect: "rgba(0, 0, 0, 0.7)",
  garamond: "'EB Garamond', serif",
  hind: "'Hind Madurai', sans-serif",
  primaryColor: "#f46e16",
  primaryColorHover: "#fef2eb",
  primaryColorActive: "#fbd0b5",
  secondaryColor: "#63b231",
  darkSecondaryColor: " #8ad259",
  lightTint: "#54f6f6",
  darkTint: "#fb413f",
  deepGray: "rgba(0, 0, 0, 1)",
  whitesmoke: "whitesmoke",
  midGray: "#d9d9d9",
  darkMidGray: "#bababa",
  secondaryDarkMidGray: "rgba(0, 149, 12, 0.5)",
  white: "white",
  lightGray: " rgba(0, 0, 0, 0.3)",
  lightestGray: "rgba(0, 0, 0, 0.1)",
  whiteSmoke: "#888888",
  red: "rgba(255, 0, 0, 1)",
  systemFont:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  darkGray: "rgba(0, 0, 0, 0.7)",
  textShadow: "-1px -1px var(--light-tint), 1px 1px var(--dark-tint)",
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --garamond: ${({ theme }) => theme.garamond};
        --hind: ${({ theme }) => theme.hind};
        --background: ${({ theme }) => theme.body};
        --text: ${({ theme }) => theme.text};
        --primary-color: ${({ theme }) => theme.primaryColor};
        --primary-color-hover:  ${({ theme }) => theme.primaryColorHover};
        --primary-color-active: ${({ theme }) => theme.primaryColorActive};
        --secondary-color: ${({ theme }) => theme.secondaryColor};
        --dark-secondary-color: ${({ theme }) => theme.darkSecondaryColor};
        --light-tint: ${({ theme }) => theme.lightTint};
        --dark-tint: ${({ theme }) => theme.darkTint};
        --deep-gray: ${({ theme }) => theme.deepGray};
        --whitesmoke: ${({ theme }) => theme.whiteSmoke};
        --mid-gray: ${({ theme }) => theme.midGray};
        --dark-mid-gray: ${({ theme }) => theme.darkMidGray};
        --secondary-dark-mid-gray:${({ theme }) => theme.secondaryDarkMidGray};
        --white: ${({ theme }) => theme.white};
        --red: ${({ theme }) => theme.red};
        --light-gray: ${({ theme }) => theme.lightGray};
        --lightest-gray: ${({ theme }) => theme.lightestGray}
        --whitesmoke: ${({ theme }) => theme.whiteSmoke};
        --system-font: ${({ theme }) => theme.systemFont};
        --dark-gray: ${({ theme }) => theme.darkGray};
        --translucent-white: ${({ theme }) => theme.translucentEffect};
        --text-shadow: ${({ theme }) => theme.textShadow};

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        position: relative;
        background: ${({ theme }) => theme.body};
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
      color: var(--white);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
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
        color: var(--white);
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
        transform: scale(1.05);
        box-shadow: 0 5px 10px var(--primary-dark-mid-gray);
        background: var(--primary-color);
        color: var(--white);
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
      color: var(--deep-gray);
      font-weight: 500;
      transition: all 200ms ease;
      width: 100%;
      cursor: pointer;
      transition: all 300ms ease;

      :hover {
        background: var(--white);
          box-shadow: 0 5px 10px var(--secondary-dark-mid-gray);
          color: var(--secondary-color);
      }
    
    }
    .delete-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      box-shadow: 0 5px 10px var(--dark-mid-gray);
      width: 100%;
      background: var(--white);
      font-family: var(--hind);
      color: var(--red);
      font-weight: 500;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        background: var(--red);
        color: var(--white);
        transform: scale(1.05);
      }
    
    }
`;
