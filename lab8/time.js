function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
    let sec = today.getSeconds(); 
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(showTime, 1000);

let totalDegrees = 0;

function showhand() {
    let secondHand = document.getElementById('second-hand');
    let now = new Date();
    let seconds = now.getSeconds();
    totalDegrees = seconds * 6;  // 6 градусов каждую секунду
    secondHand.style.transform = `rotate(${totalDegrees}deg)`;
}

setInterval(showhand, 1000);
