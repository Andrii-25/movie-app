import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";
import Header from "./Header";
import { MessengerChat } from "react-messenger-chat-plugin";

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
      <MessengerChat
        pageId="110809101051972"
        language="ua_UA"
        themeColor={"#F2F3G2"}
        height={24}
        loggedInGreeting="Hello logged in user!"
        loggedOutGreeting="Hello stranger!"
        autoExpand={true}
        debugMode={false}
        onMessengerShow={() => {
          console.log("onMessengerShow");
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide");
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow");
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide");
        }}
      />
      ;
    </>
  );
}
