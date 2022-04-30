let qI = 0;
let timeId;
let time = 60;
let clock = document.querySelector('#time')
let prompt = document.querySelector('.quiz-container');
 
document
//Shows the Quiz with the questions and answers
function startQuiz() {
    let { Q, A, C } = questions[qI];

    timeId = setInterval(countDown, 1000);
    prompt.innerHTML = `<h1>${Q}</h1>`;
    A.forEach(ans => {
        let btn = document.createElement('button');
        btn.innerText = ans;
        btn.addEventListener('click', e => {
            if (e.target.innerText == C) {
                time += 10;
            } else {
                time -= 5;
            }
            qI++;
            startQuiz();
        })

        prompt.appendChild(btn);
    });
};

//Start Timer when Start Quiz button is pressed
function countDown() {
    time--;
    if (time < 0) {
        time = 0;  
        clearInterval(timeId);
        quizOver();
    }
    clock.innerHTML = time;
}

function quizOver(){
    prompt.innerHTML = `<h1>`
}


// function gameOver() {
//     var tag = document.createElement("h1");
//     var text = document.createTextNode("All Done!");
//     var element = document.getElementById("quiz");
//     element.replaceWith(tag);
//  }