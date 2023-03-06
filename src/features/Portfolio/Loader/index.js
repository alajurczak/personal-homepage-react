import { Spinner, Description } from "./styled";

export const Loader = () => (
    <>
        <Description>Please wait, projects are being loaded...</Description>
        <Spinner />
    </>
);