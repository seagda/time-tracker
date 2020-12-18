// TODO: Add today's date to the header
// make a variable for today's date, equal to today's date in moment.js

var todayDate = moment().format("dddd, MMMM Do");
var currentDayEl = $("#currentDay").text(todayDate);

// TODO: Build the container for time blocks

/*var displayTimeBlocks = function(){
    var plannerBody = $("#dayPlannerTable");
    for (var i = 0; i <= 9; i++){
        var newTask = $(`
        <tr>
        <td class="col-md-3" data-field="hour" data-sortable="false" data-align="center">${i}</td>
        <td class="col-md-8" data-field="name" data-editable="true">Tasks</td>
        <td class="col-md-1" data-field="description" data-editable="true"><button>Save</button></td>
        </tr>`)
    
        plannerBody.append(newTask);
        console.log("testing loop");
        }
}
displayTimeBlocks();
*/

// TODO: each time block is color-coded to indicate whether it is in the past, present, or future

// TODO: Get local time 

// TODO: User needs to be able to enter an event

// TODO: Add onclick event for the save button

// TODO: save event text to localstorage

// TODO: Pull data from localstorage
