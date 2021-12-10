import { message, Space, Spin, Image, Row, Col, Rate } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../actions/movies";
import AppLayout from "../components/AppLayout";
import MoviesService from "../service/moviesService";
import styled from "styled-components";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      await dispatch(getMovie(id));
      const res = await MoviesService.getVideos(id);
      setVideos(res.data.results);
      if (movie.error) {
        message.error(movie.error);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => setLoading(false));
      console.log(videos);
    }
  }, []);

  const StyledSpace = styled(Space)`
    width: 95%;
    border-radius: 5px;
    margin-top: 35px;
  `;

  const Wrapper = styled.div`
    width: 725px;
    height: 450px;
    padding: 5px;
  `;

  const StyledCol = styled(Col)`
    width: 50%;
  `;

  const StyledRow = styled(Row)`
    display: flex;
    justify-content: center;
  `;

  const StyledRate = styled(Rate)`
    font-size: 30px;
  `;

  const Overview = styled.p`
    text-align: left;
    font-size: 17px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;

  const TrailerTitle = styled.h1`
    margin-top: 50px;
    font-size: 30px;
  `;

  const imgUrl = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

  function getVideoUrl() {
    const trailer = findTrailer(videos)[0];
    if (!trailer) {
      return;
    }
    return `https://www.youtube.com/embed/${trailer.key}`;
  }

  function findTrailer(arr) {
    return arr.filter((v) => v.name.toLowerCase().match("official trailer"));
  }

  return (
    <AppLayout>
      {loading ? (
        <Spin />
      ) : (
        <>
          <StyledSpace>
            <Image width={300} src={imgUrl} />
            <Wrapper>
              <h1>{movie.title}</h1>
              <StyledRow>
                <StyledRate value={movie.vote_average} count={10} disabled />
              </StyledRow>
              <br />
              <Row>
                <Overview>{movie.overview}</Overview>
              </Row>
              <br />
              <Row>
                <StyledCol>
                  <h2>Release date:</h2>
                </StyledCol>
                <StyledCol>
                  <h2>{movie.release_date}</h2>
                </StyledCol>
              </Row>
              <br />
              <Row>
                <StyledCol>
                  <h2>Budget:</h2>
                </StyledCol>
                <StyledCol>
                  <h2>{movie.budget}$</h2>
                </StyledCol>
              </Row>
              <br />
              <Row>
                <StyledCol>
                  <h2>Runtime:</h2>
                </StyledCol>
                <StyledCol>
                  <h2>{movie.runtime} minutes</h2>
                </StyledCol>
              </Row>
            </Wrapper>
          </StyledSpace>
          <TrailerTitle>Trailer</TrailerTitle>
          <iframe
            width="800"
            height="500"
            src={getVideoUrl()}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </>
      )}
    </AppLayout>
  );
}
