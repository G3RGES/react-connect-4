import React from "react";
import { GAME_STATE_PLAYING } from "../Constants";

const Footer = ({ newGameClick, suggestClick, disabled, gameState }) => {
  //* different way
  // const renderButton = () => {
  //   if (gameState === GAME_STATE_PLAYING) {
  //     return (
  //       <button
  //         onClick={suggestClick}
  //       >
  //         Suggest
  //       </button>
  //     );
  //   }
  // };

  return (
    <div className="panel footer">
      <button onClick={newGameClick}>New Game</button>

      {gameState === GAME_STATE_PLAYING && (
        <button
          onClick={suggestClick}
          // disabled={disabled}
        >
          Suggest
        </button>
      )}
      {/* {//* different way} */}
      {/* {renderButton()} */}
    </div>
  );
};
export default Footer;
