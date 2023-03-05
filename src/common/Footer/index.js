import { Caption, Email, Wrapper, Description, Icons, Link } from "./styled";
import { ReactComponent as GithubLogo } from "./logos/GithubLogo.svg";
import {ReactComponent as FacebookLogo} from "./logos/FacebookLogo.svg";
import {ReactComponent as LinkedinLogo} from "./logos/LinkedinLogo.svg";
import {ReactComponent as InstagramLogo} from "./logos/InstagramLogo.svg";

export const Footer = () => (
    <Wrapper>
        <Caption>LET'S TALK</Caption>
        <Email>ala.jurczak@gmail.com</Email>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Description>
        <Icons>
            <Link href="https://github.com/alajurczak" rel="norefferer noopener">
                <GithubLogo />
            </Link>
            <Link href="https://www.facebook.com/ala.m.jurczak" rel="norefferer noopener">
                <FacebookLogo />
            </Link>
            <Link href="https://www.linkedin.com/in/alicja-jurczak-879b5020a/" rel="norefferer noopener">
                <LinkedinLogo />
            </Link>
            <Link href="https://www.instagram.com/koalasxx/" rel="norefferer noopener">
                <InstagramLogo />
            </Link>
        </Icons>
    </Wrapper>
);