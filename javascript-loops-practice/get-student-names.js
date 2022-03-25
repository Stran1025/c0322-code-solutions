/* exported getStudentNames */
function getStudentNames(students) {
  var returnArray = [];
  for (var i = 0; i < students.length; i++) {
    returnArray.push(students[i].name);
  }
  return returnArray;
}
