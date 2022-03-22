function convertMinutesToSecond(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var fiveMinutesToSecond = convertMinutesToSecond(5);

console.log('result for 5 minutes to seconds:', fiveMinutesToSecond);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetCody = greet('Cody');

console.log('result for greetCody', greetCody);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var area17By23 = getArea(17, 23);

console.log('result for area 17 by 23:', area17By23);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var myFirstName = getFirstName({ firstName: 'Sang', lastName: 'Tran' });

console.log('result for myFirstName:', myFirstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var myLastElement = getLastElement(['JavaScript', 'HTML', 'CSS', 'C++', 'Java', 'Python']);

console.log('value of myLastElement:', myLastElement);
