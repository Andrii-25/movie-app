import {
  GET_POPULAR_MOVIES,
  ERROR,
  GET_MOVIE,
  FILTER_MOVIES,
} from "../actions/types";

const initialState = [];

function moviesReducer(state = initialState, action) {
  const { type, payload, name } = action;

  switch (type) {
    case GET_POPULAR_MOVIES:
      return payload;
    case GET_MOVIE:
      return payload;
    case FILTER_MOVIES:
      return state.filter((item) => item.title.toLowerCase().match(name));
    case ERROR:
      return payload;
    default:
      return state;
  }
}

export default moviesReducer;
