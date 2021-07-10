// This gets the canvas element from the window in order to modify it.
const canvas = document.getElementById("eightPuzzle");
const c = canvas.getContext("2d");


class Tile {
    constructor(x,y,number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }

    // This creates a tile with the number in the middle
    draw() {
        c.fillStyle = "#f1f1f1";
        c.font = "1.3rem Arial";
        c.fillText(this.number,this.x+75,this.y+75);
    }

}


var boardLayout = [[0,0],[150,0],[300,0],
            [0,150], [150,150], [300,150],
            [0,300], [150,300], [300,300]]
var listOfTiles = [];

function setInput() {
    // Goal Input
    if (document.getElementById("radGoal").checked){
        document.getElementById("inputDiv").innerHTML = "Input: 1 2 3 8 0 4 7 6 5";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
    
        // Creates the Tiles from the input list
        var inputList = [1, 2, 3, 8, 0, 4, 7, 6, 5];
        for (var i = 0; i<9; i++) 
            listOfTiles[i] = new Tile(boardLayout[i][0],boardLayout[i][1],inputList[i]).draw();
        
    }
    
    // Easy Input
    else if (document.getElementById("radEasy").checked) {
        document.getElementById("inputDiv").innerHTML = "Input: 1 3 4 8 6 2 7 0 5";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
        
        // Creates the Tiles from the input list
        var inputList = [1, 3, 4, 8, 6, 2, 7, 0, 5];
        for (var i = 0; i<9; i++) 
            listOfTiles[i] = new Tile(boardLayout[i][0],boardLayout[i][1],inputList[i]).draw();

    }
    
    // Medium Input
    else if (document.getElementById("radMedium").checked){
        document.getElementById("inputDiv").innerHTML = "Input: 2 8 1 0 4 3 7 6 5";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
    
        // Creates the Tiles from the input list
        var inputList = [2, 8, 1, 0, 4, 3, 7, 6, 5];
        for (var i = 0; i<9; i++) 
            listOfTiles[i] = new Tile(boardLayout[i][0],boardLayout[i][1],inputList[i]).draw();

    }
    
    // Hard Input
    else if (document.getElementById("radHard").checked) {
        document.getElementById("inputDiv").innerHTML = "Input: 5 6 7 4 0 8 3 2 1";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
    
        // Creates the Tiles from the input list
        var inputList = [5, 6, 7, 4, 0, 8, 3, 2, 1];
        for (var i = 0; i<9; i++) 
            listOfTiles[i] = new Tile(boardLayout[i][0],boardLayout[i][1],inputList[i]).draw();
    } 
    
    // When no input is chosen
    else {
        document.getElementById("inputDiv").innerHTML = "Choose An Input!";
    }
}




document.addEventListener("keydown",direction);

function direction(event){
    var key = event.keyCode;
    var d;
    if (key == 37)
        d = "left";
    else if (key == 38)
        d = "up";
    else if (key == 39)
        d = "right";
    else if (key == 40)
        d = "down";
    
    moveGap(d);
}

// This moves the gap 
function moveGap(direction) {
    // Finds the empty/0 tile
    var emptyTile
    for (var i = 0; i<9; i++) {
        if (listOfTiles[i].number == 0) {
            emptyTile = listOfTiles[i];
        }
    }

    
    if (direction == 'up') {
        if (emptyTile.y != 300)
            emptyTile.y += 150;
    } 
    else if (direction == 'down') {
        if (emptyTile.y != 0)
            emptyTile.y -= 150;
    } 
    else if (direction == 'right') {
        if (emptyTile.x != 0)
            emptyTile.x -= 150;
    } 
    else if (direction == 'left') {
        if (emptyTile.x != 300)
            emptyTile.x += 150;
    }

    this.draw();
}