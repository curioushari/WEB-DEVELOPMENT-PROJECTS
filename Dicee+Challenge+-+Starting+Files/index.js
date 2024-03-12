var randomNumber1;

randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; 

var randomImagesSource = "images/"+ randomDiceImage ; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImagesSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";}
else if(randomNumber2 > randomNumber1){                                 
    document.querySelector("h1").innerHTML = "player 2 wins";}
else{ document.querySelector("h1").innerHTML ="it is a  Draw !" ;}