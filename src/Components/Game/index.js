import { useState } from "react";
import Board from "../Board";

const Game = () => {
  const initialBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState(false); // true is X's turn, false is O's turn

  function placeSymbol(symbol, gridPosition) {
    //if symbol is not empty, return/do nothing
    if (symbol !== "") {
      console.log(`Position ${gridPosition} is not empty:`, symbol);
      return;
    }
    //if position is empty, place a symbol here
    let currentPlayerSymbol;
    if (turns) {
      currentPlayerSymbol = "X";
    } else {
      currentPlayerSymbol = "0";
    }

    gridPosition--; // make gridPosition the actual index of the board state array
    setBoard([
      ...board.slice(0, gridPosition),
      currentPlayerSymbol,
      ...board.slice(gridPosition + 1),
    ]);

    //after a player makes a move / we update the board
    //it is the next players turn
    setTurns(!turns);

    //later after a move, checkWinner
  }

  return (
    <div>
      <Board board={board} placeSymbol={placeSymbol} />
      {turns ? (
        <h2>It is Player X's turn.</h2>
      ) : (
        <h2>It is Player O's turn.</h2>
      )}
    </div>
  );
};

export default Game;
