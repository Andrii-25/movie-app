import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../actions/movies";
import { List, message } from "antd";
import AppLayout from "../components/AppLayout";
import Movie from "../components/Movie";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(async () => {
    try {
      setLoading(true);
      await dispatch(getPopularMovies());
      if (movies.error) {
        message.error(movies.error);
      }
    } catch (e) {
      message.error("Something went wrong...");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AppLayout>
      <List
        dataSource={movies}
        itemLayout="vertical"
        size="large"
        renderItem={(item) => <Movie data={item} />}
        loading={loading}
      ></List>
    </AppLayout>
  );
}
