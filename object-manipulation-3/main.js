console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
Create an array name deck
  the array should contain 52 objects for cards
    each object/cards should have a suit (heart, diamond, club, space);
    for each suit there is 13 cards
      for each card there is
        its current suit
        string for rank (aces, kings, queens, tens,)
        a number for points (11-2)
*/

function createDeck() {
  var deck = [];
  var suit = ['heart', 'diamond', 'club', 'space'];
  var name = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
  var point = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < name.length; j++) {
      var card = {};
      card.suit = suit[i];
      card.name = name[j];
      card.point = point[j];
      deck.push(card);
    }
  }
  return deck;
}

console.log('deck:', createDeck());
