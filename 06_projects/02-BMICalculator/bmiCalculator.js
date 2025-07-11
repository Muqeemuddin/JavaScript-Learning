document.querySelector('button').addEventListener('click', (e) =>{
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    if(height === NaN || weight === NaN){
        document.querySelector('#results').appendChild(document.createTextNode("Please enter valid numbers"))
    }else{
        const bmi = Math.round((weight/ ((height*height)/10000))*10) / 10;
        document.querySelector('#results').innerHTML = `Your BMI is ${bmi}`;
    }
})


