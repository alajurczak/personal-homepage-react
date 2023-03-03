import { Wrapper, Tile, Title, Descripion, LinkWrapper, Link } from "./styled";

export const Tiles = () => (
    <Wrapper>
        <Tile>
            <Title>Movie Browser</Title>
            <Descripion>
                Project description, e.g. website where you cansearch for favourite movies and people. Project
                description, e.g. website where you can search.
            </Descripion>
            <div>
                <LinkWrapper>
                    Demo:
                    <Link href="https://link.demo.com" target="_blank" rel="noreferrer noopener">
                    https://link.demo.com
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    Code:
                    <Link href="https://link.demo.com" target="_blank" rel="noreferrer noopener">
                    https://link.code.com
                    </Link>
                </LinkWrapper>
            </div>
        </Tile>
    </Wrapper>
);