import { Wrapper, Text, Switcher, Icon } from './styled';
import { ReactComponent as Sun } from './Sun.svg';

export const ThemeSwitch = () => {
    return (
        <Wrapper>
            <Text>Dark mode off</Text>
            <Switcher>
                <Icon>
                    <Sun />
                </Icon>
            </Switcher>
        </Wrapper>
    )
};