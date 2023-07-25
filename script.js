

var p1incrementBtn = document.getElementById("incrementP1");
var p2incrementBtn = document.getElementById("incrementP2");
var resetBtn = document.getElementById("reset");

var p1scoreElement = document.getElementById("player1points");
var p2scoreElement = document.getElementById("player2points");


p1incrementBtn.onclick = function(){
    
    var p1score = Number(p1scoreElement.innerText);
    var updatedP1Score = p1score+1;
    p1scoreElement.innerText = updatedP1Score; 
    checkGameWinning(updatedP1Score,"1");

}

p2incrementBtn.onclick = function(){
   
    var p2score = Number(p2scoreElement.innerText);
    var updatedP2Score = p2score+1;
    p2scoreElement.innerText = updatedP2Score; 
    checkGameWinning(updatedP2Score,"2");
    
}

resetBtn.onclick = function(){
   
    p1scoreElement.innerText = 0; 

    p2scoreElement.innerText = 0;
    document.getElementById("winnerName").innerText = ""; 

    document.getElementById("incrementP1").disabled = false;
    document.getElementById("incrementP2").disabled = false;


}

function checkGameWinning(score,player){
    var winningCount = document.getElementById("winningScoreCount");
    if(score== Number(winningCount.value)){
        document.getElementById("winnerName").innerText ="Player:"+player+" has won the game!";
        
        document.getElementById("incrementP1").disabled = true;
        document.getElementById("incrementP2").disabled = true;
    }
    
}