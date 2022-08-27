const todaysDate = moment().format('MMMM Do YYYY, h:mm a')
$("#currentDay").html(todaysDate);

const pastTimeBlock = document.querySelectorAll("time-block");
const presentTimeBlock = document.querySelectorAll("time-block");
const futureTimeBlock = document.querySelectorAll("time-block");

const timeBlock = document.querySelectorAll("time-block");


let saveBtn = document.querySelector("#saveBtn");
localStorage.setItem(time, text);
let time = localStorage.getItem(time);

(function () {
    saveBtn.onclick = function() {
        saveBtn.textContent = text;
    };
})