function map(array, transform) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(transform(array[i]));
  }
  return output;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

console.log('doubled', map(numbers, number => number * 2));
console.log('prices', map(numbers, number => '$' + number.toFixed(2)));
console.log('upperCased', map(languages, language => language.toLocaleUpperCase()));
console.log('firstLEtters', map(languages, language => language[0]));
