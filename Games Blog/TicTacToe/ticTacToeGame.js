// Selects the canvas id
const cvs = document.getElementById("ticTacToe");

// Gets the context
const ctx = cvs.getContext('2d');

// Sets the unit for the board
let square = 200;

// Loads the images
const gameBoard = new Image();
gameBoard.src = "assets/board.png";
const nought = new Image();
nought.src = "assets/o.png";
const cross = new Image();
cross.src = "assets/x.png";


