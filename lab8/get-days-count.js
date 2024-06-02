function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let resultDiv = document.getElementById('days');
    resultDiv.innerHTML = `Количество дней с даты рождения: ${daysCount}`;
    
}

function clearBlock() {
    document.getElementById('input-date').value = '';
    document.getElementById('days').innerHTML = '';
}