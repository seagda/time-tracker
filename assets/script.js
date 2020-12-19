// Add today's date to the header
// make a variable for today's date, equal to today's date in moment.js

var todayDate = moment().format("dddd, MMMM Do");
var currentDayEl = $("#currentDay").text(todayDate);

console.log();

// Add onclick event for the save button

$("button").click(function(){
    var thisHour = $(this).attr("data-hour");
    console.log(thisHour);
    var thisTask = $(`#tasksHour${thisHour}`).val();
    console.log(thisTask);

// save event text to localstorage

    localStorage.setItem(thisHour, thisTask);    
});

// On reload, get data from localstorage and show in the textarea
$(document).ready(function(){
    var currTime = Number(moment().format("k"));
    console.log(typeof currTime);
    for(var hour=8; hour <= 17; hour++){  
        var taskStored = localStorage.getItem(hour);
        var dispTask = $(`#tasksHour${hour}`).val(taskStored);
        console.log(dispTask);

        if (hour === currTime){
            dispTask.addClass("present");
        } else if (hour < currTime){
            dispTask.addClass("past");
        } else {
            dispTask.addClass("future");
        }
    }
})