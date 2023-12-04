import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";

const CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

// setCurrentPlayer(PLAYER_1);
// setGameBoard(Array(16).fill(NO_PLAYER));

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  // console.log(gameBoard); // TESTING
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const circleClicked = (id) => {
    // console.log("circle clicked: " + id); // TESTING

    //* NO LONGER NEEDED
    // const board = [...gameBoard];
    // board[id] = currentPlayer;
    // setGameBoard(board);
    // console.log(board); // TESTING

    setGameBoard((prev) => {
      return prev.map((circle, idx) => {
        if (idx === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    console.log(currentPlayer); // TESTING
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        id={id}
        key={id}
        onCircleClick={circleClicked}
        className={`player_${gameBoard[id]}`}
      />
    );
  };

  return (
    <>
      <Header />
      <div className="gameBoard">{initBoard()}</div>
      <Footer />
    </>
  );
};

export default GameBoard;
