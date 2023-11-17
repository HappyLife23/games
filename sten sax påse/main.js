// Hämta referens från DOM

const userButtons = document.querySelectorAll('.userBuutton');
const result = document.getElementById('result');
const datornsDrag = document.getElementById('datornsDrag');

// spara användarens input i in array
const guesses = [];

const game = Math.random()

userButtons.forEach(button => {
    // skapa en eventListener där användaren kan klicka på knappen
    button.addEventListener('click', function () {
        
    });
    if (button === 'click') {
        console.log('hej')
    }
    console.log(button)

});
































/*

//let attempts = 5;
let guesses = [];

userButtons.forEach((userButton) => {
    userInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {    
            makeMove();
            console.log(makeMove)
        }
    });

});



function makeMove(playerMove) {

    let moves = ['sten', 'sax', 'påse'];
    let machinMove = moves[Math.random() * moves.length];

    let result = '';
    if (moves.includes(playerMove)) {
        
    if (playerMove === machinMove) {
        result = 'Oavgjort';
    }

        
            
     else if ( (playerMove === 'sten' && machinMove === 'sax') || 
                (playerMove === 'sax' && machinMove === 'påse') || 
                (playerMove === 'påse' && machinMove === 'sten')) {
        result = 'Du vann!'            
        } 
         else {
            result = 'Machin vinner!'
     }
        
    } else {
        resultText = 'Ogiltig'
    }
        
    document.getElementById('result').innerHTML = 'Ditt drag' + playerMove + '<br>Machin drag' + machinMove + '<br>Resultatet' + result;

    userInput.value;
    
}

/*
function disableuserButton() {
    userButton.disabled = true;
}
*/

