import styled, { keyframes } from "styled-components";

export const Description = styled.p`
    line-height: 140%;
    margin-bottom: 48px;
`;

const rotation = keyframes`
    0% { transform: none; }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    margin: 0 auto;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 14px solid rgba(209, 213, 218, 0.3);
    border-top-color: ${({ theme }) => theme.colors.scienceBlue};
    animation: ${rotation} 1s 0s infinite linear forwards, ease-in-out alternate;
 `;