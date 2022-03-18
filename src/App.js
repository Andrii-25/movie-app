import "antd/dist/antd.css";
import "./App.css";
import Router from "./Router";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="App">
      <Router />
      <MessengerCustomerChat
        pageId="100079180404642"
        appId="335988321915386"
      />
    </div>
  );
}

export default App;
