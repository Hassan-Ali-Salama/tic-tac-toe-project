import React from "react";

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((tran) => (
        <li key={`${tran.square.row}${tran.square.col}`}>
          {tran.player} Played {tran.square.raw} , {tran.square.col}
        </li>
      ))}
    </ol>
  );
}
