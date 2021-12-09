import { Space, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../actions/movies";
import AppLayout from "../components/AppLayout";
import Movie from "../components/Movie";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies) || [];

  useEffect(async () => {
    try {
      setLoading(true);
      await dispatch(getPopularMovies());
      console.log(movies);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AppLayout>
      <Space align="center" direction="vertical">
        {movies.results.map((m) => {
          return <Movie key={m.id} data={m} />;
        })}
      </Space>
    </AppLayout>
  );
}
