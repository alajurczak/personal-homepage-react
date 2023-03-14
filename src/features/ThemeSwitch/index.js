import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Text, Switcher, Icon, Sun } from './styled';
import { selectDarkMode, toogleTheme } from "./themeSwitchSlice";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(selectDarkMode);

    return (
        <Wrapper onClick={() => dispatch(toogleTheme())}>
            <Text>Dark mode {darkTheme ? "on" : "off"}</Text>
            <Switcher>
                <Icon darkTheme={darkTheme}>
                    <Sun />
                </Icon>
            </Switcher>
        </Wrapper>
    )
};