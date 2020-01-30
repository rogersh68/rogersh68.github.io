const board = document.querySelector(table);
var player1 = "X";
var player2 = "O";
var player = player1;
function playGame() {
    if (player1) {
        //write "X"
    }
    else {
        //write "O"
    }
}

const board = document.querySelector('.board');
      const resetButton = document.getElementById('reset');
      const player1 = 'X';
      const player2 = 'O';
      let player = player1;
      function addPiece(e) {
        console.log(e.target);
        e.target.innerHTML = player;
        if (player === player1) player = player2;
        else player = player1;
      }
 
      function resetBoard() {
        console.dir(board);
        for (let i = 0; i < board.rows.length; i++) {
          let row = board.rows[i];
          for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = '';
          }
        }
      }
      board.addEventListener('click', addPiece);
      reset.addEventListener('click', resetBoard);