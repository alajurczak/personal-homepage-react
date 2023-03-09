import { PersonalInfo } from "../../common/PersonalInfo";
import { Skills } from ".././Skills";
import { ToLearn } from ".././ToLearn";
import { Portfolio } from ".././Portfolio";
import { Footer } from "../../common/Footer";
import { ThemeSwitch } from ".././ThemeSwitch";

const Homepage = () => (
    <>
        <ThemeSwitch />
        <PersonalInfo />
        <Skills />
        <ToLearn />
        <Portfolio />
        <Footer />
    </>
);

export default Homepage;
