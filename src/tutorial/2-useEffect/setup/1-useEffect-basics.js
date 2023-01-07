import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (value > 5) {
      document.title = `New messsage(${value})`;
    }
  }, []);
  return (
    <>
      <h2>useEffect Basics{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        clicke me
      </button>
    </>
  );
};

export default UseEffectBasics;
