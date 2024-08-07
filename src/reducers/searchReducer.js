import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: '',
    filters: []
};

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        SET_SEARCH_INPUT: (state, action) => {
            state.input = action.payload;
        },
        SET_FILTER: (state, action) => {
            state.filters = [...state.filters, action.payload]
        },
        CLEAR_FILTER: (state, action) => {
            state.filters = state.filters.filter(filter => filter !== action.payload)
        }

    }
})

export const { SET_SEARCH_INPUT, SET_FILTER, CLEAR_FILTER } = SearchSlice.actions;
export default SearchSlice.reducer;