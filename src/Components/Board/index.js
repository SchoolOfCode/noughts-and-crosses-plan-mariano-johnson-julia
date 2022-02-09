import React from "react";
import Square from "../Square";

function Board({ board }) {
  return (
    <div>
      Board Component
      {board.map((square) => {
        return <Square />;
      })}
    </div>
  );
}

export default Board;
