import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
