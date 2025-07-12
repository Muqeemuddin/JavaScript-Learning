const output = document.querySelector('.result');
setInterval(()=>{
    const date = new Date();
    output.innerHTML = date.toLocaleTimeString()
}, 1000)
