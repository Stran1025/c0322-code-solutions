var num1 = 123;
var num2 = 321;
var num3 = 222;

var maximumValue = Math.max(num1, num2, num3);

console.log('value for maximumValue:', maximumValue);

var heroes = ['Deadpool', 'Spiderman', 'Vision', 'Dr. Strange'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('value for randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value for randomHero:', randomHero);

var library = [
  {
    title: 'JavaScript & JQuery interactive front-end web development',
    author: 'Jon Duckett'
  },
  {
    title: 'HTML and CSS design and build websites',
    author: 'Jon Duckett'
  },
  {
    title: 'Random Book',
    author: 'John Snape'
  }
];

var lastBook = library.pop();

console.log('value for lastBook:', lastBook);

var firstBook = library.shift();

console.log('value for firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value for library', library);

var fullName = 'Sang Tran';
var firstAndLastName = fullName.split(' ');

console.log('value for firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value for sayMyName:', sayMyName);
