

let cards = [3,10,5,2]
sum = cards[0]+cards[1]+cards[2]+cards[3]



for(let i=0;i<=cards.length;i++){
    sum = cards[0]+cards[1]+cards[2]+cards[3]

    // console.log(sum);
}

let hasBlackjack = false;
let isAlive = true;

let message = "";


if(sum>15){
    message = "You can continue...";

}
else if(sum<15){
    message="You lose"
    isAlive = false;
}
else {
    message= "Blackjack!";
    hasBlackjack = true;
}
console.log(message);



