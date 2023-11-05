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

// ADDING TO SCORE
function addToScore(value) {
    score += value;
    updateScoreDisplay();
}

// Displays Score on the screen
score = 0

function updateScoreDisplay() {
    var scoreEl = document.querySelector('#score');
    scoreEl.innerHTML = 'Score: ' + score;
}

// Displays whether User's Answer was RIGHT or WRONG when they click on an ANSWER
//The result of their answer showing and hiding for a certain amount of time
function showResultRight() {
    var resultEl = document.createElement('h4');
    resultEl.innerText = "Right";
    document.body.appendChild(resultEl);
    resultEl.style.display = 'flex'
    resultEl.style.justifyContent = 'center'
    resultEl.style.alignContent = 'center'
    resultEl.style.marginTop = '2vh'
    resultEl.style.fontSize = '3rem'

    addToScore(10);

    updateScoreDisplay();

    setTimeout(function () {
        document.body.removeChild(resultEl);
    }, 500);
}

function showResultWrong() {
    var resultEl = document.createElement('h4');
    resultEl.innerText = "Wrong";
    document.body.appendChild(resultEl);
    resultEl.style.display = 'flex'
    resultEl.style.justifyContent = 'center'
    resultEl.style.alignContent = 'center'
    resultEl.style.marginTop = '2vh'
    resultEl.style.fontSize = '3rem'

    score--;

    updateScoreDisplay();

    setTimeout(function () {
        document.body.removeChild(resultEl);
    }, 500);
}












//Question 1 to Question 2
var questionTwo = document.querySelector('#question_2');
var clickAnswer1Right = document.querySelectorAll('.answer_1right');
var clickAnswer1Wrong = document.querySelectorAll('.answer_1wrong');


function showQuestion2() {
    questionOne.style.display = "none";
    questionTwo.style.display = "flex";
};

// DISPLAYS WHETHER USER CHOICE OF ANSWER IS RIGHT OR WRONG
clickAnswer1Right.forEach(function (answer1) {
    answer1.addEventListener('click', showQuestion2);
    answer1.addEventListener('click', showResultRight);
});

clickAnswer1Wrong.forEach(function (answer1) {
    answer1.addEventListener('click', showQuestion2);
    answer1.addEventListener('click', showResultWrong);
});


//Question 2 to Question 3
var questionThree = document.querySelector('#question_3')
var clickAnswer2Right = document.querySelectorAll('.answer_2right')
var clickAnswer2Wrong = document.querySelectorAll('.answer_2wrong')


function showQuestion3() {
    questionTwo.style.display = "none"
    questionThree.style.display = "flex"
};

// DISPLAYS WHETHER USER CHOICE OF ANSWER IS RIGHT OR WRONG
clickAnswer2Right.forEach(function (answer2) {
    answer2.addEventListener('click', showQuestion3);
    answer2.addEventListener('click', showResultRight);
});

clickAnswer2Wrong.forEach(function (answer2) {
    answer2.addEventListener('click', showQuestion3);
    answer2.addEventListener('click', showResultWrong);
});


//Question 3 to Question 4
var questionFour = document.querySelector('#question_4')
var clickAnswer3Right = document.querySelectorAll('.answer_3right')
var clickAnswer3Wrong = document.querySelectorAll('.answer_3wrong')


function showQuestion4() {
    questionThree.style.display = "none"
    questionFour.style.display = "flex"
};

// DISPLAYS WHETHER USER CHOICE OF ANSWER IS RIGHT OR WRONG
clickAnswer3Right.forEach(function (answer3) {
    answer3.addEventListener('click', showQuestion4);
    answer3.addEventListener('click', showResultRight);
});

clickAnswer3Wrong.forEach(function (answer3) {
    answer3.addEventListener('click', showQuestion4);
    answer3.addEventListener('click', showResultWrong);
});


//Question 4 to Question 5
var questionFive = document.querySelector('#question_5')
var clickAnswer4Right = document.querySelectorAll('.answer_4right')
var clickAnswer4Wrong = document.querySelectorAll('.answer_4wrong')


function showQuestion5() {
    questionFour.style.display = "none"
    questionFive.style.display = "flex"
};

// DISPLAYS WHETHER USER CHOICE OF ANSWER IS RIGHT OR WRONG
clickAnswer4Right.forEach(function (answer4) {
    answer4.addEventListener('click', showQuestion5);
    answer4.addEventListener('click', showResultRight);
});

clickAnswer4Wrong.forEach(function (answer4) {
    answer4.addEventListener('click', showQuestion5);
    answer4.addEventListener('click', showResultWrong);
});


//Question 5 to End Screen
var endScreen = document.querySelector('#end_screen')
var clickAnswer5Right = document.querySelectorAll('.answer_5right')
var clickAnswer5Wrong = document.querySelectorAll('.answer_5wrong')

function showEndScreen() {
    questionFive.style.display = "none"
    endScreen.style.display = "flex"

    var finalScoreEl = document.querySelector('#final_score');
    finalScoreEl.innerText = 'Your Final Score: ' + score;
};

// DISPLAYS WHETHER USER CHOICE OF ANSWER IS RIGHT OR WRONG
clickAnswer5Right.forEach(function (answer5) {
    answer5.addEventListener('click', showEndScreen);
    answer5.addEventListener('click', showResultRight);
});

clickAnswer5Wrong.forEach(function (answer5) {
    answer5.addEventListener('click', showEndScreen);
    answer5.addEventListener('click', showResultWrong);
});


// USER INPUTS NAME OR INTIALS
function addName() {
    var leaderboardContainer = document.getElementById('style_leaderboard_container')
    var endScreen = document.getElementById('end_screen');
    var nameInput = document.getElementById("nameInput");
    var leaderboard = document.getElementById("leaderboard");
    var finalScoreEl = document.querySelector('#final_score');

    var playerName = nameInput.value;

    if (playerName) {
        var li = document.createElement("li");
        li.textContent = playerName + ' ' + 'Scored ' + score + ' ' + 'points!';
        leaderboard.appendChild(li);
        nameInput.value = "";

        li.style.display = 'flex'
        leaderboardContainer.style.display = 'flex'
        leaderboardContainer.style.alignContent = 'center'
        leaderboardContainer.style.justifyContent = 'center'
        endScreen.style.display = 'none'
    }
}













// CLEARS LEADERBOARD
function clearBoard() {
    var clearBtn = document.querySelector('#clear_btn');
    var listedNames = document.querySelectorAll('li');

    clearBtn.addEventListener('click', function () {
        listedNames.forEach(function (nameItem) {
            nameItem.remove();
        });
    });
}

// RESTARTS QUIZ
function restartQuiz() {
    var restartBtn = document.querySelector('#restart_btn');
    var leaderboardContainer = document.getElementById('style_leaderboard_container');
    var startQuizContainer = document.querySelector('#quiz_style_container');
    restartBtn.addEventListener('click', function () {
        leaderboardContainer.style.display = 'none';
        startQuizContainer.style.display = 'flex';

        score = 0;
        updateScoreDisplay();
    })
}