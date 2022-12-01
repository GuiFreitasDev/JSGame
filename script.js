//guess
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessField= document.querySelector('.guessField');
const buttonSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const reset = document.querySelector('.reset');

let guessCount = 1;
let resetButton;
let mensage;

function guessCheck() {
    let userGuess = guessField.value;

    if (guessCount == 1) {
        guesses.textContent = 'Palpites: ';
    }
    
    if (userGuess == randomNumber) {
        mensage = 'Você acertou! ';
        guesses.style.color = 'green';
        setResetGame();
    }

    if (userGuess > randomNumber) {
        mensage ='O número secreto é menor. ';
        guesses.style.color = 'red';
    } else if (userGuess < randomNumber) {
        mensage ='O número secreto é maior. ';
        guesses.style.color = 'red';
    }

    if (guessCount == 3) {
        mensage += 'Fim de jogo!';
        setResetGame();
    }

    guessCount += 1;
    guesses.textContent += `${userGuess} `
    lastResult.textContent = `${mensage}`;
    guessField.value = '';
    guessField.focus();
}

function setResetGame() {
    buttonSubmit.disabled = true;
    guessField.disabled = true;
    reset.innerHTML = '<button class="resetButton">Start new game</button>';
    reset.id = 'emphasis';
    resetButton = document.querySelector('.resetButton');
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    buttonSubmit.disabled = false;
    guessField.disabled = false;
    guesses.textContent = '';
    lastResult.textContent = '';
    guessField.value = '';
    guessField.focus();
    reset.setAttribute('id', '');
    reset.innerHTML = '';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

buttonSubmit.addEventListener('click', guessCheck);