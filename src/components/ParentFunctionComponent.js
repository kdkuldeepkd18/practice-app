// import React, { Component } from "react";
// import ChildFunctionComponent from "./ChildFunctionComponent";

// class ParentFunctionComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "",
//     };
//   }
//   greetParent = (childName) => {
//     alert(`Hello Parent ${childName}`);
//   };
//   render() {
//     return (
//       <div>
//         <h2>Parent Component</h2>
//         <ChildFunctionComponent
//           name="Kuldeep"
//           dev="Web Dev"
//           greetHandler={this.greetParent}
//         />
//       </div>
//     );
//   }
// }

// export default ParentFunctionComponent;

import React from "react";
import ChildFunctionComponent from "./ChildFunctionComponent";

const ParentFunctionComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello Parent ${childName}`);
  };
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildFunctionComponent
        name="Kuldeep"
        dev="Web Dev"
        greetHandler={greetParent}
      />
    </div>
  );
};

export default ParentFunctionComponent;
