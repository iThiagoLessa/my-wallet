import { configureStore } from "@reduxjs/toolkit";
import themeReducers from "./reducers/themeReducers";

export const store = configureStore({
    reducer: {
        themeSelected: themeReducers,
    }
});


export default store;