//TODO: Get all the link buttons to function onclick
//  - get clear highscore button to clear local storage
// Link this and other js scripts (including jquery) to html
var timeDisplay = $("#timeDisplay")
var timer = $("#timer")
var startBtn = $("#startBtn")
var questionDiv = $("#question")
var answerBtn1 = $("#answer1")
var answerBtn2 = $("#answer2")
var answerBtn3 = $("#answer3")
var answerBtn4 = $("#answer4")
var timeLeft = 0
var quizTime = 0

function quizStart() {
    timeLeft = 75
    startTimer();
    initQ();
}

function startTimer() {
    timer.html(timeLeft);
    quizTime = setInterval(tick, 1000);
}

function tick() {
    if (timeLeft !== 0) {
     timeLeft--
     timer.html(timeLeft)
    }
    else {
        alert("time up")
    clearInterval(quizTime)
    }
    return;
}

function initQ() {
    $(".main").hide();
    $(".quiz").show();
    
}