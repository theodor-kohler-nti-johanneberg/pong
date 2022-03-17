/*UPPLÖSNING 1366x768*/
/*margin(38,35px) racket(38,35px) margin(613,6px) racket(38,35px) margin(38,35px)*/
/*Ball = 7,67px*7,67px */

let width = 1365;
let height = 767;
let ballLength = 7.67;
let racketLength = 460.2;
let racket1Y = 153.4;
let racket2Y = 153.4;
let score1 = 0;
let score2 = 0;

let ball = {
    x: 682.5,
    y: 383.5,
    velocityX: 1.0,
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
    if (ball.x <= 0.1 * width + ballLength && ball.y >= racket1Y && ball.y <= racket1Y + racketLength || ball.x >= width - (0.1 * width + ballLength) && ball.y >= racket2Y && ball.y <= racket2Y + racketLength || ball.y == height || ball.y == 0) {
        ball.velocityX = -ball.velocityX;
        ball.velocityY = -ball.velocityY;

        return ball;
    }

    return ball;
}

function draw() {
    let canvas = document.getElementById("canvas");
    let racket1 = canvas.getContext("2d");
    racket1.beginPath();
    //racket1.rect(0.05 * width, racket1Y, 0.1 * width, 0.6 * height);
    racket1.rect(20,20, 200, 200);
    racket1.stroke;
}

function app() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    ball = newVelocities(ball);

    switch (checkWinner(ball.x)) {
        case 1:
            //Player 1 won
            score1++;
            break;

        case 2:
            //Player 2 won
            score2++;
            break;
    }

    draw();
}

/*
while (true) {
    setTimeout(app(), 100)
}
*/
app();