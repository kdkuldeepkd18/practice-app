import React from "react";

const FunctionChildCounter = (props) => {
  console.log("Child Component");
  console.log(props.data);
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
};

export default FunctionChildCounter;
