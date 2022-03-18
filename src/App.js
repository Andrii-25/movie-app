import "antd/dist/antd.css";
import { FacebookProvider, MessageUs } from "react-facebook";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Router />
      <FacebookProvider appId="143293964389622">
        <MessageUs messengerAppId="143293964389622" pageId="110809101051972" />
      </FacebookProvider>
    </div>
  );
}

export default App;
