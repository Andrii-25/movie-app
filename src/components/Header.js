import { useState, forceUpdate } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies } from "../actions/movies";
import { PageHeader, Input, Row, Tooltip, Button, message } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPageHeader = styled(PageHeader)`
  height: 70px;
  background-color: #032541;
`;

const StyledH2 = styled.h2`
  color: #1cb8d9;
`;
const Wrapper = styled.div`
  height: 100%;
  margin: -7px 15px 0 -15px;
`;
const StyledButton = styled(Button)`
  color: white;
  font-size: 25px;
`;

export default function Header({ isBack = false }) {
  const { Search } = Input;
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [loading, setLoading] = useState(false);

  async function onSearch(value) {
    try {
      setLoading(true);
      await dispatch(filterMovies(value.toLowerCase()));
      if (movies.error) {
        message.error(movies.error);
      }
    } catch (e) {
      message.error("Something went wrong...");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="site-page-header-ghost-wrapper">
      <StyledPageHeader
        backIcon={false}
        title={
          <Row>
            {isBack ? (
              <Tooltip>
                <Wrapper>
                  <Link to="/" onClick={() => forceUpdate()}>
                    <StyledButton type="text">
                      <RollbackOutlined />
                    </StyledButton>
                  </Link>
                </Wrapper>
              </Tooltip>
            ) : null}
            <StyledH2>Movie App</StyledH2>
          </Row>
        }
        extra={[
          <Search
            placeholder="Search movie..."
            type="text"
            loading={loading}
            enterButton
            disabled={loading}
            onSearch={onSearch}
            onPressEnter={onSearch}
            maxLength={30}
            allowClear
          />,
        ]}
      ></StyledPageHeader>
    </div>
  );
}
