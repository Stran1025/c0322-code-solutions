var $countDownDisplay = document.querySelector('.countdown-display');

var countdown = setInterval(changeDisplay, 1000);

function changeDisplay() {
  var number = $countDownDisplay.textContent;
  number--;
  if (number === 0) {
    number = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  }
  $countDownDisplay.textContent = number;
}
