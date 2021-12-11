import { Link } from "react-router-dom";
import { Rate, Space, Image, Row } from "antd";
import styled from "styled-components";

const StyledSpace = styled(Space)`
  max-width: 700px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledImage = styled(Image)`
  margin: 3px;
  border-radius: 3px;
`;

const Overview = styled.p`
  text-align: left;
  font-size: 17px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 520px;
  height: 230px;
  padding: 5px;
`;

export default function Movie({ data }) {
  const imgUrl = `http://image.tmdb.org/t/p/w500${data.poster_path}`;

  return (
    <StyledSpace>
      <Link to={`movie/${data.id}`}>
        <StyledImage width={170} height={240} src={imgUrl} preview={false} />
      </Link>
      <Wrapper>
        <Link to={`movie/${data.id}`}>
          <h1>
            {data.title}&nbsp;({data.release_date.substring(0, 4)})
          </h1>
        </Link>
        <br />
        <Row>
          <Overview>{data.overview}</Overview>
        </Row>
        <br />
        <Rate value={data.vote_average} count={10} disabled />
      </Wrapper>
    </StyledSpace>
  );
}
