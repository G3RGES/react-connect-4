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
        margin: 10,
        borderRadius: "50%",
      }}
    >
      {children}
    </div>
  );
};

export default GameCircle;
