import { api } from "../services/api";

const SET_ARTIST_INFO = "SET_ARTIST_INFO";

let initialState = {
  info: {
    bio: {
      content: ""
    },
    image: null,
    name: "",
    tags: {
      tag: []
    }
  }
}

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case SET_ARTIST_INFO: {
      return { 
        ...state,
        info: action.info
      }
    }

    default:
      return state;
  }
}

export const setArtistInfo = (info) => ({ type: SET_ARTIST_INFO, info })

export const getArtistInfoThunk = (artistName) => {
  return (dispatch) => {
    api.getArtistInfo(artistName)
    .then(data => {
      console.log(data.artist);
      dispatch(setArtistInfo(data.artist));
    })
  }
}

export default artistReducer;