var $openModal = document.querySelector('.modal-button');
var isPopUpOpen = false;
var $popUpWindow = document.querySelector('#pop-up-window');
var $popUpBox = document.querySelector('#pop-up-box');
var $noButton = document.querySelector('#no-button');

$openModal.addEventListener('click', popUp);
$noButton.addEventListener('click', closePopUp);

function popUp(event) {
  if (!isPopUpOpen) {
    $popUpWindow.classList.add('shaded');
    $popUpWindow.classList.add('pop-up');
    $popUpBox.classList.add('pop-up-box');
    isPopUpOpen = true;
    $popUpWindow.classList.remove('hidden');
  }
}

function closePopUp(event) {
  $popUpWindow.classList.remove('shaded');
  $popUpWindow.classList.remove('pop-up');
  $popUpBox.classList.remove('pop-up-box');
  isPopUpOpen = false;
  $popUpWindow.classList.add('hidden');
}
