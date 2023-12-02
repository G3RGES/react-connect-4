import React from "react";

const GameCircle = ({ id, children, color }) => {
  const clickHandler = () => {
    alert("u clicked" + id); //TESTING
  };

  return (
    <div
      onClick={clickHandler}
      id={id}
      style={{
        backgroundColor: color,
        width: 100,
        height: 100,
        borderBottom: "1px solid black",
      }}
    >
      {children}
    </div>
  );
};

export default GameCircle;
