import { PersonalInfo } from "./common/PersonalInfo";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
import { Portfolio } from "./features/Portfolio";
import { Footer } from "./common/Footer";

function App() {
  return (
    <>
      <PersonalInfo />
      <Skills />
      <ToLearn />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
