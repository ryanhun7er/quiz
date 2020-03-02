const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

//variables for quiz

let currentQuestion = [];
let acceptingAnswers = true;
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
        question: "My fiance and I love to travel. How did we meet?",
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
        question: "Earlier this year, my finace and I got the cutest Mini Australian Shepard. What is his name?",
        choice1: "Champ",
        choice2: "Scout",
        choice3: "Bailey",
        choice4: "Duke",
        answer: 4
    }

]

//constants

const correct_bonus = 10;
const max_questions = 5;

//start game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
    getNewQuestions();
};

//generate questions with function

function getNewQuestion () {

    questionCounter++;
    const questionIndex = Math.ceil(Math.random() * availableQuestions.length);
    currentQuestion =availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


};


startGame();