import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --garamond: 'EB Garamond', serif;
        --hind: 'Hind Madurai', sans-serif;
        --primary-color: #f46e16;
        --secondary-color: #63b231;
        --light-tint: #54f6f6;
        --dark-tint: #fb413f;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`