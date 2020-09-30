var currentDayEl = $("#currentDay");
var moment = moment();

var block9El = $("#9am-tasks");
var block10El = $("#10am-tasks");
var block11El = $("#11am-tasks");
var block12El = $("#12pm-tasks");
var block1El = $("#1pm-tasks");
var block2El = $("#2pm-tasks");
var block3El = $("#3pm-tasks");
var block4El = $("#4pm-tasks");
var block5El = $("#5pm-tasks");

$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(value);
    console.log(time);
    localStorage.setItem(time, value);
})

function hourUpdater() {
    currentHour = moment.hours();
    console.log(currentHour);
    $(".time-block").each(function() {
        var rowHour = parseInt($(this).attr("id"));
        console.log(rowHour);

        if (rowHour > currentHour){
            $(this).addClass("future");
        } else if (rowHour == currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}



currentDayEl.text(moment.format('MMMM DD YYYY'));

hourUpdater();