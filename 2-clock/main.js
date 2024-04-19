const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


const setDate = () => {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const minsDegrees = ((mins / 60) * 360) + ((secs / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const secondsDegrees = ((secs / 60) * 360) + 270;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (secs === 0) {
        secondHand.style.transition = 'none';
      } else {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
      }
}

setInterval(setDate, 1000);

setDate();
