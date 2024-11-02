let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let showMsg = document.querySelector("#showMsg")
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newGameBtn");
let playerO = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let boxCount = 0;
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        boxCount++;
        if(playerO === true){
            box.innerText = "O";
            playerO = false;
        }else{
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;

        checkWinner();
        if(boxCount === 9){
            gameDraw();
        }
    })
})

let checkWinner = () => {
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               displayWinner(pos1Val);
            }
        }
    }
}
let displayWinner = (winner) => {
    msg.innerHTML = `<b>Player ${winner}</b> is the winner!`;
    showMsg.setAttribute("class","msgContainer")
    disableBtn();
}
let gameDraw = () => {
    msg.innerText = "It's a draw!";
    showMsg.setAttribute("class", "msgContainer");
}
let disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
let enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let resetGame = () => {
    playerO = true;
    enableBtn();
    showMsg.setAttribute("class","hide");
    boxCount = 0;
}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
