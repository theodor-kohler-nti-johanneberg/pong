/*UPPLÖSNING 1366x768*/ 

let racket1Y = 153.4;
let racket2Y = 153.4;
let ballX = 682.5;
let ballY = 383.5;
let hVelocity = 1.0;
let vVelocity = 0.0;
let score1 = 0;
let score2 = 0;

while (true) {
    ballX += hVelocity;
    ballY += vVelocity;

    switch (checkWinner(ballX)) {
        case 1:
            //Player 1 won
            score1++;
            break;

        case 2:
            //Player 2 won
            score2++;
            break;
    }



}

function checkWinner(ballX) {
    if (ballX >= 1365) {
        return 1;
    } else if (ballX <= 0) {
        return 2;
    }

    return 0;
}

function newVelocities(hVelocity, vVelocity) {
    
}
