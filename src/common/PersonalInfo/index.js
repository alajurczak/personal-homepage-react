import { Wrapper, Image, Caption, Name, Information, Header, Button, Icon } from "./styled";
import personalPhoto from "./personalPhoto.jpg";

export const PersonalInfo = () => (
    <Wrapper>
        <Image src={personalPhoto} alt="Alicja Jurczak" />
        <Header>
            <Caption>THIS IS</Caption>
            <Name>Alicja Jurczak</Name>
            <Information>
                Hi! I'm a beginner Frontend Developer who is passionate about new technologies and React. I'm an ambitious and fast learning person. In my work, I would like to use my knowledge and creativity to create aesthetic projects.
            </Information>
            <Button>
                {<Icon />}
                Hire Me
                </Button>
        </Header>
    </Wrapper>
);