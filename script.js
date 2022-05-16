'use strict';





const messageForUser = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const scoreValue = document.querySelector('.score');
let value = 20;
let highScore = 0;


const displayMessage = function(message) {
    messageForUser.textContent = message;
}

// Function
const functionval = document.querySelector('.check').addEventListener('click', function (){
    const user_number = Number(document.querySelector('.guess').value);
    if (!user_number) {
        displayMessage('🛑 No number!');                                    
} else if (user_number === secretNumber) {
        value = value -1;
        scoreValue.textContent = value;
        displayMessage('😀Your guess is correct!');
        document.body.style.backgroundColor = '#60b347';                                       
        document.querySelector('.number').textContent = secretNumber;
        if (Number(scoreValue.textContent) > highScore) {
            highScore = Number(scoreValue.textContent);
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (user_number !== secretNumber) {
        messageForUser.textContent = user_number > secretNumber ? '🙄Your guess is Higher than the secret number!': '🙄Your guess is Lower than the secret number!';
        value = value -1;
        scoreValue.textContent = value;
        if (value <= 0) {
            displayMessage('You lost the game😔');
            scoreValue.textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;
    
    displayMessage('Start guessing...');

    document.body.style.backgroundColor = '#222';

    value = 20;
    scoreValue.textContent = 20;
    scoreValue.value = 20;
    // document.querySelector('score').textContent = value;
})
