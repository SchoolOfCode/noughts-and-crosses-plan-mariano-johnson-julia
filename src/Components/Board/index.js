import React from "react";
import Square from "../Square";
import css from "./Board.module.css";

function Board({ board, placeSymbol }) {
  return (
    <div className={css.container}>
      {board.map((squareValue, index) => {
        return (
          <Square
            symbol={squareValue}
            placeSymbol={
              () =>
                placeSymbol(
                  index
                ) /* index + 1 is the position of this component in the grid */
            }
          />
        );
      })}
    </div>
  );
}

export default Board;
