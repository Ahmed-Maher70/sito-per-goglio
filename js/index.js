let countDownDate = new Date("June 14, 2025 11:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let giorni = Math.floor(distance / (1000 * 60 * 60 * 24));
    let ore = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuti = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondi = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("giorni").innerHTML = giorni;
    document.getElementById("ore").innerHTML = ore;
    document.getElementById("minuti").innerHTML = minuti;
    document.getElementById("secondi").innerHTML = secondi;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("giorni").innerHTML = "00";
        document.getElementById("ore").innerHTML = "00";
        document.getElementById("minuti").innerHTML = "00";
        document.getElementById("secondi").innerHTML = "00";
    }

},1000);

let loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})