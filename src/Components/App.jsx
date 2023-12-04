import React from "react";
import GameBoard from "./GameBoard";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <GameBoard />
      <Footer />
    </div>
  );
};

export default App;
