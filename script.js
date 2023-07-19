const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('message').innerText = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;
        if (userGuess === secretNumber) {
            document.getElementById('message').innerText = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
            document.getElementById('userGuess').setAttribute('disabled', 'true');
        } else if (userGuess < secretNumber) {
            document.getElementById('message').innerText = 'Try a higher number!';
        } else {
            document.getElementById('message').innerText = 'Try a lower number!';
        }
    }
}
