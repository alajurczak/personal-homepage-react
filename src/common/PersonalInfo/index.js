import { Wrapper, Image, Caption, Name, Information, Header, Button, Icon } from "./styled";
import personalPhoto from "./personalPhoto.jpg";

export const PersonalInfo = () => (
    <Wrapper>
        <Image src={personalPhoto} alt="Alicja Jurczak" />
        <Header>
            <Caption>THIS IS</Caption>
            <Name>Alicja Jurczak</Name>
            <Information>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dolor nibh. Nullam finibus enim dui, sit amet sollicitudin ex faucibus quis.
            </Information>
            <Button>
                {<Icon />}
                Hire Me
                </Button>
        </Header>
    </Wrapper>
);