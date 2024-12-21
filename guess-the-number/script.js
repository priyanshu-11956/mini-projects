let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;
const maxAttempts = 10;
const previousGuesses = [];

function updateUI(resultMessage, guessesLeft) {
    document.getElementById('result').textContent = `Result is: ${resultMessage}`;
    document.getElementById('guessesRemaining').textContent = `Guesses remaining: ${guessesLeft}`;
    document.getElementById('previousResults').textContent = `Previous results: ${previousGuesses.join(', ')}`;
}

document.getElementById('guessButton').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessInput').value);
    let resultMessage = '';

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultMessage = 'Please enter a number between 1 and 100.';
    } else {
        attempts++;
        previousGuesses.push(guess);

        if (guess === randomNumber) {
            resultMessage = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
            // Reset the game
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            previousGuesses.length = 0; // Clear previous guesses
        } else if (attempts >= maxAttempts) {
            resultMessage = `Sorry, you've used all ${maxAttempts} attempts. The number was ${randomNumber}.`;
            // Reset the game
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            previousGuesses.length = 0; // Clear previous guesses
        } else if (guess < randomNumber) {
            resultMessage = 'Too low! Try again.';
        } else {
            resultMessage = 'Too high! Try again.';
        }
    }

    updateUI(resultMessage, maxAttempts - attempts);
});
