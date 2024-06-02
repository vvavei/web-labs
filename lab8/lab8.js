function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let russianDate = today.toLocaleString('ru-RU');
    
    let german = new Date();
    let germanDate = german.toLocaleString('de-DE');
    
    let greek = new Date();
    let greekDate = greek.toLocaleString('el-GR');
    
    let japan = new Date();
    let japanDate = japan.toLocaleString('ja-JP');
    
    let turkish = new Date();
    let turkishDate = turkish.toLocaleString('tr-TR'); 
    
    out.innerHTML = "Дата и время для русской локали: " + russianDate + "<br>";
    out.innerHTML += "Дата и время для немецкой локали: " + germanDate + "<br>"; 
    out.innerHTML += "Дата и время для локали Греции: " + greekDate + "<br>";   
    out.innerHTML += "Дата и время для локали Японии: " + japanDate + "<br>"; 
    out.innerHTML += "Дата и время для локали Турции: " + turkishDate;

    let additionalInf = document.getElementById('additional');
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    additionalInf.innerHTML += `
        Текущий год: ${today.getFullYear()}<br>
        Текущий месяц: ${months[today.getMonth()]}<br>
        Текущая дата: ${today.getDate()}<br>
        День недели: ${daysOfWeek[today.getDay()]}
    `;
}

function showDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1;
    let year = document.getElementById('input-year').value;
    let date = new Date(year, month, day);
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let dayOfWeek = daysOfWeek[date.getDay()];
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `День недели: ${dayOfWeek}`;
}

