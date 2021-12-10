import { GET_POPULAR_MOVIES, ERROR, GET_MOVIE } from "../actions/types";

const initialState = [];

function moviesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULAR_MOVIES:
      return payload;
    case GET_MOVIE:
      return payload;
    case ERROR:
      return payload;
    default:
      return state;
  }
}

export default moviesReducer;
