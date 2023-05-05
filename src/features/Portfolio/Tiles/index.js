import { selectRepositories } from "../../Homepage/homepageSlice";
import { Wrapper, Tile, Title, Descripion, LinkWrapper, Link } from "./styled";
import { useSelector } from "react-redux";

export const Tiles = () => {
    const repositories = useSelector(selectRepositories);

    return (
        <Wrapper>
            {repositories.map(repo => (
                <Tile key={repo.id}>
                    <Title>{repo.name}</Title>
                    <Descripion>{repo.description}</Descripion>

                    <LinkWrapper>
                        Demo:
                        <Link
                            href={`https://${repo.owner.login}.github.io/${repo.name}`}
                            title={`https://${repo.owner.login}.github.io/${repo.name}`}
                            target="_blank"
                            rel="noreferrer noopener">
                            https://link.demo.com
                        </Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        Code:
                        <Link
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer noopener">
                            https://link.code.com
                        </Link>
                    </LinkWrapper>
                </Tile>
            ))}
        </Wrapper>
    )
};