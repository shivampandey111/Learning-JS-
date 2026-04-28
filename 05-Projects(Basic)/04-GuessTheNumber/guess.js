const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const guessCounter = document.querySelector('.lastResult')
const message = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')
const topCounter = document.querySelector('.counter')

let prevGuess = []
let numGuess = 1
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateCheck(guess)
    })
}

const randomNo = function(){
            return (Math.floor(Math.random() * 100 +1))
            } 

function validateCheck(guess){
    //Validate whether the user input is correct or not
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<0){
        alert('Please enter a number greater than 0')
    }
    else if(guess>100){
        alert('Please enter a valid number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over. Random number was: ${randomNo()}`)
            endgame()
        }
        else{
            topCounter.textContent = `${11-numGuess}`
            displayGuess(guess)
            checkGuess(guess, randomNo())
        }
    }
}
function checkGuess(guess, randomNo){
    //Check whether it is equal to random no or not
    if(guess === randomNo){
        displayMessage(`You are correct.`)
        endGame()
    }
    else if(guess<randomNo){
        displayMessage(`Number is too low. Random number is ${randomNo}`)
    }
    else if(guess>randomNo){
        displayMessage(`Number is too high. Random number is ${randomNo}`)
    }
}

function displayMessage(message1){
    message.innerHTML = `<h2>${message1}</h2>`
}

function displayGuess(guess){
    //would display the guess
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    guessCounter.innerHTML = `${11 - numGuess} `;
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id=newGame>Start New Game</h2>`
    startOver.appendChild(p)

    playGame = false;
    newGame()
}

function newGame(){
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click', function(e){
        random = parseInt(Math.floor(Math.random() * 100 +1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        guessCounter.innerHTML = `${11 - numGuess} `
        userInput.removeAttribute('disabled')
        compare.removeChild(p)

        playGame = true;
    })
}

