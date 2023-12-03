import React from "react";
import "../Game.css";

const GameCircle = ({ id, children, onCircleClick, className }) => {
  return (
    <div
      onClick={() => onCircleClick(id)}
      id={id}
      className={`gameCircle ${className}`}
    >
      {children}
    </div>
  );
};

export default GameCircle;
