let turns = 7;
guessBtn = document.querySelector('#submit-btn')
newGameBtn = document.querySelector('#reset-game')
commandsPara = document.querySelector('#commands')
turnsPara = document.querySelector('#turns')
guessedNumber = document.querySelector('#num-box')

randomNumber = Math.floor(Math.random() * 100) + 1

guessBtn.addEventListener('click', () => {
    let guess = guessedNumber.value;
    guessedNumber.value = ''
    guessedNumber.focus()

    if (isNaN(guess)) {
        alert('Enter a Number')
    } else if (guess < 1) {
        alert('Enter Number greater than 1')
    } else if (guess > 100) {
        alert('Enter a Number less than 100')
    } else {
        checkGuess(guess)
    }
});


function checkGuess(guess) {


    if (guess == randomNumber) {
        commandsPara.innerText = `You have guessed the Number ${guess}`
        endGame(true)
    } else if (guess > randomNumber) {
        commandsPara.innerText = 'You Guessed Greater Number'
        turns--
        turnsPara.innerText = `No. of turns : ${turns}`
    } else if (guess < randomNumber) {
        commandsPara.innerText = 'You Guessed Smaller Number'
        turns--
        turnsPara.innerText = `No. of turns : ${turns}`

    }
    if (turns === 0) {
        endGame()
    }
}

function endGame(isWinner = false) {
    if (!isWinner) {
        commandsPara.innerText = `Sorry! You Lost the Game, Random Number was ${randomNumber}`
        turnsPara.innerText = "Let's give it another Try !"

    } else {
        commandsPara.innerText = `Congratulations! You Won the Game, Random Number was ${randomNumber}`
        turnsPara.innerText = "Let's do it Another Time !"


    }
    newGameBtn.style.display = 'block'
    guessBtn.disabled = true
}

newGameBtn.addEventListener('click', () => {
        location.reload()
    }
)



