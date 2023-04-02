var button = document.createElement("button");
button.innerText = "Start button"
document.body.appendChild(button);
var secondsRemaining = 100;
var time = document.getElementById("time");
console.log(time);
var showButtons = document.getElementById("buttons");
var askQuestion
var singleAnswers = []
var playerAnswer

var questions = [{
    query: "Who won the World Cup in 2022?",
    possibleAnswers: ["France", "Argentina", "Brazil", "England"],
    correctAnswer: "Argentina"
}, {
    query: "Who won the World Series in 2022?",
    possibleAnswers: ["Braves", "Dodgers", "Astros", "Yankees"],
    correctAnswer: "Astros"
},
{
    query: "Who won the NBA Championship in 2022?",
    possibleAnswers: ["Warriors", "Celtics", "Lakers", "Bucks"],
    correctAnswer: "Warriors"
},
{
    query: "Who won the Super Bowl in 2023?",
    possibleAnswers: ["Eagles", "Bengals", "Chiefs", "Rams"],
    correctAnswer: "Chiefs"
},
{
    query: "Who won the UEFA Champions League in 2022?",
    possibleAnswers: ["Liverpool", "Bayern Munich", "Manchester City", "Real Madrid"],
    correctAnswer: "Real Madrid"
}];

function startTimer(){
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        time.textContent = secondsRemaining + " seconds remaining"
        if(secondsRemaining===0){
            clearInterval(timerInterval);
        }

    }, 1000);
}
button.addEventListener("click", function(){
    startTimer();
    displayQuestion();
});
function displayQuestion(){
//     showButtons.classList.remove("hide");
for(var i =0; i<questions.length;i++){
    var dispAnswers = questions[i].possibleAnswers;
    JSON.stringify(dispAnswers);
    for(var i = 0; i<dispAnswers.length; i++){
        singleAnswers[i] = dispAnswers[i].split(",");
        console.log(singleAnswers);
    }
}
if(playerAnswer !== questions.correctAnswer){
    secondsRemaining = secondsRemaining - 10;
}
 }
