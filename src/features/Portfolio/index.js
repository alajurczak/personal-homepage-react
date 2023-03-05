import { Wrapper, Title, Description } from "./styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { Tiles } from "./Tiles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories, selectStatus } from "../Homepage/homepageSlice";


export const Portfolio = () => {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <Wrapper>
            <Logo />
            <Title>Portfolio</Title>
            <Description>My recent projects</Description>
            {
                status === "loading"
                    ? (<p>loading</p>)
                    : (status === "error"
                        ? (<p>error</p>)
                        : (<Tiles />)
                    )
            }
        </Wrapper>
    )
};