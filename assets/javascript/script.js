//TODO: Get all the link buttons to function onclick
//  - get clear highscore button to clear local storage
// Link this and other js scripts (including jquery) to html
var timeDisplay = $("#timeDisplay")
var timer = $("#timer")
var startBtn = $("#startBtn")
var timeLeft = 0
var quizTime = 0

function quizStart() {
    timeLeft = 75
    startTimer();
    initQ();
}
