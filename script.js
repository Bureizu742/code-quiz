console.log("hello world");
var state = "start";

var startElement = document.querySelector("#start");
var quizElement = document.querySelector("#quiz");
var endElement = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");

function displayState() {
    if (state === "start") {
        startElement.style.display = "block";
        quizElement.style.display = "none";
        endElement.style.display = "none";
    }

    if (state === "quiz") {
        startElement.style.display = "none";
        quizElement.style.display = "block";
        endElement.style.display = "none";
    }

    if (state === "end") {
        startElement.style.display = "none";
        quizElement.style.display = "none";
        endElement.style.display = "block";
    }
}

function init() {
    displayState();
}

startButton.addEventListener("click", function() {
    state = "quiz";
    displayState();
});

quizTitle.addEventListener("click", function() {
    state = "end";
    displayState();
});

init();