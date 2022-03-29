var $lightBulb = document.querySelector('#light-bulb');
$lightBulb.addEventListener('click', lightswitch);
var $room = document.querySelector('.room');
var $roomClassList = $room.classList;
var $buttonContainer = document.querySelector('.button-container');
var $buttonContainerClassList = $buttonContainer.classList;
var isLightOn = true;

function lightswitch(event) {
  if (isLightOn) {
    $lightBulb.className = 'light-off';
    $roomClassList.remove('light-on');
    $roomClassList.add('light-off');
    $buttonContainerClassList.remove('light-on');
    $buttonContainerClassList.add('light-off');
    isLightOn = false;
  } else {
    $lightBulb.className = 'light-on';
    $roomClassList.remove('light-off');
    $roomClassList.add('light-on');
    $buttonContainerClassList.remove('light-off');
    $buttonContainerClassList.add('light-on');
    isLightOn = true;
  }
}
