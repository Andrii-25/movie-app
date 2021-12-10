import { GET_POPULAR_MOVIES, GET_MOVIE, ERROR } from "../actions/types";
import MoviesService from "../service/moviesService";

export const getPopularMovies = (pageNumber) => async (dispatch) => {
  try {
    const res = await MoviesService.getPopularMovies(pageNumber);
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { error: err.message },
    });
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    const res = await MoviesService.getMovie(id);
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { error: err.message },
    });
  }
};
