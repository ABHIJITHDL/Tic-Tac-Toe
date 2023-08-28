let buffer=1;
let symbol;
let matrix=[["","",""],["","",""],["","",""]]
let gameOver = false;
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
    }
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
function check(){
    for(let i=0;i<3;i++){
        if(matrix[i][0]==="X"&&matrix[i][1]==="X" &&matrix[i][2]==="X"||matrix[i][0]==="O"&&matrix[i][1]==="O" &&matrix[i][2]==="O"){
            symbol=matrix[i][0];
        return true;
        }}
    for(let j=0;j<3;j++){
        if(matrix[0][j]==="X"&&matrix[1][j]==="X" && matrix[2][j]==="X" ||matrix[0][j]==="O"&&matrix[1][j]==="O" && matrix[2][j]==="O"){
            symbol=matrix[0][j];
            return true;
        }}
    if(matrix[0][0]==="X"&&matrix[1][1]==="X" && matrix[2][2]==="X" ||matrix[0][0]==="O"&&matrix[1][1]==="O" && matrix[2][2]==="O"){
            symbol=matrix[0][0];
            return true;
        }
    if(matrix[0][2]==="X"&&matrix[1][1]==="X" && matrix[2][0]==="X"||matrix[0][2]==="O"&&matrix[1][1]==="O" && matrix[2][0]==="O"){
            symbol=matrix[0][2];
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
}
  function init(){
  
  document.querySelector(".board").addEventListener("click",function(event){buttonClick(event.target.className);});
  document.querySelector(".reset").addEventListener("click",reset);
}

init()
  /*function highlightWinningLine(cells, combo) {
  const [a, b, c] = combo;
  const cellA = cells[a];
  const cellB = cells[b];
  const cellC = cells[c];
  const winningLine = document.querySelector('.winning-line');

  const rectA = cellA.getBoundingClientRect();
  const rectC = cellC.getBoundingClientRect();

  const centerX = (rectA.left + rectC.right) / 2;
  const centerY = (rectA.top + rectC.bottom) / 2;
  
  const length = Math.sqrt(Math.pow(rectA.left - rectC.right, 2) + Math.pow(rectA.top - rectC.bottom, 2));

  winningLine.style.left = centerX + 'px';
  winningLine.style.top = centerY + 'px';
  winningLine.style.width = length + 'px';
  winningLine.style.transform = `translate(-50%, -50%) rotate(${Math.atan2(rectA.top - rectC.bottom, rectA.left - rectC.right)}rad)`;
  winningLine.style.display = 'block';
}
*/
