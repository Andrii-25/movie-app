import { ERROR, GET_VIDEOS } from "../actions/types";

const initialState = [];

function videosReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_VIDEOS:
      return payload;
    case ERROR:
      return payload;
    default:
      return state;
  }
}

export default videosReducer;
