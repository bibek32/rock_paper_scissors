console.log('This is game of rock paper scissors');

function getComputerChoice(){
    const comp = Math.random();

    //For Rock
    if(comp < 0.33)
        return 'rock';

    //For Paper
    else if(comp < 0.66)
        return 'paper';

    //For Scissors
    else
        return 'scissors';
}

let computerChoice = getComputerChoice();

function getUserChoice(){
    let user = prompt('Enter your choice: rock, paper or scissors');
    return user;
}

let userChoice = getUserChoice();

function determineWinner(computerChoice, userChoice){
    if(computerChoice === userChoice)
        return 'The game is a tie!';

    if(computerChoice === 'rock'){
        if(userChoice === 'paper')
            return 'User wins!';
        else
            return 'Computer wins!';
    }

    (computerChoice === 'rock') ? (userChoice === 'paper') ? 'User wins!' : 'Computer wins!';



    if(computerChoice === 'paper'){
        if(userChoice === 'scissors')
            return 'User wins!';
        else
            return 'Computer wins!';
    }

    if(computerChoice === 'scissors'){
        if(userChoice === 'rock')
            return 'User wins!';
        else
            return 'Computer wins!';
    }
}

console.log(determineWinner(computerChoice, userChoice));