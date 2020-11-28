import { api } from "../services/api";

const SET_TRACKS = "SET_TRACKS";

let initialState = {
  tracks: []
}

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case SET_TRACKS: {
      return { 
        ...state,
        tracks: [ ...action.tracks ]
      }
    }

    default:
      return state;
  }
}

export const setTracks = (tracks) => ({ type: SET_TRACKS, tracks })

export const getTracksThunk = () => {
  return (dispatch) => {
    api.getTopTracks()
    .then(data => {
      dispatch(setTracks(data.tracks.track));
    })
  }
}

export default tracksReducer;