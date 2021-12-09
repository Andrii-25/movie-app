import http from "../http-common";

class MoviesService {
  getPopularMovies(pageNumber = 1) {
    return http.get(
      `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=${pageNumber}`
    );
  }
}

export default new MoviesService();