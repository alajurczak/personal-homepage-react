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
        fetchRepositoriesSuccess: state => { state.status = "success" },
        setRepositories: (state, { payload }) => {
            state.repositories = payload.sort((a, b) => b.created_at.localeCompare(a.created_at));
        }
    }
});

export const {
    fetchRepositories,
    fetchRepositoriesError,
    fetchRepositoriesSuccess,
    setRepositories
} = homepageSlice.actions;

const selectHomepageSlice = state => state.homepage;
export const selectRepositories = state => selectHomepageSlice(state).repositories;
export const selectStatus = state => selectHomepageSlice(state).status;

export default homepageSlice.reducer;