import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [btn, setBtn] = useState(true);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  const handleClick = () => {
    if (btn) {
      setBtn(false);
      let temp = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setTime(temp);
    } else {
      console.log("interval");
      // debugger;
      setBtn(true);
      clearInterval(time);
    }
    // btn === "start" ? setBtn("stop") : setBtn("start");
  };

  return (
    <>
      {
        <div>
          <p>{count}</p>
          <button className="button" onClick={handleClick}>
            {btn ? "start" : "stop"}
          </button>
        </div>
      }
    </>
  );
};
export default App;
