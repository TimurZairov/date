'use strict';

let hi = document.querySelector('.hi'),
    today = document.querySelector('.today'),
    time = document.querySelector('.time');
    let newYear = document.querySelector('.newyear');

let date = new Date();

//Привествие на странице
let hours = date.getHours();
        if(hours > 5 && hours < 11){
            hi.textContent ='Доброе утро';
        }else if(hours > 11 && hours < 17){
            hi.textContent ='Добрый день';
        }else if(hours > 17 && hours < 22){
            hi.textContent ='Добрый вечер';
        }else if(hours > 22 && hours < 5){
            hi.textContent ='Доброй ночи';
};

//день недели
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let weekDay = date.getDate();
today.textContent = `Сегодня: ${days[weekDay]}`;


// часы на сегодня
function timeDate (){
    return new Date().toTimeString().replace(/ .*/, '');
}
setInterval(() => {
    time.textContent = `Текущее время: ${timeDate()}`
}, 1000);

//до нового года осталось
 function NewYear (greatHolyday){

    let dateStop = new Date(greatHolyday).getTime(),
    timeRamaining = (dateStop - date) / 1000;
    let day = Math.floor(timeRamaining / 60 /60 / 24);
    return day;    
}
let tillNewYear = NewYear('31 december 2021');
newYear.textContent =`До нового года осталось ${tillNewYear} дней`;