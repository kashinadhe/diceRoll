function diceGame(){
    let player1=Math.floor(Math.random()*6)+1;
    
    if(player1==1){
        document.querySelector('.leftimg').innerHTML=`<img src="dice1.png" alt="">`;
    }
    else if(player1==2){
        document.querySelector('.leftimg').innerHTML=`<img src="dice2.png" alt="">`;
    }
    else if(player1==3){
        document.querySelector('.leftimg').innerHTML=`<img src="dice3.png" alt="">`;
    }
    else if(player1==4){
        document.querySelector('.leftimg').innerHTML=`<img src="dice4.png" alt="">`;
    }
    else if(player1==5){
        document.querySelector('.leftimg').innerHTML=`<img src="dice5.png" alt="">`;
    }
    else if(player1==6){
        document.querySelector('.leftimg').innerHTML=`<img src="dice6.png" alt="">`;
    }
    let player2=Math.floor(Math.random()*6)+1;
    
    if(player2==1){
        document.querySelector('.rightimg').innerHTML=`<img src="dice1.png" alt="">`;
    }
    else if(player2==2){
        document.querySelector('.rightimg').innerHTML=`<img src="dice2.png" alt="">`;
    }
    else if(player2==3){
        document.querySelector('.rightimg').innerHTML=`<img src="dice3.png" alt="">`;
    }
    else if(player2==4){
        document.querySelector('.rightimg').innerHTML=`<img src="dice4.png" alt="">`;
    }
    else if(player2==5){
        document.querySelector('.rightimg').innerHTML=`<img src="dice5.png" alt="">`;
    }
    else if(player2==6){
        document.querySelector('.rightimg').innerHTML=`<img src="dice6.png" alt="">`;
    }
    
    if(player1>player2){
        document.querySelector('h1').textContent="Player 1 Wins!";
        let p1=document.getElementById('player1')
        p1.textContent="🚩Player1";
        p1.style.color="green";
        document.getElementById('player2').style.color="black";
        document.getElementById('player2').textContent="Player2";
    }
    else if(player1<player2){
        document.querySelector('h1').textContent="Player 2 Wins!";  
        let p2=document.getElementById('player2')
        p2.textContent="🚩Player2";
        p2.style.color="green";
        document.getElementById('player1').style.color="black";
        document.getElementById('player1').textContent="Player1";
    }
    else{
        document.querySelector('h1').textContent="Draw!";
        document.getElementById('player1').style.color="black";
        document.getElementById('player1').textContent="Player1";
        document.getElementById('player2').style.color="black";
        document.getElementById('player2').textContent="Player2";
    }
}