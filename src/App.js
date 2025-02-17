import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { configureStore } from "@reduxjs/toolkit";
import store from "./utils/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header></Header>
        <Body></Body>
      </div>
    </Provider>
  );
}

export default App;
