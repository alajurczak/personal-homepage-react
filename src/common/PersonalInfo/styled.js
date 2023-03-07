import styled from "styled-components";
import { ReactComponent as message } from "./message.svg";

export const Wrapper = styled.header`
    max-width: 1216px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center;
    margin: 0 auto;
`;

export const Image = styled.img`
    max-width: 398px;
    border-radius: 100%;
`;

export const Header = styled.div`
    max-width: 633px;
`;

export const Caption = styled.p`
    margin-top: 38px;
    margin-bottom: 6px;
    font-weight: 700;
    font-size: 17px;
    line-height: 130%;
`;

export const Name = styled.h1`
    margin-top: 6px;
    margin-bottom: 35px;
    color: ${({ theme }) => theme.colors.mineShaft};
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
`;

export const Information = styled.p`
    max-width: 633px;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin-bottom: 16px;
`;

export const Button = styled.button`
    width: 154px;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
        cursor: pointer;
    }
`;

export const Icon = styled(message)`
    margin-right: 16px;
`;
