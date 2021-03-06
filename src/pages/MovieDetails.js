import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../actions/movies";
import { message, Space, Spin, Image, Row, Col, Rate } from "antd";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import MoviesService from "../service/moviesService";

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
`;

const TrailerTitle = styled.h1`
  margin-top: 50px;
  font-size: 30px;
`;

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
      message.error("Something went wrong...");
    } finally {
      setLoading(false);
    }
  }, []);

  const imgUrl = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

  function getVideoUrl(arr) {
    const video = arr[Math.floor(Math.random() * arr.length)];
    if (video === undefined) {
      return;
    }
    return `https://www.youtube.com/embed/${video.key}`;
  }

  return (
    <AppLayout isBack={true}>
      {loading ? (
        <Spin style={{ marginTop: "25%" }} />
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
          <TrailerTitle>Video</TrailerTitle>
          <iframe
            width="800"
            height="500"
            src={getVideoUrl(videos)}
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
