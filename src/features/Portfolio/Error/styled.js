import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h3`
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.secondFont};
`;

export const Description = styled.p`
    margin: 16px 0;
    text-align: center;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondFont};
`;

export const Button = styled.a`
    width: 170px;
    margin-top: 16px;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.tilesBorder};
    border-radius: 4px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
        cursor: pointer;
    }
    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;