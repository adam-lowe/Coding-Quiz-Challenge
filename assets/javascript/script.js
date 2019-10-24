var timeDisplay = $("#timeDisplay")
var timer = $("#timer")
var startBtn = $("#startBtn")
var questionDiv = $("#question")
var answerBtn1 = $("#answer1")
var answerBtn2 = $("#answer2")
var answerBtn3 = $("#answer3")
var answerBtn4 = $("#answer4")
var feedback = $("#feedback")
var qNum = 0
var timeLeft = 0
var quizTime = 0
var score = 0

// this function is to check if current page is highscore page
if ($('title').html() === "Highscores") {
    renderTable();
}

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
    quiz(qNum);
}
//  function checks if there are anymore questions and if not ends the quiz
function quiz() {   
    if (qNum >= questionsArray.length) {
    quizOver();
}
else {
    questionDiv.html(questionsArray[qNum].title)
    answerBtn1.html(questionsArray[qNum].choices[0])
    answerBtn2.html(questionsArray[qNum].choices[1])
    answerBtn3.html(questionsArray[qNum].choices[2])
    answerBtn4.html(questionsArray[qNum].choices[3])
}}
//  function checks whether or not answer is the correct one
function answerCheck(btnId) {
    if (($("#" + btnId).html()) === (questionsArray[qNum].answer)) {
        rightAnswer();
        qNum++
    }
    else {
        wrongAnswer();
        qNum++
    }
    quiz(qNum);
}
//  this function runs when answer is right
function rightAnswer() {
    score = (score + timeLeft)
    $(feedback).html("Correct");
    setTimeout(function() {$(feedback).html("");}, 800)
}
//  this function runs when answer is wrong
function wrongAnswer() {
    timeLeft = (timeLeft - 15)
    $(feedback).html("Wrong");
    setTimeout(function() {$(feedback).html("");}, 800)
}

//  this function generates the end screen and allows user to submit initials with their score
function quizOver() {
    $(".quiz").hide();
    $(".content").prepend('<h1 class="done">All Done!</h1> <button id="submit" class="btn btn-danger">Submit</button> <input id="userScore"> - Enter Initials</input>')
    $(".done").after('<p id="finalScore">Your final score is ' + score + '</p>');
    $('#submit').click(function(){
        var value = $('#userScore').val();
       localStorage.setItem(value, score);

    });  
    clearInterval(quizTime)
}

// this function renders the table on the highscore table with the scores from local storage
function renderTable() {
    $(".scores").remove();
    for (let i = 0; i < localStorage.length; i++) {
     var userName = localStorage.key(i)
     var userScore = localStorage.getItem(userName)
     $("tbody").after('<tr class="scores"><td>' + userName + ' - ' + userScore + '</td></tr>');
    }
}
//  this function has the clear highscores button work by clearing local storage and re-rendering table
function clearStorage() {
    localStorage.clear();
    renderTable();
}