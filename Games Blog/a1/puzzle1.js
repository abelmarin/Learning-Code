// This gets the canvas element from the window in order to modify it.
const canvas = document.getElementById("eightPuzzle");
const c = canvas.getContext("2d");

var dictOfTiles;

class Tile {
    constructor(x,y,number) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.number = number;
    }

    // This creates a tile
    createTile() {
        c.beginPath();
        // c.rect(this.x,this.y,150,150);
        // c.fillStyle = "#4267B2";
        // c.fill();
        c.fillStyle = "#f1f1f1";
        c.font = "1.3rem Arial";
        c.fillText(this.number,this.x+75,this.y+75);
        c.stroke();
    }

    // This moves the gap 
    moveGap(direction, dx, dy) {
        this.dx = dx;
        this.dy = dy;

        if (direction == 'up') {
            if (this.y == 300) {
                this.dy = 0;
            }
            this.y += this.dy;
            
        } 
        else if (direction == 'down') {
            if (this.y == 0) {
                this.dy = 0;
            }
            this.y -= this.dy;
        } 
        else if (direction == 'right') {
            if (this.x == 0) {
                this.dx = 0;
            }
            this.x -= this.dx;
        } 
        else if (direction == 'left') {
            if (this.x == 300) {
                this.dx = 0;
            }
            this.x += this.dx;
        }

        this.createTile();
    }

    x() {
        return this.x;
    }

    y() {
        return this.y;
    }

}

// Keeps track of the tile that's empty
var emptyTile = [];


function animate(tile, direction) {
    requestAnimationFrame(animate);
    // c.clearRect(0,0,150,150);
    
    if (direction == 'up' && emptyTile[1] - 150 > 0) {
        var oldTile = [tile.x(), tile.y()];
        // tileToMove = emptyTile[1] - 150;
        one.moveGap(direction, 0, emptyTile[1]);
        c.clearRect(oldTile[0], oldTile[1], 150, 150);
    }
    else if (direction == 'down' && emptyTile[1] - 150 < 300) {
        var oldTile = [tile.x(), tile.y()];
        // tileToMove = emptyTile[1] + 150;
        one.moveGap(direction, 0, emptyTile[1]);
        c.clearRect(oldTile[0], oldTile[1], 150, 150);
    }
    else if (direction == 'left' && emptyTile[0] - 150 > 0) {
        var oldTile = [tile.x(), tile.y()];
        // tileToMove = emptyTile[0] + 150;
        one.moveGap(direction, emptyTile[0], 0);
        c.clearRect(oldTile[0], oldTile[1], 150, 150);
    }
    else if (direction == 'right' && emptyTile[0] - 150 < 300) {
        var oldTile = [tile.x(), tile.y()];
        // tileToMove = emptyTile[1] + 150;
        one.moveGap(direction, emptyTile[0], 0);
        c.clearRect(oldTile[0], oldTile[1], 150, 150);
    }
}


document.body.addEventListener('keydown', function(event) { 
    const key = event.key;
    var tileToMove;
    var emptySpot;
    for (var i = 0; i < 8; i++) {
        if (dictOfTiles[i][1] == "empty")
            emptySpot = i;
    }
    switch (key) { 
        case "ArrowLeft":
            if (emptySpot-3 >0) {
                tileToMove = dictOfTiles[emptySpot-3][1];
                animate(tileToMove, 'left');
            }
            
            break; 
        case "ArrowRight": 
            tileToMove = dictOfTiles[(emptyTile[0]+150,emptyTile[1])];
            animate(tileToMove, 'right');
            break; 
        case "ArrowUp": 
            tileToMove = dictOfTiles[(emptyTile[0],emptyTile[1]-150)];
            animate(tileToMove, 'up');
            break; 
        case "ArrowDown":
            tileToMove = dictOfTiles[(emptyTile[0],emptyTile[1]+150)];
            animate(tileToMove, 'down');
            break; 
}})

function runTheAlgorithm() {

}


function setInput() {
    // Goal Input
    if (document.getElementById("radGoal").checked){
        document.getElementById("inputDiv").innerHTML = "Input: 1 2 3 8 0 4 7 6 5";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
    
        // Row 1
        one = new Tile(0,0,1).createTile();
        two = new Tile(150,0,2).createTile();
        three = new Tile(300,0,3).createTile();
    
        // Row 2
        eight = new Tile(0,150,8).createTile();
        emptyTile = [150, 150];
        four = new Tile(300,150,4).createTile();
    
        // Row 3
        seven = new Tile(0,300,7).createTile();
        six = new Tile(150,300,6).createTile();
        five = new Tile(300,300,5).createTile();

        dictOfTiles[0] = one;
        dictOfTiles[1] = two;
        dictOfTiles[2] = three;

        dictOfTiles[3] = eight;
        dictOfTiles[4] = "empty";
        dictOfTiles[5] = four;

        dictOfTiles[6] = seven;
        dictOfTiles[7] = six;
        dictOfTiles[8] = five;

    }
    
    // Easy Input
    else if (document.getElementById("radEasy").checked) {
        document.getElementById("inputDiv").innerHTML = "Input: 1 3 4 8 6 2 7 0 5";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
    
        // Row 1
        one = new Tile(0,0,1).createTile();
        three = new Tile(150,0,3).createTile();
        four = new Tile(300,0,4).createTile();
    
        // Row 2
        eight = new Tile(0,150,8).createTile();
        six = new Tile(150,150,6).createTile();
        two = new Tile(300,150,2).createTile();
    
        // Row 3
        seven = new Tile(0,300,7).createTile();
        emptyTile = [150, 300];
        five = new Tile(300,300,5).createTile();
    }
    
    // Medium Input
    else if (document.getElementById("radMedium").checked){
        document.getElementById("inputDiv").innerHTML = "Input: 2 8 1 0 4 3 7 6 5";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
    
        // Row 1
        two = new Tile(0,0,2).createTile();
        eight = new Tile(150,0,8).createTile();
        one = new Tile(300,0,1).createTile();
    
        // Row 2
        emptyTile = [0, 150];
        four = new Tile(150,150,4).createTile();
        three = new Tile(300,150,3).createTile();
        
        // Row 3
        seven = new Tile(0,300,7).createTile();
        six = new Tile(150,300,6).createTile();
        five = new Tile(300,300,5).createTile();
    }
    
    // Hard Input
    else if (document.getElementById("radHard").checked) {
        document.getElementById("inputDiv").innerHTML = "Input: 5 6 7 4 0 8 3 2 1";

        // Clears the board for the new input
        c.clearRect(0,0,450,450);
    
        // Row 1
        five = new Tile(0,0,5).createTile();
        six = new Tile(150,0,6).createTile();
        seven = new Tile(300,0,7).createTile();
    
        // Row 2
        four = new Tile(0,150,4).createTile();
        emptyTile = [150, 150];
        eight = new Tile(300,150,8).createTile();
    
        // Row 3
        three = new Tile(0,300,3).createTile();
        two = new Tile(150,300,2).createTile();
        one = new Tile(300,300,1).createTile();
    } else {

    }

}

