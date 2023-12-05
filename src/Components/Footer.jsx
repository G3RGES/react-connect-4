import React from "react";

const Footer = ({ newGameClick, suggestClick }) => {
  return (
    <div className="panel footer">
      <button onClick={newGameClick}>New Game</button>
      <button onClick={suggestClick}>Suggest</button>
    </div>
  );
};
export default Footer;
