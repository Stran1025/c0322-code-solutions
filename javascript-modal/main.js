var $openModal = document.querySelector('.modal-button');
var $popUpWindow = document.querySelector('#pop-up-window');
var $noButton = document.querySelector('#no-button');

$openModal.addEventListener('click', popUp);
$noButton.addEventListener('click', closePopUp);

function popUp(event) {
  $popUpWindow.classList.remove('hidden');
}

function closePopUp(event) {
  $popUpWindow.classList.add('hidden');
}
