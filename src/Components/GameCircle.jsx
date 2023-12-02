import React from "react";

const GameCircle = ({ id, children }) => {
  const clickHandler = () => {
    alert("u clicked" + id); //TESTING
  };

  return (
    <div onClick={clickHandler} id={id}>
      {children} - {id}
    </div>
  );
};

export default GameCircle;
