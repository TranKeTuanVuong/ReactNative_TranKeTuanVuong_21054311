// Implement a game rest functionality, so that the player can make a new guess!
// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Declare variables to be used
    let score = 20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Function to reset the game
    function resetGame() {
        // Restore initial values
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        // Restore initial conditions
        const messageElement = document.querySelector('.message');
        const numberElement = document.querySelector('.number');
        const scoreElement = document.querySelector('.score');
        const guessInput = document.querySelector('.guess');
        const bodyElement = document.querySelector('body');

        if (messageElement && numberElement && scoreElement && guessInput && bodyElement) {
            messageElement.textContent = 'Start guessing...';
            numberElement.textContent = '?';
            scoreElement.textContent = score;
            guessInput.value = '';

            // Restore original styles
            bodyElement.style.backgroundColor = '#222';
            numberElement.style.width = '15rem';
        } else {
            console.error('One or more elements are missing in the DOM.');
        }
    }

    // Add event listener to the 'Again' button
    const againButton = document.querySelector('.again');
    if (againButton) {
        againButton.addEventListener('click', resetGame);
    } else {
        console.error('The element with class ".again" is missing in the DOM.');
    }
});


