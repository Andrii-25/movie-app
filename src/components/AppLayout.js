import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
  background-color: #324551;
`;

const StyledContent = styled(Content)`
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: #f0f2f5;
  margin-left: 10%;
  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 5px;
  padding-bottom: 25px;
`;

export default function AppLayout({ children, isBack }) {
  return (
    <>
      <StyledLayout>
        <Header isBack={isBack} />
        <StyledContent>{children}</StyledContent>
      </StyledLayout>
    </>
  );
}
