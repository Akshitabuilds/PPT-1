let timerStarted = false;

let timeLeft = 60;

let timer;


// TIMER

const timerDisplay = document.getElementById("timer");

const fname = document.getElementById("fname");

const lname = document.getElementById("lname");

const email = document.getElementById("email");


// START TIMER

document.querySelectorAll("input[type='text'], input[type='email']")
.forEach(input => {

input.addEventListener("input", function () {

if (
fname.value !== "" &&
lname.value !== "" &&
email.value !== "" &&
!timerStarted
) {

timerStarted = true;

timer = setInterval(function () {

timeLeft--;

timerDisplay.innerHTML = timeLeft;

if (timeLeft <= 0) {

clearInterval(timer);

alert("Time Up!");

}

}, 1000);

}

});

});


// PROGRESS BAR

const progressBar = document.getElementById("progressBar");

const radios = document.querySelectorAll("input[type='radio']");

radios.forEach(radio => {

radio.addEventListener("change", updateProgress);

});


function updateProgress() {

let answered = 0;

if(document.querySelector('input[name="q1"]:checked'))
answered++;

if(document.querySelector('input[name="q2"]:checked'))
answered++;

if(document.querySelector('input[name="q3"]:checked'))
answered++;

let progress = (answered / 3) * 100;

progressBar.style.width = progress + "%";

progressBar.innerHTML = progress + "%";

}


// SHOW CORRECT / WRONG SYMBOLS

radios.forEach(radio => {

radio.addEventListener("change", function() {

const parentFieldset = radio.closest("fieldset");

parentFieldset.querySelectorAll(".correct, .wrong")
.forEach(span => {

span.style.display = "none";

});

if(radio.value === "correct") {

radio.nextElementSibling.nextElementSibling.style.display = "inline";

}
else {

radio.nextElementSibling.nextElementSibling.style.display = "inline";

}

});

});


// SUBMIT BUTTON

document.querySelector('input[type="submit"]')
.addEventListener("click", function(event){

event.preventDefault();

let score = 0;

if(document.getElementById("q1c").checked)
score++;

if(document.getElementById("q2c").checked)
score++;

if(document.getElementById("q3b").checked)
score++;

alert("Quiz Submitted!\nYour Score: " + score + "/3");

clearInterval(timer);

});