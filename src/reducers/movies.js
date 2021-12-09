import { GET_POPULAR_MOVIES, ERROR } from "../actions/types";

const initialState = [];

function moviesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULAR_MOVIES:
      return payload;
    case ERROR:
      return payload;
    default:
      return state;
  }
}

export default moviesReducer;
