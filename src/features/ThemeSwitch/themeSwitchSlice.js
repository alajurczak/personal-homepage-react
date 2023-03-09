import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
    name: 'themeSwitch',
    initialState: {
        darkTheme: false,
    },
    reducers: {
        toogleTheme: state => { state.darkTheme = !state.darkTheme }
    }
});

export const { toogleTheme } = themeSwitchSlice.actions;

const selectThemeSwitchSlice = state => state.themeSwitch;
export const selectDarkTheme = state => selectThemeSwitchSlice(state).darkTheme;

export default themeSwitchSlice.reducer;