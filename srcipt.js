let timerStarted = false;

let timeLeft = 60;

let timer;

const detailsInputs = document.querySelectorAll(
    "#fname, #mname, #lname, #email"
);

const progressBar = document.getElementById("progressBar");

const timerDisplay = document.getElementById("timer");

const allQuestions = document.querySelectorAll(
    'input[type="radio"]'
);


// START TIMER AFTER DETAILS FILLED

detailsInputs.forEach(input => {

    input.addEventListener("change", startTimerOnce);

});


function startTimerOnce() {

    const fname = document.getElementById("fname").value;

    const lname = document.getElementById("lname").value;

    const email = document.getElementById("email").value;

    if (fname !== "" && lname !== "" && email !== "" && !timerStarted) {

        timerStarted = true;

        timer = setInterval(() => {

            timeLeft--;

            timerDisplay.innerText = timeLeft;

            if (timeLeft <= 0) {

                clearInterval(timer);

                alert("Time is up!");

                document.querySelector(
                    'input[type="submit"]'
                ).disabled = true;
            }

        }, 1000);
    }
}


// PROGRESS BAR

allQuestions.forEach(question => {

    question.addEventListener("change", updateProgress);

});


function updateProgress() {

    let answered = 0;

    const q1 = document.querySelector(
        'input[name="question1"]:checked'
    );

    const q2 = document.querySelector(
        'input[name="question2"]:checked'
    );

    const q3 = document.querySelector(
        'input[name="question3"]:checked'
    );

    if (q1) answered++;

    if (q2) answered++;

    if (q3) answered++;

    let progress = (answered / 3) * 100;

    progressBar.style.width = progress + "%";

    progressBar.innerText = progress + "%";
}


// SUBMIT BUTTON

document.querySelector(
    'input[type="submit"]'
).addEventListener("click", function (event) {

    event.preventDefault();

    let score = 0;

    const answers = document.querySelectorAll(
        'input[type="radio"]:checked'
    );

    answers.forEach(answer => {

        if (answer.value === "correct") {

            score++;

        }

    });

    alert(
        "Quiz Submitted!\nYour Score is: " + score + "/3"
    );

    clearInterval(timer);

});