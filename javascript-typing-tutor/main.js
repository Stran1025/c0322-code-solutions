var $prompt = document.querySelectorAll('span.letter');

document.addEventListener('keydown', test);

function test(event) {
  for (var i = 0; i < $prompt.length; i++) {
    if (event.key === $prompt[i].textContent) {
      $prompt[i].classList.add('passed-letter');
      $prompt[i].classList.remove('current-letter');
      $prompt[i + 1].classList.add('current-letter');
    }
  }
}
