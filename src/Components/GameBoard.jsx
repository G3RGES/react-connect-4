import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner } from "../helper";
import {
  CIRCLES,
  GAME_STATE_IDLE,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
} from "../Constants";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  // console.log(gameBoard); // TESTING
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

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

    if (gameBoard[id] !== NO_PLAYER) return;
    if (gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      // console.log(currentPlayer + "winner"); // TESTING
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

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
      <Header
        currentPlayer={currentPlayer}
        gameState={gameState}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initBoard()}</div>
      <Footer />
    </>
  );
};

export default GameBoard;
