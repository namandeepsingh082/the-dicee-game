// alert("JavaScript is Added");
var player1=Math.floor(Math.random()*6+1);
var player2=Math.floor(Math.random()*6+1);
// console.log("Player1: " + player1);
// console.log("Player2: " + player2);


if (player1 > player2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(player1 < player2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}

// if(player1==1){
//     // document.querySelector(".img1").setAttribute
//     document.querySelector(".img1").setAttribute("src", "/images/dice1.png")
// }
// else if(player1==2){
//     document.querySelector(".img1").setAttribute("src", "/images/dice2.png")
// }
// else if(player1==3){
//     document.querySelector(".img1").setAttribute("src", "/images/dice3.png")
// }
// else if(player1==4){
//     document.querySelector(".img1").setAttribute("src", "/images/dice4.png")
// }
// else if(player1==5){
//     document.querySelector(".img1").setAttribute("src", "/images/dice5.png")
// }
// else{
//     document.querySelector(".img1").setAttribute("src", "/images/dice6.png")
// }

// if(player2==1){
//     document.querySelector(".img2").setAttribute("src", "/images/dice1.png")
// }
// else if(player2==2){
//     document.querySelector(".img2").setAttribute("src", "/images/dice2.png")
// }
// else if(player2==3){
//     document.querySelector(".img2").setAttribute("src", "/images/dice3.png")
// }
// else if(player2==4){
//     document.querySelector(".img2").setAttribute("src", "/images/dice4.png")
// }
// else if(player2==5){
//     document.querySelector(".img2").setAttribute("src", "/images/dice5.png")
// }
// else{
//     document.querySelector(".img2").setAttribute("src", "/images/dice6.png")
// }

var image1="dice"+player1+".png";
var image2="dice"+player2+".png";
var srcImage1="images/"+image1;
var srcImage2="images/"+image2;

document.querySelectorAll("img")[0].setAttribute("src", srcImage1);
document.querySelectorAll("img")[1].setAttribute("src", srcImage2);