import "antd/dist/antd.css";
import "./App.css";
import Router from "./Router";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="App">
      <Router />
      <MessengerCustomerChat
        pageId="110809101051972"
        appId="143293964389622"
      />
    </div>
  );
}

export default App;
