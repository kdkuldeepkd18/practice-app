import React, { useState, useEffect } from "react";
import axios from "axios";
import FunctionChildCounter from "./FunctionChildCounter";

const FunctionCounter = () => {
  const [notes, getNotes] = useState("");
  const DUMMY_API = "https://jsonplaceholder.typicode.com/posts";
  const getData = () => {
    axios
      .get(DUMMY_API)
      .then((response) => {
        const allNotes = response.data;
        console.log(allNotes);
        getNotes(allNotes);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Parent Component</h2>
      <FunctionChildCounter data={notes} />
    </div>
  );
};
export default FunctionCounter;
