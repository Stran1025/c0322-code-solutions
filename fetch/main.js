fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log('data:', data));

fetch('https://pokeapi.co/api/v2/pokemon/absol')
  .then(response => response.json())
  .then(data => console.log('Absol:', data));
