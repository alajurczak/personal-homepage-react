import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        padding: 16px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.mainFont};
        letter-spacing: 0.05em;
        display: flex;
        justify-content: center
    }
`;
