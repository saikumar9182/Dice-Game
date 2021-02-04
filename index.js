var randomNumber1= Math.floor((Math.random()*6)+1);

var randomNumber2= Math.floor((Math.random()*6)+1);




document.querySelector(".img1").src="images/dice"+randomNumber1+".png";

document.querySelector(".img2").src="images/dice"+randomNumber2+".png";

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="🚩Play 1 Wins";
}

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="Play 2 Wins🚩";
}

if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerText="Draw!!";
}