import styled from "styled-components";
import { ReactComponent as message } from "./message.svg";

export const Wrapper = styled.header`
  max-width: 1216px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Image = styled.img`
  max-width: 398px;
  border-radius: 100%;
  width: 50vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    max-width: 132px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
    margin-top: 12px;
    margin-bottom: 8px;
  }
`;

export const Name = styled.h1`
  margin-top: 6px;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.colors.secondFont};
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 22px;
    margin-bottom: 16px;
    margin-top: 0;
  }
`;

export const Information = styled.p`
  max-width: 633px;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 17px;
  }
`;

export const Button = styled.a`
  width: 154px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.tilesBorder};
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.5s;
  text-decoration: none;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
    width: 140px;
  }
`;

export const Icon = styled(message)`
  margin-right: 16px;
`;
