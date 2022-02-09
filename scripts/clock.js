const today = document.querySelector("h2#today");
const clock = document.querySelector("h2#clock");

const monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

const date = new Date();
const year = date.getFullYear();
const month = monthes[date.getMonth()];
const day = date.getDate();
today.innerText = `${month} ${day}, ${year}`

getClock();
setInterval(getClock, 1000);