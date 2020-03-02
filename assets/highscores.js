const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores"));

console.log(highScores);

var scoreDiv = document.getElementById("highScoresList");

highScores.forEach(function(score) {

    var newScoreL = document.createElement("li");

    newScoreL.textContent = score;

    scoreDiv.appendChild(newScoreL);

    console.log(scoreDiv);
});

