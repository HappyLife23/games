/*––––––––––––––––– psudokod ––––––––––––––––––––*/

const button = document.getElementById('checkButton');
const userInput = document.getElementById('userInput');
const para = document.getElementById('result');


const secretNumber = Math.floor(Math.random() * 100) + 1;

/*
document.addEventListener('keydown', function (event) {
    if ( event.key == 'Enter')
    userInput.value = event.key;

});
*/

    button.addEventListener('click', function () {
            
        let attempts = 5;
        
        while (attempts > 0) {
            const userInput = document.getElementById('userInput').value;
           
            
            const secretNumber = 30;
        

            if (userInput == secretNumber) {
                para.textContent = `Grattis, rätt nummer är ${secretNumber}`;
                //console.log('Grattis')
                //console.log(para)                               
                break;
            } else if ( attempts == 0) {
                para.textContent = 'No more'
                button.disabled = true;
                
            }
            else if (userInput > secretNumber) {
                para.textContent = `${userInput} är för stor, testa igen! `;
                break;
                
            } else if (userInput < secretNumber) {
                para.textContent = `${userInput} är för liten, testa igen!`
            
            } else {
                para.textContent = 'No more';
                break;
            }
            attempts--;
        }
    });







 




