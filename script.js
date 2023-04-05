var button = document.createElement("button");
button.innerText = "Start button"
document.body.appendChild(button);
var time = document.getElementById("time");
console.log(time);
var showButtons = document.getElementById("buttons");
var askQuestion
var playerAnswer
var currentQuestionIndex =0;
var score =0;
var secondsRemaining = 100;
//array of data
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
var questionsRemaining = questions.length;

function startTimer(){
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        time.textContent = secondsRemaining + " seconds remaining"
        if(secondsRemaining===0 || questionsRemaining === 0){
            clearInterval(timerInterval);
            displayScore();
        }

    }, 1000);
}
// start timer on button click
button.addEventListener("click", function(){
    startTimer();
    displayQuestion();
});
function displayQuestion(){
//     showButtons.classList.remove("hide");
    document.getElementById("buttons").textContent ="";
    var dispAnswers = questions[currentQuestionIndex].possibleAnswers;
    var showQuestion = questions[currentQuestionIndex].query;
    console.log(showQuestion);
    for(var i = 0; i<dispAnswers.length; i++){
        var singleAnswers = dispAnswers[i];
        var answerButton = document.createElement("button");
        answerButton.innerText = singleAnswers;
        answerButton.addEventListener("click", checkAnswer);
        document.getElementById("buttons").appendChild(answerButton);
    }
    document.getElementById("question").textContent = showQuestion;
 }
 //function to display the score
 function displayScore(){
    console.log(score); 
    currentQuestionIndex = 0;
    secondsRemaining =100;
    localStorage.setItem("score:", score);
 }
 // function to check the answer
 function checkAnswer(event){
    questionsRemaining--;
    console.log(questionsRemaining);
    var answerText = event.target.textContent;
     if(answerText !== questions[currentQuestionIndex].correctAnswer){
    secondsRemaining = secondsRemaining - 10;
} else{
    score++;
}
    currentQuestionIndex++;
    if(questionsRemaining !== 0){
    displayQuestion();
    }else{
        displayScore();
    }
   
 }


