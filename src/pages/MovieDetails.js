import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../actions/movies";
import AppLayout from "../components/AppLayout";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies);

  useEffect(async () => {
    try {
      await dispatch(getMovie(id));
      if (movie.error) {
        message.error(movie.error);
      }
    } catch (e) {
      console.log(e);
    }
  });
  return <AppLayout>{movie.title}</AppLayout>;
}
