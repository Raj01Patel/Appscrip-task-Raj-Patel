import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer.js";

export const store = configureStore({
    reducer: {
        search: searchReducer,
    }
})