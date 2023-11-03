var startBtn = document.querySelector('#start_btn');
var startQuizContainer = document.querySelector('#quiz_style_container');
var questionOne = document.querySelector('#question_1');



// USER CLICKS "START QUIZ" & IS PRESENTED BY THE FIRST QUESTION
function startQuiz() {
    startBtn.addEventListener('click', function () {
        startQuizContainer.style.display = "none";
        questionOne.style.display = "flex";
    });
}
startQuiz();






//Question 1 to Question 2
var questionTwo = document.querySelector('#question_2');
var clickAnswer1 = document.querySelectorAll('.answer_1');


function showQuestion2() {
    questionOne.style.display = "none";
    questionTwo.style.display = "flex";
}

clickAnswer1.forEach(function (answer1) {
    answer1.addEventListener('click', showQuestion2);
});









// Displays whether User's Answer was RIGHT or WRONG when they click on an ANSWER

function showResultRight() {
    var resultEl = document.createElement('h3');
    resultEl.innerText = "Right";
    document.body,appendChild(resultEl);
}

function showResultWrong() {
    var resultEl = document.createElement('h3');
    resultEl.innerText = "Wrong";
    document.body,appendChild(resultEl);
}
















//Question 2 to Question 3
var questionThree = document.querySelector('#question_3')
var clickAnswer2 = document.querySelectorAll('.answer_2')


function showQuestion3() {
    questionTwo.style.display = "none"
    questionThree.style.display = "flex"
}

clickAnswer2.forEach(function (answer2) {
    answer2.addEventListener('click', showQuestion3);
});










//Question 3 to Question 4
var questionFour = document.querySelector('#question_4')
var clickAnswer3 = document.querySelectorAll('.answer_3')

function showQuestion4() {
    questionThree.style.display = "none"
    questionFour.style.display = "flex"
}

clickAnswer3.forEach(function (answer3) {
    answer3.addEventListener('click', showQuestion4);
});










//Question 4 to Question 5
var questionFive = document.querySelector('#question_5')
var clickAnswer4 = document.querySelectorAll('.answer_4')

function showQuestion5() {
    questionFour.style.display = "none"
    questionFive.style.display = "flex"
}

clickAnswer4.forEach(function (answer4) {
    answer4.addEventListener('click', showQuestion5);
});








//Question 5 to End Screen
var endScreen = document.querySelector('#end_screen')
var clickAnswer5 = document.querySelectorAll('.answer_5')

function showEndScreen() {
    questionFive.style.display = "none"
    endScreen.style.display = "flex"
}

clickAnswer5.forEach(function (answer5) {
    answer5.addEventListener('click', showEndScreen)
})










// USER INPUTS NAME OR INTIALS
function addName() {
    var nameInput = document.getElementById("nameInput");
    var leaderboard = document.getElementById("leaderboard");

    var playerName = nameInput.value;
    
    if (playerName) {
        var li = document.createElement("li");
        li.textContent = playerName;
        leaderboard.appendChild(li);
        nameInput.value = "";
    }
}
