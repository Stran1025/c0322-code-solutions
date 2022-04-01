var bookshelf = [
  {
    isbn: '978-0984782802',
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann Mcdowell'
  },
  {
    isbn: '978-0999685907',
    title: 'The Self-Taught Programmer: The Definitive Guide to Programming Professionally',
    author: 'Cory Althoff'
  },
  {
    isbn: '978-1465482211',
    title: 'Beginner\'s Step-by-Step Coding Course: Learn Computer Programming the Easy Way',
    author: 'DK'
  }
];

console.log('value for bookshelf:', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

var stringifyBookshelf = JSON.stringify(bookshelf);
console.log('value for JSON.stringify(bookshelf):', stringifyBookshelf);
console.log('type of JSON.stringify(bookshelf):', typeof stringifyBookshelf);

var string = '{"id":"123456","name":"Chris"}';
console.log('value for string:', string);
console.log('typeof string:', typeof string);

var student = JSON.parse(string);
console.log('value for JSON.parse(string):', student);
console.log('typeof JSON.parse(string):', typeof student);
