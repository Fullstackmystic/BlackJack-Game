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
    
    var mystring = "Playing Cards/PNG-cards-1.3/"+cards[cardIndex]+"_of_"+suits[suitIndex]+".png";

    // var image=document.createElement('img');
    document.querySelector('.card-img').src=mystring;

    // var sec=getElementById('card-img');
    // sec.appendChild(image);
    // document.getElementById('card').innerHTML=image;

}

 