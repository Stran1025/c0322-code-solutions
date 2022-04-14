var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', createUsers);
xhr.send();

function createUsers(event) {
  console.log(xhr.status);
  console.log(xhr.response);
  var response = xhr.response;
  for (var i = 0; i < response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = response[i].name;
    $userList.appendChild($li);
  }
}
