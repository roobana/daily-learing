import React from "react";
import PropTypes from "prop-types";
// named export
const Props = ({ name = "roob", age = 26 }) => {
  return (
    <div>
      <h1>
        hello,{name} your age is {age}
      </h1>
    </div>
  );
};

Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
export default Props;
