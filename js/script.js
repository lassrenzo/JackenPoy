// PLAYER 1
var randomPicture1 = Math.floor(Math.random() * 3) + 1; // 1 - 3
//console.log(randomPicture1);

var randomImage1 = "rsp" + randomPicture1 + ".png"; // rsp1.png - rsp3.png
// console.log(randomImage1);

var randomImageSource1 = "images/" + randomImage1; //images/rsp1.png - images/rsp3.png
//console.log(randomImageSource1);

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// PLAYER 2
var randomPicture2 = Math.floor(Math.random() * 3) + 1; // 1 - 3
//console.log(randomPicture1);

var randomImage2 = "rsp" + randomPicture2 + ".png"; // rsp1.png - rsp3.png
// console.log(randomImage1);

var randomImageSource2 = "images/" + randomImage2; //images/rsp1.png - images/rsp3.png
//console.log(randomImageSource1);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

var rock = "rsp1.png";
var paper = "rsp2.png";
var scissor = "rsp3.png";


// IF ROCK WINS!
if (randomImage1 == rock && randomImage2 == scissor) {
  document.querySelector("h1").innerHTML = "ROCK WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
else if (randomImage1 == scissor && randomImage2 == rock) {
  document.querySelector("h1").innerHTML = "ROCK WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
 }

 // IF PAPER WINS!
 else if (randomImage1 == paper && randomImage2 == rock) {
  document.querySelector("h1").innerHTML = "PAPER WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == rock && randomImage2 == paper) {
  document.querySelector("h1").innerHTML = "PAPER WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
 }

  // IF SCISSOR WINS!
  else if (randomImage1 == scissor && randomImage2 == paper) {
    document.querySelector("h1").innerHTML = "SCISSOR WINS!";
    document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
}
else if (randomImage1 == paper && randomImage2 == scissor) {
    document.querySelector("h1").innerHTML = "SCISSOR WINS!";
    document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
}

// IF THE TWO PLAYER SAME ROCK/PAPER/SCISSOR
 else {
  document.querySelector('h1').innerHTML = "PLEASE TRY AGAIN!"
}; 
