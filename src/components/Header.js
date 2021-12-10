import { PageHeader, Input, Row, Tooltip, Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies } from "../actions/movies";
import { useState } from "react";

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
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      setLoading(true);
      const { target } = event;
      const { value } = target;
      await dispatch(filterMovies(value.toLowerCase()));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="site-page-header-ghost-wrapper">
      <StyledPageHeader
        onBack={() => window.history.back()}
        backIcon={false}
        title={
          <Row>
            {isBack ? (
              <Tooltip>
                <Wrapper>
                  <StyledButton type="text">
                    <RollbackOutlined />
                  </StyledButton>
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
