import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1216px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        grid-template-columns: 1fr;
    }
`;

export const Tile = styled.div`
    max-width: 592px;
    background-color: ${({ theme }) => theme.colors.sectionsBackground};
    padding: 56px;
    padding-bottom: 48px;
    border: 6px solid ${({ theme }) => theme.colors.tilesBorder};
    border-radius: 4px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    transition: 0.5s;

    &:hover {
        border: 6px solid ${({ theme }) => theme.colors.tilesBorderHover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
       padding: 24px;
    }
`;

export const Title = styled.h3`
    margin: 0;
    font-weight: 700px;
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.tilesTitle};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 16px;
    }
`;

export const Descripion = styled.p`
    margin: 24px 0px;
    line-height: 140%;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 14px;
    }
`;
export const LinkWrapper = styled.p`
    margin: 0;
    line-height: 140%;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 14px;
    }
`;
export const Link = styled.a`
    padding-left: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    border-bottom: 1px solid ${({ theme }) => theme.colors.tilesBorderHover};
    &:hover {
        border-bottom: 1px solid rgb(3, 102, 214, 0.8);
    }
`;

