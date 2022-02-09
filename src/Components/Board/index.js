import { useState } from "react";

const Game = () => {
  const initialBoard = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState(false); // true is X's turn, false is O's turn

  return <div></div>;
};

export default Game;
