import React from "react";
import css from "./Square.module.css";

function Square({ value }) {
  return (
    <div className={css.square}>
      <div>{value}</div>
    </div>
  );
}

export default Square;
