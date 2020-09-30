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

currentDayEl.text(moment.format('MMMM DD YYYY'));

// if id of text area is 