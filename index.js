// For dice 1

var randomNumber1 = Math.floor(Math.random()*6+1);      // getting random number
 
var randomDiceImage1 = "dice"+randomNumber1+".png";      // doing concatanation for getting random image accoring to random number

var randomImageSource1 = "images/" + randomDiceImage1;    // randomDice Sorce (images/dice1.png)

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);


// For dice 2

var randomNumber2 = Math.floor(Math.random()*6+1);      // getting random number
 
var randomDiceImage2 = "dice"+randomNumber2+".png";      // doing concatanation for getting random image accoring to random number

var randomImageSource2 = "images/" + randomDiceImage2;    // randomDice Sorce (images/dice1.png)

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


// Comaring both the dices

if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML = "Match Draw";
}
else if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
}
else
{
    document.querySelector("h1").innerHTML = "Player 2 Won! 🚩";
}