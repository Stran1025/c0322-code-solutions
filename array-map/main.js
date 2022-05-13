const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

console.log('doubled', numbers.map(number => number * 2));
console.log('prices', numbers.map(number => '$' + number.toFixed(2)));
console.log('upperCased', languages.map(language => language.toLocaleUpperCase()));
console.log('firstLEtters', languages.map(language => language[0]));
