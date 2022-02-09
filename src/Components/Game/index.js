import { useState } from "react";

const Game = () => {
  const initialBoard = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState(false); // true is X's turn, false is O's turn

  return (
    <div>
      Game Component
      {turns ? (
        <h2>It is Player X's turn.</h2>
      ) : (
        <h2>It is Player O's turn.</h2>
      )}
    </div>
  );
};

export default Game;
