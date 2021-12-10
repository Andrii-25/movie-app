import { GET_VIDEOS, ERROR } from "../actions/types";
import MoviesService from "../service/moviesService";

export const getVideos = (id) => async (dispatch) => {
  const res = await MoviesService.getVideos(id);
  try {
    dispatch({
      type: GET_VIDEOS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { error: err.message },
    });
  }
};
