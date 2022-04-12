/* exported Student */
function Student(fName, lName, subject) {
  this.firstName = fName;
  this.lastName = lName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
};
