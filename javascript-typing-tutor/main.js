var $prompt = document.querySelectorAll('span.letter');
var $popUpWindow = document.querySelector('#pop-up-window');
var $yesButton = document.querySelector('#yes-button');
var $accuracyDisplay = document.querySelector('#accuracy');
var count = 0;
var numberOfKeysInput = 0;

document.addEventListener('keydown', keyPressed);
$yesButton.addEventListener('click', playAgain);

function keyPressed(event) {
  numberOfKeysInput++;
  if (event.key === $prompt[count].textContent) {
    $prompt[count].classList.add('passed-letter');
    $prompt[count].classList.remove('current-letter');
    $prompt[count].classList.remove('incorrect-letter');
    count++;
    if (count === $prompt.length) {
      $popUpWindow.classList.remove('hidden');
      $accuracyDisplay.textContent = 'Accuracy: ' + (30 / numberOfKeysInput * 100) + '%';
      numberOfKeysInput = 0;
      return;
    }
    $prompt[count].classList.add('current-letter');
  } else {
    $prompt[count].classList.add('incorrect-letter');
  }
}

function playAgain(event) {
  count = 0;
  for (var i = 0; i < $prompt.length; i++) {
    $prompt[i].classList.remove('passed-letter');
  }
  $prompt[0].classList.add('current-letter');
  $popUpWindow.classList.add('hidden');
}
