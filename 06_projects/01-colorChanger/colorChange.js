const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        document.querySelector('body').style.backgroundColor = e.target.id;
    })
})