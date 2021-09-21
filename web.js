let suits=[
    "Clubs", "Diamonds", "Hearts", "Spades"
];

let cards=[
   "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"
];

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function randomCard(){
    const suitIndex1=getRandomInt(4);
    const cardIndex1=getRandomInt(13);
    
    var mystring1 = cards[cardIndex1]+" of "+suits[suitIndex1];

    const suitIndex2=getRandomInt(4);
    const cardIndex2=getRandomInt(13);
    
    var mystring2 = cards[cardIndex2]+" of "+suits[suitIndex2];
    document.getElementById('result').innerHTML=mystring1+", "+mystring2;

    var score=cards[cardIndex1]+cards[cardIndex2];
}
