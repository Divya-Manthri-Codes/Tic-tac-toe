let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rebut");
let newGame = document.querySelector(".but");
let message = document.querySelector("#win")
let msgContainer = document.querySelector(".msg-container")
let turnO = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4 , 8],
    [1 , 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "white";
            turnO = false;
            count++
        } else{
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
            count++
        }
        box.disabled = true;
        checkWinner();
    })
})
const showWinner = (winner) =>{
    message.innerText = `Congratulations!! winner is ${winner}`;
    if(winner == "X"){
        message.style.color = "black";
    }
    else{
        message.style.color = "white";
    }
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    //alert('count - '+count);
    for(let pattern of winPatterns){
        //console.log(boxes[pattern[0]] , boxes[pattern[1], boxes[pattern[2]]]);
        console.log(pattern[0], pattern[1], pattern[2]);
        
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val!=""){
                if(pos1val === pos2val && pos2val=== pos3val){
                    disableBoxes();
                    showWinner(pos1val);
                    
                }
                else if(count==9){
                   // aler('entered else if');
                    message.innerText = "Its a tie!!"
                    msgContainer.classList.remove("hide");
                }
                }
            }
    };
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
