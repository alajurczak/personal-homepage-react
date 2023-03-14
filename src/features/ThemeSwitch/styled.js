import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./Sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    margin: 0;
`;

export const Text = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    margin-right: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: none;
    }
`;

export const Switcher = styled.div`
    background-color: ${({ theme }) => theme.colors.switchBackground};
    width: 48px;
    height: 26px;
    border: 1px solid ${({ theme }) => theme.colors.mainFont};
    border-radius: 13px;
    display: flex;
    align-items: center;
`;

export const Icon = styled.div`
    height: 20px;
    width: 20px;
    margin: 0 3px;
    background-color: ${({ theme }) => theme.colors.mainFont};
    text-align: center;
    border-radius: 50%;
    transition: transform 0.2s linear;

    ${({ darkTheme }) => darkTheme && css`
        transform: translate(20px);
  `}
`;

export const Sun = styled(SunIcon)`
    color: ${({ theme }) => theme.colors.sunswitcher};
`;