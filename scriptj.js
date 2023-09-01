let buffer=1;
let symbol;
let matrix=[["","",""],["","",""],["","",""]]
let gameOver = false;
let winningCombinations = [];
function buttonClick(value){
    if(gameOver)
      return;
    let classArray=value.split(" ");
    let number=classArray[1];
    number=number.slice(3);
    if(buffer%2===0)
        symbol="X";
    else 
        symbol="O";
    play(symbol,number);
   
    if(check()){
        document.querySelector(".win").innerText=`Game over, ${symbol} wins`;
        gameOver=true;
        winningCombinations.forEach(element => {
            document.querySelector(`.box${element}`).classList.add("winningBlock");
        }); 
        return;
      }
if(buffer===10&&!gameOver){
       document.querySelector(".win").innerText=`Tie`;
       gameOver=true;
}
}
function play(symbol,number){
    box=document.querySelector(`.box${number}`)
    if(box.innerText===""){
    document.querySelector(`.box${number}`).innerText=symbol;
    buffer++;

    if(number<=3)
      i=0;
    else if(number<=6)
      i=1;
    else i=2;
    if(number%3===1)
        j=0;
    else if (number%3===2)
        j=1;
    else 
        j=2;
    matrix[i][j]=symbol;
    }
}
function check(){
    for(let i=0;i<3;i++){
        if(matrix[i][0]==="X"&&matrix[i][1]==="X" &&matrix[i][2]==="X"||matrix[i][0]==="O"&&matrix[i][1]==="O" &&matrix[i][2]==="O"){
            symbol=matrix[i][0];
            winningCombinations=[i*3+1,i*3+2,i*3+3];
        return true;
        }}
    for(let j=0;j<3;j++){
        if(matrix[0][j]==="X"&&matrix[1][j]==="X" && matrix[2][j]==="X" ||matrix[0][j]==="O"&&matrix[1][j]==="O" && matrix[2][j]==="O"){
            symbol=matrix[0][j];
            winningCombinations=[j+1,j+4,j+7];
            return true;
        }}
    if(matrix[0][0]==="X"&&matrix[1][1]==="X" && matrix[2][2]==="X" ||matrix[0][0]==="O"&&matrix[1][1]==="O" && matrix[2][2]==="O"){
            symbol=matrix[0][0];
            winningCombinations=[1,5,9]
            return true;
        }
    if(matrix[0][2]==="X"&&matrix[1][1]==="X" && matrix[2][0]==="X"||matrix[0][2]==="O"&&matrix[1][1]==="O" && matrix[2][0]==="O"){
            symbol=matrix[0][2];
            winningCombinations=[3,5,7];
            return true;
        }
        return false;
}

function reset(){
    const boxes=document.querySelectorAll(".box");
    boxes.forEach((box)=>box.innerText="");
    buffer=1;
    matrix=[["","",""],["","",""],["","",""]];
    document.querySelector(".win").innerText=null;
    gameOver=false;
    winningCombinations.forEach(element => {
        document.querySelector(`.box${element}`).classList.remove("winningBlock");
    }); 
    winningCombinations=null;
}
  function init(){
  
  document.querySelector(".board").addEventListener("click",function(event){buttonClick(event.target.className);});
  document.querySelector(".reset").addEventListener("click",reset);
}

init()

