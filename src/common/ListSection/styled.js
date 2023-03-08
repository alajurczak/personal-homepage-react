import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1216px;
    padding: 32px;
    margin-top: 63px;
    margin-bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin-top: 50px;
        padding: 16px;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.mineShaft};
    font-weight: 900;
    font-size: 30px;
    margin: 0px;
    line-height: 36px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const Line = styled.hr`
    background: rgba(209, 213, 218, 0.3);
    margin-top: 16px;
    margin-bottom: 32px;
    height: 1px;
    border: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin-top: 12px;
        margin-bottom: 12px;
    }
`;

export const List = styled.ul`
    color: ${({ theme }) => theme.colors.slateGray};
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
    }
`;

export const Item = styled.li`
    line-height: 140%;
    margin: 0;
    font-size: 18px;
    padding-right: 16px;
    
    list-style: none;
    &:before {
        content: " ";
        display: inline-block;
        width: 9px;
        height: 9px;
        background-color: ${({ theme }) => theme.colors.scienceBlue};
        border-radius: 50%;
        margin-right: 16px;
    }
`;