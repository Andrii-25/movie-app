import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "./App.css";
import { getPopularMovies } from "./actions/movies";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(async () => {
    await dispatch(getPopularMovies());
  });

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
