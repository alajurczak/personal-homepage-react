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
        background-color: ${({ theme }) => theme.colors.whiteLilac};
        padding: 115px 345px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.slateGray};
        letter-spacing: 0.05em;
    }
`;