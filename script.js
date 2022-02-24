var dayEl = document.querySelector("#currentDay")
var inputContainerEl = document.querySelector(".text-box");
var findContent = document.querySelectorAll('[contenteditable]');
var currentBoxText = [];
var currentBox = [];



// current time display 
var displayCurrentDay = function () {

    dayEl.textContent = moment().format('MMM Do YYYY');
}



// this is a textbox users can use
var createText = function () {
    $(".text-box").attr("contenteditable", "true");
};



// colors backgrounds depending on date and time   
var colorCode = function () {
    var currentHour = moment().hour();
    for (var i = 0; i < $(".hour").length; i++) {
        var timeOfRow = $(".hour")[i].innerHTML;
        var newTime = parseInt(timeOfRow);
        if (newTime < 9) {
            newTime + 12;
            // grey background
            if (newTime < currentHour) {
                var pastTime = $(".hour").closest(".row").find(".text-box").addClass("past");
            }
            // red background
            else if (currentHour === newTime) {
                var now = $(".hour").closest(".row").find(".text-box").addClass("present");
            }
            // green background
            else if (newTime > currentHour) {
                var futureTime = $(".hour").closest(".row").find(".text-box").addClass("future");
            }
        }
        else {
            // grey background
            if (newTime < currentHour) {
                $(".hour").closest(".row").find(".text-box").addClass("past");
            }
            // red background
            else if (currentHour === newTime) {
                $(".hour").closest(".row").find(".text-box").addClass("present");
            }
            // green background
            else if (newTime > currentHour) {
                $(".hour").closest(".row").find(".text-box").addClass("future");
            }
        }
    }
};



// local storage for save button
var saveButtonHandler = function () {
    var savedInfo = document.querySelector('[contenteditable]');
    localStorage.setItem('content', savedInfo.textContent);
};



var main = function () {
    displayCurrentDay();
    createText();
    colorCode();
};



main();
$(".saveBtn").click(saveButtonHandler);

