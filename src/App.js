import { PersonalInfo } from "./common/PersonalInfo";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
import { Portfolio } from "./features/Portfolio";
import { Footer } from "./common/Footer";
import { ThemeSwitch } from "./common/ThemeSwitch";

function App() {
  return (
    <>
      <ThemeSwitch />
      <PersonalInfo />
      <Skills />
      <ToLearn />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
