import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "homepage",
    initialState: {
        repositories: [],
        status: "loading"
    },
    reducers: {
        fetchRepositories: state => { state.status = "loading" },
        fetchRepositoriesError: state => { state.status = "error" },
        fetchRepositoriesSuccess: state => { state.status = "success" }
    }
});

export const {
    fetchRepositories,
    fetchRepositoriesError,
    fetchRepositoriesSuccess
} = homepageSlice.actions;

const selectHomepageSlice = state => state.homepage;
export const selectStatus = state => selectHomepageSlice(state).status;

export default homepageSlice.reducer;