var student = {
  firstName: 'Sang',
  lastName: 'Tran',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName', fullName);

student.liveInIrvine = false;
student.previousOccupation = 'T-mobile Expert';

console.log('value of student.liveInIrvine', student.liveInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2017
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']", vehicle['color']);
console.log("value of vehicle['isConvertible']", vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Cookie',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
