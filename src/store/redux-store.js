import { createStore, combineReducers, applyMiddleware } from "redux";
import tracksReducer from "./tracks-reducer";
import thunkMiddleware from "redux-thunk"
import artistReducer from "./artist-reducer";
import searchReducer from "./search-reducer";

let reducers = combineReducers({
  tracksState: tracksReducer,
  artistState: artistReducer,
  searchState: searchReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;