//constants for score

const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
const finalScore = document.getElementById("finalScore");
const userScore = localStorage.getItem("userScore");

//variable for navigating to highscores screen after user name input

var button = document.getElementById("saveScore");

button.addEventListener('click', function() {
    window.location = "highscores.html"
})

//constants for high scores

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


function saveHighScore (e) {
    e.preventDefault();

    const score = {
        score: userScore,
        player: username.value 
    
    };

    highScores.push(score);

    highScores.sort ((x, y) => {
        return y.score - x.score;
    });

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores));

    
    console.log(highScores);
    
}


finalScore.innerText = userScore;