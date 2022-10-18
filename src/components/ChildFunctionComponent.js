import React from "react";

const ChildFunctionComponent = (props) => {
  const { name, dev, greetHandler } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{dev}</div>
      <button onClick={() => greetHandler("Child")}>
        Click to greet parent
      </button>
    </div>
  );
};

export default ChildFunctionComponent;
