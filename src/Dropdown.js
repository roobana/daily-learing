import React, { useState } from "react";
const Dropdown = () => {
  const countries = [
    {
      name: "india",
      cities: ["delhi", "mumbai"],
    },
    {
      name: "pakistan",
      cities: ["karachi", "islamapad"],
    },
    {
      name: "australia",
      cities: ["sidney", "melbourne"],
    },
  ];
  const [index, setIndex] = useState(0);
  const handleChange = (e) => {
    // const cout = document.getElementById("country").innerText;
    setIndex(e.target.value);
  };
  return (
    <>
      <h1>hello World</h1>
      <select name="Country" id="country" onChange={(e) => handleChange(e)}>
        {countries.map((country, index) => {
          return <option value={index}>{country.name}</option>;
        })}
      </select>
      <select>
        {countries[index].cities.map((city) => {
          return <option>{city}</option>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
