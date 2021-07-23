
var username = prompt("İsminizi yazınız: ");
document.getElementById("myName").innerHTML = username;


function showTime() {
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentSeconds = date.getSeconds();
    var currentDay = date.getDay();

    switch(currentDay) {
        case 0:
            currentDay = "Pazar";
            break;
        case 1: 
            currentDay  = "Pazartesi";
            break;
        case 2: 
            currentDay  = "Salı";
            break;
        case 3: 
            currentDay  = "Çarşamba";
            break;
        case 4: 
            currentDay  = "Perşembe";
            break;
        case 5: 
            currentDay  = "Cuma";
            break;
        case 6: 
            currentDay  = "Cumartesi";
            break;
        default:
            currentDay = "Unknown";
            break;
    }

    currentHours = currentHours < 10 ? "0"+currentHours : currentHours;
    currentMinutes = currentMinutes < 10 ? "0"+currentMinutes : currentMinutes;
    currentSeconds = currentSeconds < 10 ? "0"+currentSeconds : currentSeconds;

    var currentDate = `${currentHours}:${currentMinutes}:${currentSeconds} ${currentDay}`
    document.getElementById("myClock").innerHTML = currentDate;
    document.getElementById("myClock").textContent = currentDate;
    
    var interval = setTimeout(showTime, 1000);
}

showTime();