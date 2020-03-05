var tickerList = document.querySelector("#ticker");
var highScores = JSON.parse(localStorage.getItem("highScores"));

console.log(highScores);


renderTicker();

function renderTicker() {

tickerList.innerHTML="";

for (var i =0; i < highScores.length; i++) {
    var hs = highScores[i].score;
    var pn = highScores[i].player;

    var p = document.createElement("p");
    p.setAttribute("class", "ticker");
    document.createElement("br")
    p.textContent = "|" + " " + pn + ":" + " " + " " + hs + " " + "|";
    tickerList.appendChild(p);
    
    
    
    }
}

//when form is submitted

//scoreForm.addEventListener("submit", function(event) {
   // event.preventDefault();
//})