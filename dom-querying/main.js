console.log('hello, world');

var heading1 = document.querySelector('h1');
console.log('value for heading1:', heading1);
console.dir(heading1);

var explain = document.querySelector('#explanation');
console.log('value for explain:', explain);
console.dir(explain);

var hint = document.querySelector('.hint');
console.log('value for first element with class hint;', hint);
console.dir(hint);

var paragraph = document.querySelectorAll('p');
console.log('value for all p elements:', paragraph);

var allExampleLink = document.querySelectorAll('.example-link');
console.log('value for all of example-link element:', allExampleLink);
