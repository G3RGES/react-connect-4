import React from "react";
import "../Game.css";

const GameCircle = ({ id, children }) => {
  const clickHandler = () => {
    alert("u clicked" + id); //TESTING
  };

  return (
    <div
      onClick={clickHandler}
      id={id}
      style={
        id % 2 === 0 ? { backgroundColor: "blue" } : { backgroundColor: "red" }
      }
      className="gameCircle"
    >
      {children}
    </div>
  );
};

export default GameCircle;
