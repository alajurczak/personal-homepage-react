import { ReactComponent as DangerIcon } from "./Danger.svg";
import { Button, Description, Title, Wrapper } from "./styled";

export const Error = () => (
    <Wrapper>
        <DangerIcon />
        <Title>Ooops! Something went wrong...</Title>
        <Description>Sorry, failed to load Github projects.<br />You can check them directly on Github.</Description>
        <Button href="https://github.com/alajurczak" title="https://github.com/alajurczak" target="_blank" rel="noreferrer noopener">Go to Github</Button>
    </Wrapper>
);