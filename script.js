var turn = 0;
var srvrOUT = 0;
var usrOUT = 0;
var srvrScore = 0;
var usrScore = 0;


function srvr(){
 if (turn == 1){
  turn = 0;
  generateChoice();
  user();
 }
};

document.getElementById("usrClickable").onClick = user();

function user(){
 if (turn == 0){
  var usrOUT = window.prompt("Rock, Paper, Scissors?");
  switch (usrOUT.toUpperCase()){
   case "ROCK":
    usrOUT = 0; turn = 1; break;
   case "PAPER":
    usrOUT = 1;turn = 1; break;
   case "SCISSORS":
    userOUT = 2; turn = 1; break;
   default:
    alert("Check your spelling..."); user();
  }
 } srvr();
};

function generateChoice(){
 switch(Math.floor(Math.random()*3)){
  case 0:
   alert("Rock");
   srvrOUT = 0; break;
  case 1:
   alert("Paper");
   srvrOUT = 1;
  case 2:
   console.log("Scissors");
   srvrOUT = 2;
 }
  compareOUTs();
};

function compareOUTs(){
 switch (srvrOUT - usrOUT){
  case -2:
   alert("Computer Scored"); srvrScore++; turn = 0; break;
  case -1:
   alert("User Scored"); usrScore++; turn = 0 ; break;
  case 0:
   alert("Draw"); turn = 0; break;
  case 1:
   alert("Computer Scored"); srvrScore++; turn = 0; break;
  case 2:
   alert("User Scored"); usrScore++; turn = 0; break;   
 } user();
};

