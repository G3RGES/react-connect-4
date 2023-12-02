import React from "react";

const GameCircle = ({ id }) => {
  const clickHandler = () => {
    alert("u clicked" + id); //TESTING
  };

  return (
    <div onClick={clickHandler} id={id}>
      GameCircle - {id}
    </div>
  );
};

export default GameCircle;
