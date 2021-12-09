import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";
import Header from "./Header";

export default function AppLayout({ children }) {
  const StyledLayout = styled(Layout)`
    height: 100vh;
  `;
  return (
    <StyledLayout>
      <Header />
      <Content className="site-layout-background">{children}</Content>
    </StyledLayout>
  );
}
