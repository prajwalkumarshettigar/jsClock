const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const hour = now.getHours();
    const min = now.getMinutes();
    const secDegrees = ((sec/60)*360) + 90
    const minDegrees = ((min/60)*360) + 90
    const hourDegrees = ((hour/12)*360) + 90
    secHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval( setDate, 1000)
