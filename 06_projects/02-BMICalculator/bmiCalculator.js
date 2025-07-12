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
        const span = document.createElement('span');
        results.innerHTML = `<span>Your BMI is ${bmi}</span><br>`;
        if(bmi<18.6){
            span.textContent='You are Underweight';
            span.style.color = 'orange';
            results.appendChild(span)
        }
        if(bmi>=18.6 && bmi <= 24.9){
            span.textContent='Your BMI is Normal';
            span.style.color = 'green';
            results.appendChild(span)
        }
        if(bmi>24.9){
            span.textContent='You are Overweight';
            span.style.color = 'red';
            results.appendChild(span)
            
        }
    }
})


