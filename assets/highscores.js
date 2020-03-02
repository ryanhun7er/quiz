const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores"));

console.log(highScores);
console.log(highScoresList);

var text ="";
var i;

for (var i =0; i < highScores.length; i++) {
    text += "Player:" + highScores[i].player.value;
    text += "Score:" + highScores[i].score.value + "<br>";
}

document.getElementById("highScoresList").innerHTML = highScores;
//const scoreSubmit = score => {
   // const li = document.createElement('li')
   // li.textContent = score
  //  ul.appendChild(li)

  //  console.log(scoreSubmit);
//}

