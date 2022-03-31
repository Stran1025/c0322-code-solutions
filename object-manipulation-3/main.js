console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
Make a complete deck
Create an array name deck
  the array should contain 52 objects for cards
    each object/cards should have a suit (heart, diamond, club, space);
    for each suit there is 13 cards
      for each card there is
        its current suit
        string for rank (aces, kings, queens, tens,)
        a number for points (11-2)

Shuffles the cards
Take in any deck
Create an empty array for shuffled deck
  use Math to generate a random number
  multiply that number by input deck length
  trunce that number
  push the input deck item at that index to the output shuffled array
  remove that item from the input array
  repeat the process until no more cards is left in the input deck
  return the output array

Create playerbase
Take in an array with up to 26 names
Assign an empty array as output
  for each player create an object
    the object should have the player name as one property
    the object should have an empty array as the player hand
    push the object into the output playerbase array
    repeate until the end of the input array
return output array

Distribute the card
take in
  an array with all the players as object with hands and names
  a deck that is shuffled and ready to be dealt
  optional numbers of cards to be deal
    default to 2 cards if not specify;
set a count starting at 0
for each player starting at the first one
deal each of them a card from the begining of the deck
  the card should be the card at the index count
  push the card at index count into the player hand
  add one to the count after each card is dealt
repeat this process twice
return the playerbase with their cards in hand

Score calculating
for each player in the game with cards in their hand
add the total points of their hand
  the points for each card is already included in the property point
  add a new propery to the player call pointTotal
  assign the total points of all their cards into the property
return the playerbase with total points attach to them

Find the winner
sset the first player as the current winner
for each player in the game
  check if that player have more points than the current winner
  if that player have more points declare that player the new current winner
  if the player doesnt have more points do nothing
after all the players is check return the current winner;

Putting all the pieces together
take in
  an array with all the participants names
  a number for how many cards each participants will get
    if not specify will default to 2
set up the players and give them hands
create a deck
shuffle the deck
deal specify amount of cards to the players
tally up all the points in each player hand
declare the winner as the player with the most points in hand
return the winner
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

function shuffle(deck) {
  var shuffledDeck = [];
  for (var i = deck.length - 1; i >= 0; i--) {
    var random = Math.random() * deck.length;
    var number = Math.trunc(random);
    shuffledDeck.push(deck[number]);
  }
  return shuffledDeck;
}

function setupPlayers(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var player = {};
    player.name = array[i];
    player.hand = [];
    output.push(player);
  }
  return output;
}

function dealCardToPlayer(players, deck, numberOfCards) {
  var count = 0;
  if (numberOfCards === undefined) {
    numberOfCards = 2;
  }
  for (var i = 0; i < numberOfCards; i++) {
    for (var j = 0; j < players.length; j++) {
      players[j].hand.push(deck[count]);
      count++;
    }
  }
  return players;
}

function totalPoint(players) {
  for (var i = 0; i < players.length; i++) {
    var point = 0;
    for (var j = 0; j < players[i].hand.length; j++) {
      point += players[i].hand[j].point;
    }
    players[i].point = point;
  }
  return players;
}

function findWinner(players) {
  var winner = players[0];
  for (var i = 0; i < players.length; i++) {
    if (players[i].point > winner.point) {
      winner = players[i];
    }
  }
  return winner;
}

function runGame(array, number) {
  var players = setupPlayers(array);
  var deck = createDeck();
  deck = shuffle(deck);
  dealCardToPlayer(players, deck, number);
  totalPoint(players);
  var winner = findWinner(players);
  return 'And the Winner is ' + winner.name + ' with ' + winner.point + ' points!!';
}

runGame(['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']);
