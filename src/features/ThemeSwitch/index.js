import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Text, Switcher, Icon } from './styled';
import { ReactComponent as Sun } from './Sun.svg';
import { selectDarkTheme, toogleTheme } from "./themeSwitchSlice";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(selectDarkTheme);

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