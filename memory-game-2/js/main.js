var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var checkForMatch = function()	{
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
}	else {
	console.log("Sorry, try again.");
}

var flipCard = function (cardId) {

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[0]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
 		function createBoard () {
		for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/black.png");
		cardElement.setAttribute('data-id' , i);
		cardElement.addEventListener('click', flipCard);
		document.getElementbyId('game-board').appendChild(cardElement);
	}
};

   createBoard ();
