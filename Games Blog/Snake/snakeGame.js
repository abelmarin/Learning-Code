// Selects the canvas id
const cvs = document.getElementById('snake');

// Gets the context
const ctx = cvs.getContext('2d');

// Sets the unit for the board
let box = 32;

// Loads images from the img folder 
const foodImage = new Image();
foodImage.src = "img/food.png";
const groundImage = new Image();
groundImage.src = "img/ground.png";

// Loads audio files from the audio folder
const deadAudio = new Audio();
deadAudio.src = "audio/dead.mp3";
const eatAudio = new Audio();
eatAudio.src = "audio/eat.mp3";
const leftAudio = new Audio();
leftAudio.src = "audio/left.mp3";
const rightAudio = new Audio();
rightAudio.src = "audio/right.mp3";
const upAudio = new Audio();
upAudio.src = "audio/up.mp3";
const downAudio = new Audio();
downAudio.src = "audio/down.mp3";

// Creates the snake
let snake = [];
snake[0] = {
    x: 9*box, 
    y: 10*box
}

//Creates the food
let food = {
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
}

// Creates the score
let score = 0;

// Controls for the snake
let d;
document.addEventListener("keydown", direction);

function direction(event) {
    if (event.keyCode == 37 && d != "RIGHT") {
        leftAudio.play();
        d="LEFT";
    }
    else if (event.keyCode == 38 && d != "DOWN") {
        upAudio.play();
        d="UP";
    }
    else if (event.keyCode == 39 && d != "LEFT") {
        rightAudio.play();
        d="RIGHT";
    }
    else if (event.keyCode == 40 && d != "UP") {
        downAudio.play();
        d="DOWN";
    }
}

// Function to check collision
function collision(newHead,snake) {
    for(let i = 0; i<snake.length; i++) {
        if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
            return true;
        }
    }
    return false;
}

// Draws the canvas and game pieces
function draw() {
    ctx.drawImage(groundImage,0,0);

    for (let i = 0; i<snake.length; i++) {
        // Green is the head of the snake, white is the body
        ctx.fillStyle = (i==0) ? "green" : "white";
        ctx.fillRect(snake[i].x ,snake[i].y ,box,box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    ctx.drawImage(foodImage,food.x,food.y);

    // Old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Which direction
    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    // Checks to see if the snake eats the food
    if(snakeX == food.x && snakeY == food.y) {
        score++;
        eatAudio.play();
        food = {
            x:Math.floor(Math.random()*17+1)*box,
            y:Math.floor(Math.random()*15+3)*box
        }
    } else {
        // Remove the tail
        snake.pop();
    }

    // Add new head
    let newHead = {
        x:snakeX,
        y:snakeY
    }

    // Game over
    if (snakeX < box || snakeY < 3*box || snakeX > 17*box || 
        snakeY > 17*box || collision(newHead, snake)) {
        clearInterval(game);
        deadAudio.play();
    }
    
    snake.unshift(newHead);

    ctx.fillStyle = "white";
    ctx.font = "45px Changa One";
    ctx.fillText(score,2*box,1.6*box);
}

// Calls draw function every 100 milliseconds
let game = setInterval(draw,200);

