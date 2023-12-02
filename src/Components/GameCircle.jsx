import React from "react";

const GameCircle = ({ id, children, color }) => {
  const clickHandler = () => {
    alert("u clicked" + id); //TESTING
  };

  return (
    <div onClick={clickHandler} id={id} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default GameCircle;
