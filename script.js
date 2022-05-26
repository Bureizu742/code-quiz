var state = "start";

// query selectors
var startScreen = document.querySelector("#start");
var question = document.querySelector("#question");
var endScreen = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var questionTitle = document.querySelector("#question h2");
// var questionContainer = document.querySelector("#title");

// question setup vars
var questionArray = ["q1", "q2", "q3", "q4"];
var currentQuestion = 0;
var score = 0;
 
var questions = [
   {
    question: "What is a man?",
       answers: {
           a: "A miserable pile of secrets!",
           b: "XY",
           c: "yer mum"
       },
       correctAnswer: "a"
   },
   {
    question: "What is a man?",
       answers: {
           a: "A miserable pile of secrets!",
           b: "XY",
           c: "yer mum"
       },
       correctAnswer: "b"
   },
   {
    question: "What is a man?",
       answers: {
           a: "A miserable pile of secrets!",
           b: "XY",
           c: "yer mum"
       }, 
       correctAnswer: "c"
   },
]

//not sure
function questionSet() {
    var questionText = document.createElement("p");
    questionContainer.innerHTML = "";
    questionText.textContent();
    questionText.appendChild(questionPlacehold);
}

// displays block elements that contain "screens"
function displayState() {
    if (state === "start") {
        startScreen.style.display = "block";
        question.style.display = "none";
        endScreen.style.display = "none";
    }

    if (state === "question") {
        startScreen.style.display = "none";
        question.style.display = "block";
        endScreen.style.display = "none";
    }

    if (state === "end") {
        startScreen.style.display = "none";
        question.style.display = "none";
        endScreen.style.display = "block";
    }
}

// init
function init() {
    displayState();
}

// button listeners to move on
startButton.addEventListener("click", function () {
    state = "question";
    displayState();
});

//TODO: a listener for answers that moves from one question to the next

questionTitle.addEventListener("click", function () {
    state = "end";
    displayState();
});

// runs the whole thing
init();


//TODO: timer stuff
