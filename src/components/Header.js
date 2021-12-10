import { PageHeader, Input, Row, Tooltip, Button, message } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies } from "../actions/movies";
import { useState, forceUpdate } from "react";
import { Link } from "react-router-dom";

export default function Header({ isBack = false }) {
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
  const { Search } = Input;
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      setLoading(true);
      const { target } = event;
      const { value } = target;
      await dispatch(filterMovies(value.toLowerCase()));
      if (movies.error) {
        message.error(movies.error);
      }
    } catch (e) {
      console.log(e);
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
            loading={loading}
            enterButton
            onPressEnter={handleSubmit}
            maxLength={30}
          />,
        ]}
      ></StyledPageHeader>
    </div>
  );
}
