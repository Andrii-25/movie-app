import http from "../http-common";

class MoviesService {
  constructor() {
    this.API_KEY = process.env.REACT_APP_API_KEY;
    this.LANGUAGE = process.env.REACT_APP_LANGUAGE;
  }
  getPopularMovies(pageNumber = 1) {
    return http.get(
      `movie/popular?api_key=${this.API_KEY}&language=${this.LANGUAGE}&page=${pageNumber}`
    );
  }
  getMovie(id) {
    return http.get(
      `movie/${id}?api_key=${this.API_KEY}&language=${this.LANGUAGE}`
    );
  }
  getVideos(id) {
    return http.get(
      `movie/${id}/videos?api_key=${this.API_KEY}&language=${this.LANGUAGE}`
    );
  }
}

export default new MoviesService();
