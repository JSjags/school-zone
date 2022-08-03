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
        --white: #ffffff;
        --light-gray: rgba(0, 0, 0, 0.3);
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
    
`;
