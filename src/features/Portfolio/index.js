import { Wrapper, Title, Description } from "./styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { Tiles } from "./Tiles";

export const Portfolio = () => (
    <Wrapper>
        <Logo />
        <Title>Portfolio</Title>
        <Description>My recent projects</Description>
        <Tiles />
    </Wrapper>
);