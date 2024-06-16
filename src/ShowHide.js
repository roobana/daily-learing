import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const handleButton = () => {
    // if (hide) {
    //   setHide(false);
    // } else {
    //   setHide(true);
    // }
    show ? setShow(false) : setShow(true);
    // (show && setShow(false)) || setShow(true);
  };

  return (
    <>
      <div>
        {/* {hide ? <p>Hello World</p> : null} */}
        <p className={show ? "show" : "hide"}>Hello World</p>
        <button className="clickButton" onClick={handleButton}>
          Click Me
        </button>
        {/* <button className="hideButton" onClick={() => setHide(false)}>
          Hide
        </button>
        <button className="showButton" onClick={() => setHide(true)}>
          Show
        </button> */}
      </div>
    </>
  );
}
