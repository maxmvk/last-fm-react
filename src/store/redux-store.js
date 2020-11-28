import { createStore, combineReducers } from "redux";
import tracksReducer from "./tracks-reducer";

let reducers = combineReducers({
    tracksState: tracksReducer
});

let store = createStore(reducers);

export default store;