let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options =["rock","paper","scissors"];
    //rock,paper,scissor
    const randomIdx = Math.floor(Math.random()*3); //this line of code generates numbers randomly from to 2 doen't include 3
    //floor command makes the decimal number to the whole number
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText="It's a Draw!Play again -_-"
    msg.style.backgroundColor =  "rgb(92, 75, 15)";
};

const showWinner=(userWin,userChoice,computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Won! Your ${userChoice} beats cherry's ${computerChoice}`;
        msg.style.backgroundColor = "lightseagreen";
    }
    else {
        compScore++;
        computerScorePara.innerText=compScore;
        msg.innerText=`You Lose!Cherry's ${computerChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "lightcoral";
    }
};

const playGame = (userChoice) => {
    console.log("user Choice = ",userChoice);
    //Generate computer choice
    const computerChoice = genComputerChoice();

    if(userChoice===computerChoice){
        drawGame();
    } else {
        let userWin =true;
        if(userChoice==="rock") {
            //scissors,paper
            userWin=computerChoice==="paper"?false:true;
        } else if(userChoice==="paper") {
            //rock,scissors
            userWin=computerChoice==="scissors"?false:true;
        } else {
            //rock,paper
           userWin= computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
