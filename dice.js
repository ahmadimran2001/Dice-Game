let randomNumber1 = Math.floor(Math.random()*(6-1))+1;
let randomNumber2 = Math.floor(Math.random()*(6-1))+1;
let p_1_img = document.getElementById("img1")
let p_2_img = document.getElementById("img2")
let winner = document.getElementById("winner");

//working with changing images of player 1 dice and player 2 dice
switch(randomNumber1){
    case 1:
        p_1_img.setAttribute('src','images/dice1.png');
        break;

    case 2:
        p_1_img.setAttribute('src','images/dice2.png');
        break;
    case 3:
        p_1_img.setAttribute('src','images/dice3.png');
        break;
    case 4:
        p_1_img.setAttribute('src','images/dice4.png');
        break;
    case 5:
        p_1_img.setAttribute('src','images/dice5.png');
        break;
    case 6:
        p_1_img.setAttribute('src','images/dice6.png');
         break;
}

switch(randomNumber2){
    case 1:
        p_2_img.setAttribute('src','images/dice1.png')
        break;

    case 2:
        p_2_img.setAttribute('src','images/dice2.png');
        break;
    case 3:
        p_2_img.setAttribute('src','images/dice3.png');
        break;
    case 4:
        p_2_img.setAttribute('src','images/dice4.png');
        break;
    case 5:
        p_2_img.setAttribute('src','images/dice5.png');
        break;
    case 6:
        p_2_img.setAttribute('src','images/dice6.png');
         break;
}

//Changing h1
if(randomNumber1>randomNumber2){
    winner.innerHTML="<h1>Player 1 Wins</h1>";
}
else if(randomNumber1<randomNumber2){
    winner.innerHTML="<h1>Player 2 Wins</h1>";
}
else{
    winner.innerHTML="<h1>DRAW</h1>";
    
}
