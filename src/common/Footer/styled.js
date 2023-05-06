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

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding-bottom: 6px;
  }
`;

export const Email = styled.a`
  padding: 12px 0px;
  margin: 0;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.secondFont};
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
    padding: 6px 0;
    line-height: 22px;
  }
`;

export const Description = styled.p`
  margin: 0;
  padding-top: 12px;
  padding-bottom: 28px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.secondFont};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
  }
`;

export const Icons = styled.div`
  padding-top: 28px;
  padding-bottom: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding-top: 16px;
    padding-bottom: 31px;
  }
`;

export const Link = styled.a`
  padding-right: 24px;
  color: ${({ theme }) => theme.colors.secondFont};
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
