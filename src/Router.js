import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import MoviesPage from "./pages/MoviesPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
