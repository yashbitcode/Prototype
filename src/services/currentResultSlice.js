import { createSlice } from "@reduxjs/toolkit";

const currentResultSlice = createSlice({
    name: "current",
    initialState: {
        summary: null,
        chart: null,
        error: null
    },
    reducers: {
        addCurrentData: (state, action) => {
            const {summary, chartdata, error} = action.payload;

            state.summary = summary;
            state.chart = chartdata;
            state.error = error;
        }
    }
});

export const {addCurrentData} = currentResultSlice.actions;
export default currentResultSlice.reducer;