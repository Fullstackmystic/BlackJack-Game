let suits=[
    "clubs", "diamonds", "hearts", "spades"
];

let cards=[
   "ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"
];

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function randomCard(){
    const suitIndex=getRandomInt(4);
    const cardIndex=getRandomInt(13);
    
    let mystring = cards[cardIndex]+"_of_"+suits[suitIndex]+".png";

    // document.getElementById('suit').innerHTML=suits[suitIndex];
    
    document.getElementById('card').innerHTML=mystring;


}

 