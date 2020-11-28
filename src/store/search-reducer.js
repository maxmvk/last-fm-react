import { api } from "../services/api";

const SET_RESULT = "SET_RESULT";

let initialState = {
  result: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case SET_RESULT: {
      return { 
        ...state,
        result: [ ...action.result ]
      }
    }

    default:
      return state;
  }
}

export const setResult = (result) => ({ type: SET_RESULT, result })

export const getSearchResultThunk = (data) => {
  return (dispatch) => {
    api.getSearchResult(data)
    .then(data => {
      dispatch(setResult(data.results.trackmatches.track));
    })
  }
}

export default searchReducer;