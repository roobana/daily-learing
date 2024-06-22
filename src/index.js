import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Dropdown from "./Dropdown";
// import UpperText from "./UpperText";
// import Props from "./Props";
// import Counter from "./counter";
// import ShowHide from "./ShowHide";
import Tododel from "./tododel";
import LineThrough from "./LineThrough";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ShowHide /> */}
    {/* <App />
     */}
    {/* <Dropdown /> */}
    {/* <UpperText /> */}
    {/* <Props />/<Counter /> */}
    <Tododel />
    {/* <LineThrough /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
