/*UPPLÖSNING 1366x768*/
/*margin(38,35px) racket(38,35px) margin(613,6px) racket(38,35px) margin(38,35px)*/
/*Ball = 7,67px*7,67px */

const FRAME_TIME = 1.0 / 60.0;

let width = 1365;
let height = 767;
let ballLength = 7.67;
let racketLength = 460.2;
let racket1Y = 153.4;
let racket2Y = 153.4;
let score1 = 0;
let score2 = 0;

let canvas = document.getElementById("canvas");
let racket1 = canvas.getContext("2d");
let racket2 = canvas.getContext("2d");
let ballRender = canvas.getContext("2d");
let clear = canvas.getContext("2d");



let ball = {
    x: 682.5,
    y: 383.5,
    velocityX: 4.0,
    velocityY: 0.0,
};

function checkWinner(x) {
    if (x >= width) {
        return 1;
    } else if (x <= 0) {
        return 2;
    }

    return 0;
}

function newVelocities(ball) {
    if ((ball.x <= 0.03 * width && ball.y >= racket1Y && ball.y <= racket1Y + racketLength) || (ball.x >= width - (0.03 * width + ballLength) && ball.y >= racket2Y && ball.y <= racket2Y + racketLength) || ball.y == height || ball.y == 0) {
        ball.velocityX = -ball.velocityX;
        ball.velocityY = -ball.velocityY;

        return ball;
    }

    return ball;
}

function draw() {
    /*clear.beginPath();
    clear.rect(0, 0, width, height);
    clear.fillStyle = "white"
    clear.fill();*/

    racket1.clearRect(0, 0, width, height);

    racket1.beginPath();
    racket1.fillStyle = "black"
    racket1.rect(0.02 * width, racket1Y + 0.2 * height, 5, 100);//racket1.rect(0.02 * width, racket1Y + 0.2 * height, 0.01 * width, 0.2 * height);
    racket1.fill();

    racket2.beginPath();
    racket2.rect(width - (0.025 * width), racket2Y + 0.2 * height, 5, 100);//racket2.rect(width - (0.03 * width), racket2Y + 0.2 * height, 0.01 * width, 0.2 * height);
    racket2.fill();

    ballRender.beginPath();
    ballRender.rect(ball.x, ball.y, ballLength, ballLength);
    ballRender.fill();
}

function game() {
    draw();


    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    console.log("X: " + ball.x);
    console.log("Y: " + ball.y);

    ball = newVelocities(ball);

    /*switch (checkWinner(ball.x)) {
        case 1:
            //Player 1 won
            score1++;
            break;

        case 2:
            //Player 2 won
            score2++;
            break;
    }*/

}

/*
let lastTime = Date.now();

while (true) {
    let dt = Date.now() - lastTime;
    lastTime = Date.now();

    // do shit
}
*/


setInterval(game, FRAME_TIME);

//game();

//draw();
