import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
  // console.log(gameBoard); // TESTING

  const circleClicked = (id) => {
    // console.log("circle clicked: " + id); // TESTING
    gameBoard[id] = 1;
    setGameBoard(gameBoard);
    console.log(gameBoard);
  };

  return (
    <div className="gameBoard">
      <GameCircle
        id={1}
        onCircleClick={circleClicked}
        className="player_1"
      ></GameCircle>
      <GameCircle
        id={2}
        onCircleClick={circleClicked}
        className="player_2"
      ></GameCircle>
      <GameCircle id={3} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={4} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={5} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={6} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={7} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={8} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={9} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={10} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={11} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={12} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={13} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={14} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={15} onCircleClick={circleClicked}></GameCircle>
      <GameCircle id={16} onCircleClick={circleClicked}></GameCircle>
    </div>
  );
};

export default GameBoard;
