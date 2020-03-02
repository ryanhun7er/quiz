//constants for score

const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
const finalScore = document.getElementById("finalScore");
const userScore = localStorage.getItem("userScore");

finalScore.innerText = userScore;