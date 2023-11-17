const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');
const tryAgainButton = document.createElement('button');


// genererar Math.random
let secretNumber = Math.floor(Math.random() * 100) + 1;
// konsolar den så att jag vet vad detta random nummer är
console.log(`The secret number is: ${secretNumber}`);


let attempts = 5;

// lagrar användarens gissningar
const guesses = [];
 

// eventListener med click
checkButton.addEventListener('click', handleGuesses);

// eventListener med enter
userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleGuesses();
   } 
});


// logiken bakom spelet 
function handleGuesses() {


    if (attempts > 0) { //kontrollerar om användaren har några försök kvar.
        const userGuesses = parseInt(userInput.value);

        // Loggar användarens gissade tal
         console.log(`Number: ${userGuesses}`);
    
        // kontrollera om användaren har gissat rätt
        if (userGuesses == secretNumber) {
            result.textContent = `Grattis!! the secret number was ${secretNumber}`;

        } else if (userGuesses > secretNumber) {
            result.textContent = "För stor,vänligen gissa igen!"
        } else if (userGuesses < secretNumber) {
            result.textContent = "För liten, vänligen gissa igen!"
        } 
        
        // lägger till användarens gissning till arrayen 'guesses'
        guesses.push(userGuesses);
    
        // uppdatera skärmen med alla användrarens gissningar
        result.textContent += ` -- Guessed numbers: ${guesses.join(', ')}`;
        
        // minskar antalet försök
        attempts--;

        // tömmer input efter varje gissning
        userInput.value = '';
       
    }else {
        result.textContent = `Tyvärr, har du inte mer försök kvar, det hemliga nummret var: ${secretNumber}`;
        disablecheckButton();
        disableuserInput();
        showTryAgainButtton();
    }
}


// inaktiverar knappen 'Guess'
function disablecheckButton() {
    checkButton.disabled = true;
    
}

// inaktiverar inputrutan
function disableuserInput() {
    
    userInput.disabled = true;
}

// visar min try again button
function showTryAgainButtton() {
   
    tryAgainButton.textContent = 'Try again?'
    tryAgainButton.addEventListener('click', tryAgain);

    document.body.appendChild(tryAgainButton);
}

// försök igen funktionen
function tryAgain() {
    attempts = 5;
    guesses.length = 0;
    result.textContent = '';
    checkButton.disabled = false;
    userInput.disabled = false;
    tryAgainButton.remove();
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`The new secret number is: ${secretNumber}`)

}