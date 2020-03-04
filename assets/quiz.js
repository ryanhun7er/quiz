//constants for questions

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const timeText = document.getElementById('timer');

//variables for quiz

let currentQuestion = [];
let allowAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


//add in questions
let questions = [

    {
        question: "In 2019, I ran and competed in marathons, Ironmans, cycling, and Spartan races. How many races did I complete?",
        choice1: "2",
        choice2: "10",
        choice3: "17",
        choice4: "5",
        answer: 2
    },

    {
        question: "Growing up, my mom owned and operated a few fast food franchises. Which franchise did she own?",
        choice1: "Burger King",
        choice2: "Taco Bell",
        choice3: "McDonald's",
        choice4: "Chik-Fil-A",
        answer: 3
    },

    {
        question: "My fianc\xE9 and I love to travel. How did we meet?",
        choice1: "Dating App",
        choice2: "On an airplane",
        choice3: "At a bar",
        choice4: "Through mutual friends",
        answer: 2
    },

    {
        question: "As an athlete, I keep a very strict diet. What is my dietary restriction?",
        choice1: "Vegan",
        choice2: "Vegetarian",
        choice3: "Pescatarian",
        choice4: "Carnivore diet",
        answer: 1
    },

    {
        question: "Earlier this year, my fianc\xE9 and I got the cutest Mini Australian Shepard. What is his name?",
        choice1: "Champ",
        choice2: "Scout",
        choice3: "Bailey",
        choice4: "Duke",
        answer: 4
    }

]

//constants

const correctAdd = 100;
const questionCount = 5;
var addSeconds = 10;
var subSeconds = -10;
var time = 60;
var seconds = parseInt(time%60)

//start game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    
    
    getNewQuestion();
};

//generate questions with function

function getNewQuestion () {

    //navigate to highscores end game page if all questions have been answered
    if(availableQuestions.length === 0 || questionCounter >= questionCount) {

        //add end score to localStorage
        localStorage.setItem('userScore', score);

        //go to game over screen
        return window.location.assign("gameover.html")
        
    }

    questionCounter++;

    //update question count
    questionCounterText.innerText = questionCounter + "/" + questionCount;

    //randomize questions
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    //don't allow questions to repeat
    availableQuestions.splice(questionIndex, 1);
    

    allowAnswer = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!allowAnswer) return;

        allowAnswer = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    console.log(selectedAnswer == currentQuestion.answer);
//need to figure out how to say answer is correct
        //if (selectedAnswer == currentQuestion.answer) {
        //    getElementsByClassName("choice-text").innerHTML = 'correct';
       // }

      //  else {
      //      getElementsByClassName("choice-text").innerHTML = 'incorrect';
      //  }
    
    
    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
        incrementScore(correctAdd);
        time += 10;
        //getElementById("#cA").style.display = "block";
        
    }

    else {
        time -= 10;
        //getElementById("#iA").style.display = "block";
    }

  
//run new Question function    
    getNewQuestion();

  });
});

//function to increment score
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;

};



//function for timer

function adjTimer () {
    timeText.innerText = time;
    if(time <= 0){
        return window.location.assign("timeup.html")
    }

    else {
        time = time -1;
        seconds = parseInt(time%60);
        setTimeout("adjTimer()", 1000);

    }
}



setTimeout("adjTimer()",1000)
startGame();




 