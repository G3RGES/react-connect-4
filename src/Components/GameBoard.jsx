import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
      }}
    >
      <GameCircle id={1} color="red"></GameCircle>
      <GameCircle id={2} color="blue"></GameCircle>
      <GameCircle id={3} color="red"></GameCircle>
      <GameCircle id={4} color="blue"></GameCircle>
      <GameCircle id={5} color="red"></GameCircle>
      <GameCircle id={6} color="blue"></GameCircle>
      <GameCircle id={7} color="red"></GameCircle>
      <GameCircle id={8} color="blue"></GameCircle>
    </div>
  );
};

export default GameBoard;
