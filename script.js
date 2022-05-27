var state = "start";

// query selectors
var startScreen = document.querySelector("#start");
var quizScreen = document.querySelector("#question");
var endScreen = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var questionTitle = document.querySelector("#title");
var questionText = document.querySelector("#question-text");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var timerText = document.querySelector("#timer");

// question setup vars
var currentQ = 0;
var score = 0;
var timer = 60;
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
    }

    if (state === "end") {
        startScreen.style.display = "none";
        quizScreen.style.display = "none";
        endScreen.style.display = "block";
    }
}

//html for the question screens needs to be written to the elements and output
function questionDisplay() {
    questionTitle.textContent = "Question " + (currentQ + 1);
    questionText.textContent = questions[currentQ].question;
    answerA.textContent = questions[currentQ].answerA;
    answerB.textContent = questions[currentQ].answerB;
    answerC.textContent = questions[currentQ].answerC;
    // timerText.textContent = "Remaining time: " + timer;    
}

// init
function init() {
    displayState();
}

// button listeners to move on
startButton.addEventListener("click", function () {
    state = "question";
    displayState();
    // timer = 60;
    // startTimer();
    questionDisplay();
});


answerA.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(questions[currentQ].correctAnswer)) {
        currentQ++;
        score++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
        }
    } else {
        currentQ++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
        }
    }
    console.log(questions.length);
    console.log("score" + score);
    console.log("question index" + currentQ);
});

answerB.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(questions[currentQ].correctAnswer)) {
        currentQ++;
        score++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
        }
    } else {
        currentQ++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
        }
    }
    console.log("score" + score);
    console.log("question index" + currentQ);
});

answerC.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(questions[currentQ].correctAnswer)) {
        currentQ++;
        score++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
        }
    } else {
        currentQ++;
        if (currentQ < questions.length) {
            questionDisplay();
        } else {
            state = "end";
            displayState();
        }
    }
    console.log("score" + score);
    console.log("question index" + currentQ);
});

questionTitle.addEventListener("click", function () {
    state = "end";
    displayState();
});

// runs the whole thing
init();


//TODO: timer stuff
// start button making timer count snippet
// function displayMessage(){
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
//   }
  
//   function setTime() {
//     // Sets interval in variable
//     displayMessage();
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       displayMessage();
  
//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         sendMessage();
//       }
  
//     }, 1000);
//   }
  
//   // Function to create and append colorsplosion image
//   function sendMessage() {
//     timeEl.textContent = " ";
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
  
//   }
  