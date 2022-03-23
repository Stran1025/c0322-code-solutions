/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  if (number >= 5) {
    return false;
  }
}

function isEven(number) {
  var leftOver = number % 2;
  if (leftOver === 1) {
    return false;
  }
  if (leftOver === 0) {
    return true;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
  if (string[0] !== 'J') {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  if (person.age < 21) {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  if (person.age < 16) {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age === 0) {
    return true;
  }
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  }
  if (pH >= 0 && pH < 7) {
    return 'acid';
  }
  if (pH <= 14 && pH > 7) {
    return 'base';
  }
  return 'invalid pH level';
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  }
  if (name === 'dot') {
    return 'I\'m cute~';
  }
  if (name !== 'dot' && name !== 'yakko' && name !== 'wakko') {
    return 'Goodnight everybody!';
  }
}
