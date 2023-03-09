import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from './features/Homepage/homepageSlice';
import rootSaga from './rootSaga';
import themeSwitchReducer from "./features/ThemeSwitch/themeSwitchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        homepage: homepageReducer,
        themeSwitch: themeSwitchReducer
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;