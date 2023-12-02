import React from "react";
import "../Game.css";

const GameCircle = ({ id, children, color }) => {
  const style = {
    backgroundColor: color,
  };

  const clickHandler = () => {
    alert("u clicked" + id); //TESTING
  };

  return (
    <div onClick={clickHandler} id={id} style={style} className="gameCircle">
      {children}
    </div>
  );
};

export default GameCircle;
