let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");
const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const ranIndex = Math.floor(Math.random () *3);
    return options[ranIndex];
}

const drawgame = () => {
    console.log("Game has been drow!!");
    msg.innerText = "Game has been draw";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win the game.`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose the game.`;
        msg.style.backgroundColor="Red";
    }
};

 const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    //Generate computer choice-> Modular function.
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice) {
        //Draw game
        drawgame();
    } else {
        let userWin = true;
        if (userchoice = "rock") {
            //scissor,paer
            userWin = compchoice === "paper" ? false :true;
        } else if(userchoice = "paper"){
            // scissor,rock
            userWin = compchoice === "scissor"? false:true;
        } else {
            //paper,rock
            userWin = compchoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
 };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

