let qI = 0;
let timeId;
let time = 60;
let clock = document.querySelector('#time')
let prompt = document.querySelector('.quiz-container');
let finalScreenE1 = document.querySelector('#final-screen');
let finalSubmit = document.querySelector('[data-submit]');
let initials = document.querySelector('#initials');


//Shows the Quiz with the questions and answers
function startQuiz() {
    let { Q, A, C } = questions[qI] || {};
    finalSubmit.addEventListener('click', showResults);
    

    timeId = setInterval(countDown, 1000);
    if (A || Q || C) {prompt.innerHTML = `<h1>${Q}</h1>`;}

    if(A) { A.forEach(ans => {
        let btn = document.createElement('button');
        btn.innerText = ans;
        btn.addEventListener('click', e => {
            if (e.target.innerText == C) { 
                if (qI== 4) {
                    time=0;
                    prompt.classList.add('hide'); 
                    
                }
                time += 10;
                
            } else {
                time -= 5;
                if (time == 0){
                }
            }
            qI++;
            startQuiz();

        })

        prompt.appendChild(btn);
    });} 
};

// Submit Quiz
function showResults() {
    prompt.classList.add('hide'); 
    window.localStorage.setItem('initials', initials);
}

//Start Timer when Start Quiz button is pressed
function countDown() {
    time--;
    if (time < 0) {
        time = 0; {}   
        clearInterval(timeId);
        quizOver();
        // prompt.innerHTML = 'You ran out of time';
    }
    clock.innerHTML = time;   
}

function quizOver(){
    let finalScreenE1 = document.getElementById("final-screen");
    finalScreenE1.removeAttribute("class");
    
    let finalScoreE1 = document.getElementById("final-score");
    finalScoreE1.textContent=time;  
}
