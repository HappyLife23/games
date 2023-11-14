const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');


// genererar Math.random
let secretNumber = Math.floor(Math.random() * 100) + 1;
// konsolar den så att jag vet vad detta random nummer är
console.log(`The secret number is: ${secretNumber}`);


let attempts = 5;
const guesses = [];
 

// eventListener med click
checkButton.addEventListener('click', handleGuesses);

// eventListener med enter
userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleGuesses();
   } 
});


// logiken 
function handleGuesses() {


    if (attempts > 0) {
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
        
        // lägger till användarens gissning i listan
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
    }
}
function disablecheckButton() {
    checkButton.disabled = true;
}


