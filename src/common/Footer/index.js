import { Caption, Email, Wrapper, Description, Icons, Link } from "./styled";
import { ReactComponent as GithubLogo } from "./logos/GithubLogo.svg";
import { ReactComponent as FacebookLogo } from "./logos/FacebookLogo.svg";
import { ReactComponent as LinkedinLogo } from "./logos/LinkedinLogo.svg";
import { ReactComponent as InstagramLogo } from "./logos/InstagramLogo.svg";

export const Footer = () => (
  <Wrapper id="hire-me">
    <Caption>LET'S TALK</Caption>
    <Email href="mailto:ala.jurczak@gmail.com">ala.jurczak@gmail.com</Email>
    <Description>
      I'm always open to new projects and ideas. If you are looking for a
      committed team member with great desire to continuously expand knowledge
      and a passion for teamwork, feel free to contact me.
    </Description>
    <Icons>
      <Link href="https://github.com/alajurczak" rel="norefferer noopener">
        <GithubLogo />
      </Link>
      <Link
        href="https://www.facebook.com/ala.m.jurczak"
        rel="norefferer noopener"
      >
        <FacebookLogo />
      </Link>
      <Link
        href="https://www.linkedin.com/in/alicja-jurczak-879b5020a/"
        rel="norefferer noopener"
      >
        <LinkedinLogo />
      </Link>
      <Link
        href="https://www.instagram.com/koalasxx/"
        rel="norefferer noopener"
      >
        <InstagramLogo />
      </Link>
    </Icons>
  </Wrapper>
);
