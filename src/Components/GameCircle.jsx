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
      className={`gameCircle ${id % 2 === 0 ? "even" : "odd"}`}
    >
      {children}
    </div>
  );
};

export default GameCircle;
