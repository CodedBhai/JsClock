
let time = document.getElementById('time')
let Showdate = document.getElementById('date')
let date = new Date()
const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"}
time.innerText = date.toLocaleTimeString()
Showdate.innerText = date.toLocaleDateString(undefined, options)

setInterval(() => {
    let date = new Date()
    time.innerText = date.toLocaleTimeString()
    Showdate.innerText = date.toLocaleDateString(undefined, options)
}, 1000);
