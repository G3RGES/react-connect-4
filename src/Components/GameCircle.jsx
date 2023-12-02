import React from "react";

const GameCircle = ({ id, children, color }) => {
  const style = {
    backgroundColor: color,
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: "50%",
  };

  const clickHandler = () => {
    alert("u clicked" + id); //TESTING
  };

  return (
    <div onClick={clickHandler} id={id} style={style}>
      {children}
    </div>
  );
};

export default GameCircle;
