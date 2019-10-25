var timeDisplay = document.getElementById("timeDisplay")
var timer = document.getElementById("timer")
var startBtn = document.getElementById("startBtn")
var questionDiv = document.getElementById("question")
var answerBtn1 = document.getElementById("answer1")
var answerBtn2 = document.getElementById("answer2")
var answerBtn3 = document.getElementById("answer3")
var answerBtn4 = document.getElementById("answer4")
var feedback = document.getElementById("feedback")
var title = document.getElementById("pageTitle")
var qNum = 0
var timeLeft = 0
var quizTime = 0
var score = 0

// this function is to check if current page is highscore page
if (title.innerHTML === "Highscores") {
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
    timer.innerHTML = (timeLeft);
    quizTime = setInterval(tick, 1000);
}
//  function equates a tick to a second and determines when timer reaches zero
function tick() {
    if (timeLeft !== 0) {
     timeLeft--
     timer.innerHTML = (timeLeft)
    }
    else {
        clearInterval(quizTime)
        quizOver();
    }
    return;
}
//  function hides initial elements and shows quiz relevant ones, then starts main quiz function
function initQ() {
    document.querySelectorAll(".main").forEach(main => { main.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "initial" })
    quiz(qNum);
}
//  function checks if there are anymore questions and if not ends the quiz
function quiz() {   
    if (qNum >= questionsArray.length) {
    quizOver();
}
else {
    questionDiv.innerHTML = (questionsArray[qNum].title)
    answerBtn1.innerHTML = (questionsArray[qNum].choices[0])
    answerBtn2.innerHTML = (questionsArray[qNum].choices[1])
    answerBtn3.innerHTML = (questionsArray[qNum].choices[2])
    answerBtn4.innerHTML = (questionsArray[qNum].choices[3])
}}
//  function checks whether or not answer is the correct one
function answerCheck(btnId) {
    if ((document.getElementById(btnId).innerHTML) === (questionsArray[qNum].answer)) {
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
    score = timeLeft
    feedback.innerHTML = ("Correct");
    setTimeout(function() {feedback.innerHTML = ("");}, 800)
}
//  this function runs when answer is wrong
function wrongAnswer() {
    timeLeft = (timeLeft - 15)
    feedback.innerHTML = ("Wrong");
    setTimeout(function() {feedback.innerHTML = ("");}, 800)
}

//  this function generates the end screen and allows user to submit initials with their score
function quizOver() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('theContent')
    var done = document.getElementById("done")
    var submit = document.getElementById("submit")

    timer.innerHTML = (0)
    
    content.insertAdjacentHTML('afterbegin', '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-danger">Submit</button> <input id="userScore"> - Enter Initials</input>');

    var done = document.getElementById("done")
    done.insertAdjacentHTML('afterend', '<p id="finalScore">Your final score is ' + score + '</p>');

    var submit = document.getElementById("submit")
    submit.addEventListener("click", function(){
        var value = document.getElementById('userScore').value;
       localStorage.setItem(value, score)
       window.location.href = "highscore.html"
    });  
    clearInterval(quizTime)
}

// this function renders the table on the highscore table with the scores from local storage
function renderTable() {
    var tbody = document.getElementById("tableBody")
    for (let i = 0; i < localStorage.length; i++) {
     var userName = localStorage.key(i)
     var userScore = localStorage.getItem(userName)
     tbody.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + userName + ' - ' + userScore + '</td></tr>')
    }
}
//  this function has the clear highscores button work by clearing local storage and re-rendering table
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}