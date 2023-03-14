import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import Homepage from "./features/Homepage";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/ThemeSwitch/themeSwitchSlice";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
