let turn = "O";
let total_turn = 0;

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let board_array = new Array(9).fill("E");

const board = document.querySelector(".board");

const winningMessage = document.getElementById("winningMessage");

function checkWinner(){

    for(let [a,b,c] of winner){

        if(
            board_array[a] !== "E" &&
            board_array[a] === board_array[b] &&
            board_array[b] === board_array[c]
        ){
            return true;
        }
    }

    return false;
}

function printer(event){

    const element = event.target;

    // click only on cells
    if(!element.classList.contains("cell")){
        return;
    }

    // already filled
    if(board_array[element.id] !== "E"){
        return;
    }

    total_turn++;

    // print turn
    element.textContent = turn;

    board_array[element.id] = turn;

    // check winner
    if(checkWinner()){

        winningMessage.textContent = `Winner is ${turn}`;

        board.removeEventListener("click", printer);

        return;
    }

    // draw
    if(total_turn === 9){

        winningMessage.textContent = "Match Draw";

        return;
    }

    // change turn
    turn = (turn === "O") ? "X" : "O";
}

board.addEventListener("click", printer);

// restart game

const restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click",()=>{

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell)=>{
        cell.textContent = "";
    });

    board_array = new Array(9).fill("E");

    total_turn = 0;

    turn = "O";

    winningMessage.textContent = "";

    board.addEventListener("click", printer);

});