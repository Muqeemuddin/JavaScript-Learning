const form = document.querySelector('form');
// event type is not click but a submit. Here the button is clicked for submitting a form. So event Type should be taken as submit.
form.addEventListener('submit', (e) =>{
    e.preventDefault(); // Upon submitting the form, the immediate action will be to send the form details to the server. as the submit action involves either get or post request.
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');
    if(height ==='' || height <0 || isNaN(height)){
        results.innerHTML = "Please enter valid height"
    }else if(weight ==='' || weight <0 || isNaN(weight)){
        results.innerHTML = "Please enter valid weight"
    }else{
        const bmi = Math.round((weight/ ((height*height)/10000))*10) / 10;
        results.innerHTML = `Your BMI is ${bmi}`;
    }
})


