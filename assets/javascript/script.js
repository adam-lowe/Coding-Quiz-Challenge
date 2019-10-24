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
var qNum = 1
var timeLeft = 0
var quizTime = 0

// set initial timer value and fire off two functions
function quizStart() {
    timeLeft = 75
    startTimer();
    initQ();
}
//  function changes timer display every tick (second)
function startTimer() {
    timer.html(timeLeft);
    quizTime = setInterval(tick, 1000);
}
//  function equates a tick to a second and determines when timer reaches zero
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
//  function hides initial elements and shows quiz relevant ones, then starts main quiz function
function initQ() {
    $(".main").hide();
    $(".quiz").show();
    quiz(1);
}

function quiz(questionNumber) {
    questionDiv.html(questionsArray[questionNumber].title)
    answerBtn1.html(questionsArray[questionNumber].choices[0])
    answerBtn2.html(questionsArray[questionNumber].choices[1])
    answerBtn3.html(questionsArray[questionNumber].choices[2])
    answerBtn4.html(questionsArray[questionNumber].choices[3])
}
// how to get text in button \/
// $(answerBtn1).html()