import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPopularMovies } from "./actions/movies";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(async () => {
    await dispatch(getPopularMovies());
  });

  return <div className="App">{JSON.stringify(movies)}</div>;
}

export default App;
