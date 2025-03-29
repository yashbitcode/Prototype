import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name: "sugg",
    initialState: {
        suggestionCache: {}
    },
    reducers: {
        addSugg: (state, action) => {
            const {searchQuery, sugg} = action.payload;

            state.suggestionCache[searchQuery] = sugg;
        }
    }
});

export const {addSugg} = suggestionSlice.actions;
export default suggestionSlice.reducer;