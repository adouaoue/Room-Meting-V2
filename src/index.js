import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { userReducer } from "./store/reducer";
import HomePage from "./components/HomePage/HomePage";



export const store = createStore(userReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
