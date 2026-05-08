let timerStarted = false;

let timeLeft = 30;

let timer;


// TIMER ELEMENT

const timerDisplay = document.getElementById("timer");


// INPUT FIELDS

const fname = document.getElementById("fname");

const lname = document.getElementById("lname");

const email = document.getElementById("email");


// START QUIZ BUTTON

const startButton = document.getElementById("startBtn");


// PROGRESS BAR

const progressBar = document.getElementById("progressBar");


// START TIMER FUNCTION

function startQuiz() {

if(
fname.value !== "" &&
lname.value !== "" &&
email.value !== "" &&
!timerStarted
) {

timerStarted = true;

timer = setInterval(function(){

timeLeft--;

timerDisplay.innerHTML = timeLeft + "s";

if(timeLeft <= 0){

clearInterval(timer);

alert("Time Up!");

}

},1000);

}

else {

alert("Please fill all details first");

}

}


// START BUTTON EVENT

startButton.addEventListener("click", startQuiz);



// PROGRESS BAR FUNCTION

function updateProgress() {

let answered = 0;

const q1 = document.querySelector('input[name="q1"]:checked');

const q2 = document.querySelector('input[name="q2"]:checked');

const q3 = document.querySelector('input[name="q3"]:checked');


if(q1){
answered++;
}

if(q2){
answered++;
}

if(q3){
answered++;
}


let progress = (answered / 3) * 100;

progressBar.style.width = progress + "%";

progressBar.innerHTML = progress + "%";

}



// RADIO BUTTON EVENTS

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(function(radio){

radio.addEventListener("change", function(){

updateProgress();


// REMOVE OLD SYMBOLS

const fieldset = radio.closest("fieldset");

fieldset.querySelectorAll(".correct, .wrong")
.forEach(function(span){

span.style.display = "none";

});


// SHOW NEW SYMBOL

const symbol = radio.nextElementSibling.nextElementSibling;

symbol.style.display = "inline";

});

});




// SUBMIT BUTTON

document.querySelector('input[type="submit"]')
.addEventListener("click", function(event){

event.preventDefault();

let score = 0;


if(document.getElementById("q1c").checked){
score++;
}

if(document.getElementById("q2c").checked){
score++;
}

if(document.getElementById("q3b").checked){
score++;
}


alert("Quiz Submitted!\nYour Score: " + score + "/3");

clearInterval(timer);

});