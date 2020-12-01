'use strict';


(function getTime() {
    const timeBox = document.querySelector('.time');
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    function checkTime(value) {
        if (value < 10) {
            value = '0' + value
        };
        return value;
    }
    timeBox.textContent = (`${hours}:${minutes}:${seconds}`);
    setInterval(getTime, 1000);
})();
