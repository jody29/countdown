const targetDateTimeUTC = new Date('2024-06-27T11:00:00Z');

const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

const updateCountdown = () => {
    const currentDateTimeUTC = new Date().getTime() - 60 * 60 * 1000;
    const currentDateTime = new Date(currentDateTimeUTC)

    const timeDifference = targetDateTimeUTC - currentDateTime

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysEl.textContent = days
    hoursEl.textContent = hours
    minutesEl.textContent = minutes
    secondsEl.textContent = seconds

    if (timeDifference <= 0) {
        countdownElement.textContent = 'TIME FOR DEFQON 1!'
        clearInterval(countdownElement)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('#miiMusic')
    audio.play()
})

const countdownInterval = setInterval(updateCountdown, 1000)