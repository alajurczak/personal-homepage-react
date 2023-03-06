import { Wrapper, Title, Description } from "./styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { Tiles } from "./Tiles";
import { Error } from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories, selectStatus } from "../Homepage/homepageSlice";
import { Loader } from "./Loader";

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
                    ? (<Loader />)
                    : (status === "error"
                        ? (<Error />)
                        : (<Tiles />)
                    )
            }
        </Wrapper>
    )
};