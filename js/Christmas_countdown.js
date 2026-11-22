const days = document.getElementById('dni')
const hours = document.getElementById('hodin')
const minutes = document.getElementById('minut')
const seconds = document.getElementById('sekund')

document.getElementById("dni").textContent = days;
document.getElementById("hodin").textContent = String(hours).padStart(2, "0");
document.getElementById("minut").textContent = String(minutes).padStart(2, "0");
document.getElementById("sekund").textContent = String(seconds).padStart(2, "0");

let countDownDate = "2026-12-24T00:00";
let countdown = new Date(countDownDate).getTime();

let updateTime = setInterval(function()
{
    let currentDate = new Date().getTime();
    let Diffrence = countdown - currentDate;

    let d = Math.floor(Diffrence / (1000 * 60 * 60 * 24));
    let h = Math.floor(Diffrence % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.floor(Diffrence % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(Diffrence % (1000 * 60) / 1000);

    days.innerHTML = d < 10 ? "0" + d : d
    hours.innerHTML = h < 10 ? "0" + h : h
    minutes.innerHTML = m < 10 ? "0" + m : m
    seconds.innerHTML = s < 10 ? "0" + s : s
}, 1000)