import "antd/dist/antd.css";
import "./App.css";
import Router from "./Router";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="App">
      <Router />
      <MessengerCustomerChat
        pageId="100030477510943"
        appId="1602695806755817"
      />
    </div>
  );
}

export default App;
