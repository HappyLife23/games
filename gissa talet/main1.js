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
        // hämta användarens gissning från input-fältet
        const userGuesses = parseInt(userInput.value);
    
     // Loggar användarens gissade tal
    console.log(`Number: ${userInput.value}`);

    // kontrollera om användaren har gissat rätt
    if (userGuesses == secretNumber) {
        result.textContent = `Grattis!!`
        //disableInputAndButton(); // inaktivera input och knapp

    } else if (userGuesses > secretNumber) {
        result.textContent = "För stor,vänligen gissa igen!"

    } else if (userGuesses < secretNumber) {
        result.textContent = "För liten, vänligen gissa igen!"

    } else {
        result.textContent = " Vänligen skriv en siffra mellan 0-100"
    }
        
    // lägger till användarens gissning i listan
    guesses.push(userGuesses);
    
    // uppdatera skärmen med alla användrarens gissningar
    result.textContent = ` Guess: ${guesses.join(', ')}`;
        
    // minskar antalet försök
    attempts--;

    // tömmer input efter varje gissning
    userInput.value = '';
    } else {
        result.textContent = `Tyvärr, har du inte mer försök kvar, det hemliga nummret var: ${secretNumber}`;
        disablecheckButton();
        //disableInputAndButton(); // inaktivera input och knapp

}
    
}
// Funktion för att inaktivera input-fältet och knappen när spelet är klart

function disablecheckButton() {
    checkButton.disabled = true;
}
