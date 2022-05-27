var state = "start";

// query selectors
var startScreen = document.querySelector("#start");
var quizScreen = document.querySelector("#question");
var endScreen = document.querySelector("#end");
var startButton = document.querySelector("#begin");
var questionTitle = document.querySelector("#title");
var questionText = document.querySelector("#question-text");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var timerText = document.querySelector("#timer");
var correctAnswer = document.querySelector(".correct");
var score = document.querySelector("#score");

//timer var
var timer = 0;

// question setup vars
var currentQ = 0;
var questions = [
    {
        question: "What is a man?",
        answerA: "A miserable pile of secrets!",
        answerB: "XY",
        answerC: "yer mum",
        correctAnswer: "answer-a"
    },
    {
        question: "2 + 2",
        answerA: "77",
        answerB: "4",
        answerC: "1984",
        correctAnswer: "answer-b"
    },
    {
        question: "8 + 8",
        answerA: "6",
        answerB: "1",
        answerC: "16",
        correctAnswer: "answer-c"
    },
]

// displays block elements that contain "screens"
function displayState() {
    if (state === "start") {
        startScreen.style.display = "block";
        quizScreen.style.display = "none";
        endScreen.style.display = "none";
    }

    if (state === "question") {
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        endScreen.style.display = "none";
        setTime();
    }

    if (state === "end") {
        startScreen.style.display = "none";
        quizScreen.style.display = "none";
        endScreen.style.display = "block";
        tallyScore();
    }
}

//Updates questions
function questionDisplay() {
    questionTitle.textContent = "Question " + (currentQ + 1);
    questionText.textContent = questions[currentQ].question;
    answerA.textContent = questions[currentQ].answerA;
    answerB.textContent = questions[currentQ].answerB;
    answerC.textContent = questions[currentQ].answerC;
    answerA.classList.remove("correct");
    answerB.classList.remove("correct");
    answerC.classList.remove("correct");
    if (questions[currentQ].correctAnswer === "answer-a") {
        answerA.classList.add("correct");
    } else if (questions[currentQ].correctAnswer === "answer-b") {
        answerB.classList.add("correct");
    } else if (questions[currentQ].correctAnswer === "answer-c") {
        answerC.classList.add("correct");
    }
}

//Timer functions
function startTimer() {
    timerText.textContent = "Remaining time: " + timer;
}

function setTime() {
    startTimer();
    var timerInterval = setInterval(function () {
        timer--;
        startTimer();

        if (timer === 0) {
            clearInterval(timerInterval);
            state = "end";
            displayState();
        }
    }, 1000);
}

//scoreboard
function tallyScore() {
    score.textContent = "Your score: " + localStorage.getItem("timer score", timer);
}

// init
function init() {
    displayState();
}

// button listeners
startButton.addEventListener("click", function () {
    state = "question";
    displayState();
    timer = 5;
    startTimer();
    questionDisplay();
});


answerA.addEventListener("click", function (event) {
    var answer = event.target;
    if (answer.className.includes("correct")) {
        currentQ++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
            localStorage.setItem("timer score", timer);
        }
    }
});

answerB.addEventListener("click", function (event) {
    var answer = event.target;
    if (answer.className.includes("correct")) {
        currentQ++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
            localStorage.setItem("timer score", timer);
        }
    }
});

answerC.addEventListener("click", function (event) {
    var answer = event.target;
    if (answer.className.includes("correct")) {
        currentQ++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
            localStorage.setItem("timer score", timer);
        }
    }
});

questionTitle.addEventListener("click", function () {
    state = "end";
    displayState();
    localStorage.setItem("timer score", timer);
});

// runs the whole thing
init();
