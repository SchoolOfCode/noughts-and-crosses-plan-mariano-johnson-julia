function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return 1;
      //Compare a b and c to each other
      //If they are empty do nothing
    }
  }
  //Check if there's a draw
  for (let i = 0; i < lines.length; i++) {
    if (board[i] === "") {
      return 3;
      //If there's an empty string do nothing
    }
  }
  return 0;
}

export default checkWinner;

/* check if there's matching symbols in rows, columns, or diagonals
if there is, the game ends and the symbol wins
if the board is full, the game ends as a draw

store possible winning postions
    board indexes - three rows, three columns, two diagonals
    123, 456, 789. 147, 258, 369. 159, 357.
to check is someone has won the game
for each of these index positions, check if they are all the same symbol (ignore nulls)
    e.g. if they are all X, then that player won, display winning player
    if the board is full of symbols, the game ends as a draw
 */
