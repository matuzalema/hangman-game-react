import { combineReducers } from "redux";
import words from "./reducer-data";

const reducer = combineReducers({
    words: words
});

export default reducer;