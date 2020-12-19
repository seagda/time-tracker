// Add today's date to the header
// make a variable for today's date, equal to today's date in moment.js

var todayDate = moment().format("dddd, MMMM Do");
var currentDayEl = $("#currentDay").text(todayDate);

console.log();

// TODO: each time block is color-coded to indicate whether it is in the past, present, or future

// TODO: Get local time 

// TODO: User needs to be able to enter an event

// TODO: Add onclick event for the save button

$("button").click(function(){
    var thisHour = $(this).attr("data-hour");
    console.log(thisHour);
    var thisTask = $(`#tasksHour${thisHour}`).val();
    console.log(thisTask);

    localStorage.setItem(thisHour, thisTask);    
});

// TODO: save event text to localstorage

// TODO: On reload, get data from localstorage and show in the textarea
$(document).ready(function(){
    for(var i=8; i <= 17; i++){  
        var taskStored = localStorage.getItem(i);
        var dispTask = $(`#tasksHour${i}`).val(taskStored);
    }


})