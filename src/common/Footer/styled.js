import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 691px;
`;

export const Caption = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    padding-bottom: 12px;
    margin: 0;
`;

export const Email = styled.p`
    padding: 12px 0px;
    margin: 0;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    color: ${({ theme }) => theme.colors.mineShaft};
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.scienceBlue};
        cursor: pointer;
    }
`;

export const Description = styled.p`
    margin: 0;
    padding-top: 12px;
    padding-bottom: 28px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.mineShaft};
`;

export const Icons = styled.div`
    padding-top: 28px;
    padding-bottom: 94px;
`;

export const Link = styled.a`
    padding-right: 24px;
`;
