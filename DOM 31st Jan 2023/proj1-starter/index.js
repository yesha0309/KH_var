var player1Roll = Math.floor(Math.random() * 6) + 1;
var player2Roll = Math.floor(Math.random() * 6) + 1;

document.querySelector('.img1').src = "images/dice" + player1Roll + ".png";
document.querySelector('.img2').src = "images/dice" + player2Roll + ".png";

if (player1Roll > player2Roll) {
  document.querySelector('.container h1').textContent = "Player 1 Wins!";
} else if (player2Roll > player1Roll) {
  document.querySelector('.container h1').textContent = "Player 2 Wins!";
} else {
  document.querySelector('.container h1').textContent = "Draw!";
}