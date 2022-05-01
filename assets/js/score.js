function printHighScores(){
    let highscores=JSON.parse(window.localStorage.getItem ("highscores")) || [];

    highscores.sort(function(a,b) {
        return b.score - a.score;
    });

}