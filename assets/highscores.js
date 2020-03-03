
var highScoresList = document.querySelector("#highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores"));

console.log(highScores);


renderScores();

function renderScores() {

highScoresList.innerHTML="";

for (var i =0; i < highScores.length; i++) {
    var hs = highScores[i].score;
    var pn = highScores[i].player;

    var li = document.createElement("li");
    li.textContent = pn + ":" + " " + " " + hs;
    highScoresList.appendChild(li);
    
    }
}

//when form is submitted

scoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
})




