//const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores"));
const ul = document.querySelector("ul");


console.log(highScores);

const scoreSubmit = score => {
    const li = document.createElement('li')
    li.textContent = score
    ul.appendChild(li)

    console.log(scoreSubmit);
}




//document.getElementById("highScoresList").innerHTML = highScores.player + ":" + highScores.score;
