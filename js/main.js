var cards = [{
 rank: "queen",
 suit: "hearts",
 cardImage: "images/queen-of-hearts.png"
}, { 
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
}, { 
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
}, {
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
} ];
var cardsInPlay = [];
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[2]) {console.log("You found a match!");}
else {console.log("Sorry, try again.")
}

var flipCard = function() {
this.setAttribute("src",cards[cardId].cardImage);
this.getAttribute("data-id");
console.log("User flipped" + cards.rank);
checkForMatch();
};

cardsInPlay.push(cards.rank);
console.log(cards.cardImage);
console.log(cards.suit);

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement("img");
cardElement.setAttribute("src", "images/back.png");
cardElement.setAttribute("data-id", i );
cardElement.addEventListener("click", flipCard);
document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();
