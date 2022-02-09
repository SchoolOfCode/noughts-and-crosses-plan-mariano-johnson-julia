import React from "react";
import css from "./Square.module.css";

function Square({ symbol, placeSymbol }) {
  return (
    <div onClick={placeSymbol} className={css.square}>
      <div>{symbol}</div>
    </div>
  );
}

export default Square;
