const options = document.querySelectorAll('.option');

options.forEach((option) => {
  option.addEventListener('click', () => {
    let playerChoice = option.id;
    let computerChoice = getComputerChoice();
    let result = getResult(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
  });
});;

function displayResult(result, playerChoice, computerChoice) {
  let resultElement = document.getElementById('result');
  let choiceElement = document.getElementById('choice')
  choiceElement.innerText = `The Computer choose ${computerChoice} and you choosed ${playerChoice}`;
  if (result === 'd')
  resultElement.innerText = `The result is draw`;
  else if (result === 'p')
    resultElement.innerText = "The player Wins";
  else if (result === 'c')
    resultElement.innerText = "The computer Wins";
}

function getComputerChoice() {
  let computerChoice = '';
  let random = Math.random();
  if (random < 0.34)
    computerChoice = 'rock';
  else if (random <= 0.67)
    computerChoice = 'paper';
  else
    computerChoice = 'scissor';
  return computerChoice;
}

function getResult(playerChoice, computerChoice) {
  let result = '';
  if (playerChoice === computerChoice)
    result = 'd';

  else if (playerChoice === 'rock') {
    if (computerChoice === 'paper')
      result = 'c';
    else
      result = 'p';
  }

  else if (playerChoice === 'paper') {
    if (computerChoice === 'scissor')
      result = 'c';
    else
      result = 'p';
  }

  else if (playerChoice === 'scissor') {
    if (computerChoice === 'rock')
      result = 'c';
    else
      result = 'p';
  }

  return result;
}