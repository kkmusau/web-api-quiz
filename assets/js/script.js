let qI = 0;
let timeId;
let time = 60;
let clock = document.querySelector('#time')
let prompt = document.querySelector('.quiz-container');
let finalScreenE1 = document.querySelector('#final-screen');
let finalSubmit = document.querySelector('button[data-submit]');
let initials = document.querySelector('#initials');


//Shows the Quiz with the questions and answers
function startQuiz() {
    finalSubmit.addEventListener('click', showResults);
    timeId = setInterval(countDown, 1000);
    showQuestion();
};

function showQuestion() {
    let { Q, A, C } = questions[qI] || {};
    if (A || Q || C) { prompt.innerHTML = `<h1>${Q}</h1>`; }

    if (A) {
        A.forEach(ans => {
            let btn = document.createElement('button');
            btn.innerText = ans;
            btn.addEventListener('click', e => {
                e.target.innerText == C
                    ? time += 10
                    : time -= 5;

                qI++;

                if (qI == questions.length) {
                    clearInterval(timeId);
                    return quizOver();
                };

                showQuestion();
            });

            prompt.appendChild(btn);
        });
    };
};

// Submit Quiz
function showResults() {
    console.log('Clicked');
    prompt.classList.add('hide');
    localStorage.setItem('initials', `{${initials.value}:${time}}`);
}

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

function quizOver() {
    prompt.classList.add('hide');
    let finalScreenE1 = document.getElementById("final-screen");
    finalScreenE1.removeAttribute("class");

    let finalScoreE1 = document.getElementById("final-score");
    finalScoreE1.textContent = time;
}
