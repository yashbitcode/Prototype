import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: {
        history: [],
    },
    reducers: {
        addHistory: (state, action) => {
            const {searchQuery, result} = action.payload;

            state.history.push({searchQuery, result});
        }
    }
});

export const {addHistory} = historySlice.actions;
export default historySlice.reducer;