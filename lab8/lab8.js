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
}
