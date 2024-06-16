import React, { useState } from "react";

const UpperText = () => {
  const [str, setStr] = useState("");
  //   const handleChange = (e) => {
  //     setStr(e.target.value.toUpperCase());
  //   };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setStr(e.target.value.toUpperCase())}
      />
      <p>{str}</p>
    </>
  );
};

export default UpperText;
