let Rock = document.querySelector(".rock");
let Paper = document.querySelector(".paper");
let Scissors = document.querySelector(".scissors");
let roundResult = document.getElementById("roundResult");
let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");



Scissors.addEventListener("click",function () {
    let i = Math.floor(Math.random()*3);
    switch(i) {
        case 0:
            roundResult.textContent = "You lose! rock beats scissors";
            computerScore.textContent++;
            break;
        case 1:
            roundResult.textContent = "You win! scissors beats paper";
            userScore.textContent++;
            break;
        case 2:
            roundResult.textContent = "It's a tie!";
            break;
        }
});

Paper.addEventListener("click",function () {
    let i = Math.floor(Math.random()*3);
    switch(i) {
        case 0:
            roundResult.textContent = "You win! paper beats rock";
            userScore.textContent++;
            break;
        case 1:
            roundResult.textContent = "It's a tie!";
            break;
        case 2:
            roundResult.textContent = "You lose! scissors beats paper";
            computerScore.textContent++;
            break;
        }
});

Rock.addEventListener("click",function () {
    let i = Math.floor(Math.random()*3);
    switch(i) {
        case 0:
            roundResult.textContent = "It's a tie!";
            break;
        case 1:
            roundResult.textContent = "You lose! paper beats rock";
            computerScore.textContent++;
            break;
        case 2:
            roundResult.textContent = "You win! rock beats scissors";
            userScore.textContent++;
            break;
        }
});