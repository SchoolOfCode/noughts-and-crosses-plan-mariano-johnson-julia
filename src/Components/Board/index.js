import React from "react";
import Square from "../Square";
import css from "./Board.module.css";

function Board({ board }) {
  return (
    <div className={css.container}>
      {board.map((square) => {
        return <Square value={square} />;
      })}
    </div>
  );
}

export default Board;
