import React from "react";

const Footer = ({ newGameClick }) => {
  return (
    <div className="panel footer">
      <button onClick={newGameClick}>New Game</button>
    </div>
  );
};
export default Footer;
