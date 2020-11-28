import { createStore, combineReducers, applyMiddleware } from "redux";
import tracksReducer from "./tracks-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    tracksState: tracksReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;