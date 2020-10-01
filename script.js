var currentDayEl = $("#currentDay");
var moment = moment();

$(".saveBtn").on("click", function() { // Click the save button to save that hour's tasks
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(value);
    console.log(time);
    localStorage.setItem(time, value);
})

function hourUpdater() { // Color codes the hour blocks based on if they're past, current, or future
    var currentHour = moment.hours();
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



currentDayEl.text(moment.format('MMMM DD YYYY')); // Displays current date at the top of the page

hourUpdater();



$(".time-block").each(function() { // Retrieves events from storage
    var number = $(this).attr("id");
    console.log(number);
    var storedTodos = localStorage.getItem(number);
    console.log(storedTodos);
    var textDescription = $(this).children(".description");
    console.log(textDescription);
    

    if (storedTodos != null) {
        textDescription.val(storedTodos);
    }
})