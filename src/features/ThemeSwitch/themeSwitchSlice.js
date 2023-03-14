import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
    name: 'themeSwitch',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toogleTheme: state => { state.darkMode = !state.darkMode }
    }
});

export const { toogleTheme } = themeSwitchSlice.actions;

const selectThemeSwitchSlice = state => state.themeSwitch;
export const selectDarkMode = state => selectThemeSwitchSlice(state).darkMode;

export default themeSwitchSlice.reducer;