import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 72px;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondFont};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin-bottom: 48px;
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin-top: 12px;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin: 0;
    margin-bottom: 24px;
`;