var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];

}

function win(userChoice, ComputerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + ComputerChoice + ".  You win.!";
}

function lose(userChoice, ComputerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = ComputerChoice + " beats " + userChoice + ".  You win.!";
}


function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, ComputerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, ComputerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            break;
    }

}
rock_div.addEventListener('click', function () {
    game("rock");
})

paper_div.addEventListener('click', function () {
    game("paper");
})

scissors_div.addEventListener('click', function () {
    game("scissors");
})

