import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import MoviesPage from "./pages/MoviesPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
