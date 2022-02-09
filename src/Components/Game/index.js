import { useState } from "react";
import Board from "../Board";
import checkWinner from "./checkWinner.js";

const Game = () => {
  const initialBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState(false); // true is X's turn, false is O's turn

  function placeSymbol(index) {
    //if symbol is not empty, return/do nothing
    if (board[index] !== "") {
      console.log(`Position ${index + 1} is not empty:`, board[index]);
      return;
    }
    //if position is empty, place a symbol here
    let currentPlayerSymbol;
    if (turns) {
      currentPlayerSymbol = "X";
    } else {
      currentPlayerSymbol = "0";
    }

    setBoard([
      ...board.slice(0, index),
      currentPlayerSymbol,
      ...board.slice(index + 1),
    ]);

    //after a player makes a move / we update the board
    //it is the next players turn
    setTurns(!turns);

    //later after a move, checkWinner
    const winner = checkWinner(board);
    switch (winner) {
      case 1:
        console.log(`${turns ? "O" : "X"} won the game`);
        break;
      case 2:
        console.log("Draw");
        break;
      default:
        console.log(`Game in progress`);
    }
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
