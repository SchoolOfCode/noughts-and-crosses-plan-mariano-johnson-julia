import { useState } from "react";
import Board from "../Board";

const Game = () => {
  const initialBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState(false); // true is X's turn, false is O's turn

  return (
    <div>
      Game Component
      <Board board={board} />
      {turns ? (
        <h2>It is Player X's turn.</h2>
      ) : (
        <h2>It is Player O's turn.</h2>
      )}
    </div>
  );
};

export default Game;
