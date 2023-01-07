import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = React.useState({
    name: "peter",
    age: 20,
    message: "hello!",
  });

  const handleClick = () => {
    setPeople(...person, { name: "New Name" });
  };
  return (
    <>
      <div>
        {people.name}
        <button onClick={handleClick}>click me</button>
      </div>
    </>
  );
};

export default UseStateObject;
