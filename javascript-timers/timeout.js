var $message = document.querySelector('.message');

setTimeout(changeMessage, 2000);

function changeMessage() {
  $message.textContent = 'Hello There';
}
