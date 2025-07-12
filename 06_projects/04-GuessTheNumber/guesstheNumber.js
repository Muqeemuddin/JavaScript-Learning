const randomNumber = Math.floor(Math.random()*100 +1);
const form = document.querySelector('form');
let arr = []
let remainingAttempts = 10;
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const guessedNumber = parseInt(document.querySelector('#numberInput').value);
    const output = document.querySelector('.output');
    remainingAttempts--;
    if(guessedNumber<1 || guessedNumber>100 || isNaN(guessedNumber) || guessedNumber ===''){
         output.innerHTML= `Invalid number: ${guessedNumber}.\n Guess a number between 1 and 100.`
    }else{
        if(remainingAttempts!=0){
            if(guessedNumber>randomNumber){
            output.innerHTML = 'Smaller than that!!'
            arr.push(guessedNumber)
            document.querySelector('.guesses').innerHTML = arr
            document.querySelector('.remainingAttempt').innerHTML = remainingAttempts;
        }else if(guessedNumber<randomNumber){
            output.innerHTML ='Greater than that!!'
            arr.push(guessedNumber)
            document.querySelector('.guesses').innerHTML = arr
            document.querySelector('.remainingAttempt').innerHTML = remainingAttempts;
        }else{
            output.innerHTML = 'Horray!! You are right.'
        }
        }
        
    }
})