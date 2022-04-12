function ExampleConstructor() {

}

var test = new ExampleConstructor();
var test2 = test instanceof ExampleConstructor;

console.log('value for ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('value for typeof ExampleConstructor: ', typeof ExampleConstructor);
console.log('value for new ExampleConstructor: ', test);
console.log('value for instanceof: ', test2);
