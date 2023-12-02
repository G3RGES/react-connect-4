import React from "react";
import "../Game.css";

const GameCircle = ({ id, children, onCircleClick }) => {
  return (
    <div
      onClick={() => onCircleClick(id)}
      id={id}
      className={`gameCircle ${id % 2 === 0 ? "even" : "odd"}`}
    >
      {children}
    </div>
  );
};

export default GameCircle;
