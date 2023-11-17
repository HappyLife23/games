
// skapar element i min HTML-kod och lägger till innehåll i de
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const container = document.createElement('div');
container.classList.add('container');


const title = document.createElement('h1');
title.textContent = 'Gissa ett tal mellna 0-100'

const userInput = document.createElement('input');
userInput.placeholder = 'gissa ett nummer...'


const checkButton = document.createElement('button');
checkButton.classList.add('guess-button')
checkButton.innerText = 'Gissa'





const result = document.createElement('p');

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// genererar random-number 0-100 och koncolar det hemliga siffran
let secretNumber = Math.floor([Math.random() * 100]) + 1;
console.log(`The secret number wa: ${secretNumber}`);

attempts = 5;
const guesses = [];

// lägger till en click-event
checkButton.addEventListener('click', letsGo);

// lägger till en keyDown-event
userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        letsGo();
    }

})
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// skapr en funktion som innehåller mina if-satser
function letsGo() {
    

    if (attempts > 0) {
        const playerGuesses = parseInt(userInput.value);
        console.log(`Number: ${playerGuesses}`)


        if (parseInt(playerGuesses) == secretNumber) {
            
            result.textContent = `Grattis!!! The secret number was ${secretNumber}`
            showTryAgainButtton();
            
            
        } else if (playerGuesses > secretNumber) {
            result.textContent = 'För stor, gissa mindre!'
            
        } else if (playerGuesses < secretNumber) {
            result.textContent = 'För liten, gissa större!'
        }


        guesses.push(playerGuesses); // lägger till användarens gissning till arrayen 'guesses'

        result.textContent += `--Guessed numbers:${guesses.join(', ')}`  // uppdatera skärmen med alla användrarens gissningar

        userInput.value = '';

        attempts--;
        
        
    } else {
        result.textContent = `Du har gissat fel fem gånger! det hemliga sifran var ${secretNumber}`
        disablecheckButton(); // anropar inaktivring om min checkButton
        disableuserInput(); // anropar inaktivering av min userInput
        showTryAgainButtton(); // anropar min tryAgainButton
   
    }  
    
}

// appendar alla mina HTML-element som jag har skapat i min JavaScript
container.appendChild(title);
container.appendChild(userInput);
container.appendChild(checkButton);

container.appendChild(result);
document.body.appendChild(container);


// Ny funktion för att aktivera checkButton
function disablecheckButton() {
    checkButton.disabled = false;
}

// Ny funktion för att aktivera userInput
function disableuserInput() {
    userInput.disabled = false;
}

const tryAgainButton = document.createElement('button');

function showTryAgainButtton() {
    tryAgainButton.addEventListener('click', tryAgain);
    tryAgainButton.innerText = 'Try again?'   
    tryAgainButton.classList.add('try');
    container.appendChild(tryAgainButton);
    

}


// försök igen funktionen
function tryAgain() {
    attempts = 5;
    guesses.length = 0;
    disablecheckButton ();// Anropa en ny funktion för att aktivera checkButton
    disableuserInput ();   
    tryAgainButton.remove();
    result.textContent = '';
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`The new secret number: ${secretNumber}`)

}


