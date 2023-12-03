import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
  // console.log(gameBoard); // TESTING

  const circleClicked = (id) => {
    // console.log("circle clicked: " + id); // TESTING

    const board = [...gameBoard];

    board[id] = 1;
    setGameBoard(board);
    console.log(board); // TESTING
  };

  return (
    <div className="gameBoard">
      <GameCircle
        id={0}
        onCircleClick={circleClicked}
        className={`player_${gameBoard[0]}`}
      />
      <GameCircle
        id={1}
        onCircleClick={circleClicked}
        className={`player_${gameBoard[1]}`}
      />
      <GameCircle id={2} onCircleClick={circleClicked} />
      <GameCircle id={3} onCircleClick={circleClicked} />
      <GameCircle id={4} onCircleClick={circleClicked} />
      <GameCircle id={5} onCircleClick={circleClicked} />
      <GameCircle id={6} onCircleClick={circleClicked} />
      <GameCircle id={7} onCircleClick={circleClicked} />
      <GameCircle id={8} onCircleClick={circleClicked} />
      <GameCircle id={9} onCircleClick={circleClicked} />
      <GameCircle id={10} onCircleClick={circleClicked} />
      <GameCircle id={11} onCircleClick={circleClicked} />
      <GameCircle id={12} onCircleClick={circleClicked} />
      <GameCircle id={13} onCircleClick={circleClicked} />
      <GameCircle id={14} onCircleClick={circleClicked} />
      <GameCircle id={15} onCircleClick={circleClicked} />
    </div>
  );
};

export default GameBoard;
