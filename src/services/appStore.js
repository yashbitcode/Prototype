import { configureStore } from "@reduxjs/toolkit";
import suggestionReducer from "./suggestionSlice";
import currentReducer from "./currentResultSlice";
import historyReducer from "./historySlice";

const appStore = configureStore({
    reducer: {
        sugg: suggestionReducer,
        current: currentReducer,
        history: historyReducer
    }
});

export default appStore;