var $lightBulb = document.querySelector('#light-bulb');
$lightBulb.addEventListener('click', lightswitch);
var $room = document.querySelector('.room');
var $roomClassList = $room.classList;
var $buttonContainer = document.querySelector('.button-container');
var $buttonContainerClassList = $buttonContainer.classList;
var status = 'light-on';

function lightswitch(event) {
  if (status === 'light-on') {
    $lightBulb.className = 'light-off';
    $roomClassList.remove('light-on');
    $roomClassList.add('light-off');
    $buttonContainerClassList.remove('light-on');
    $buttonContainerClassList.add('light-off');
    status = 'light-off';
  } else {
    $lightBulb.className = 'light-on';
    $roomClassList.remove('light-off');
    $roomClassList.add('light-on');
    $buttonContainerClassList.remove('light-off');
    $buttonContainerClassList.add('light-on');
    status = 'light-on';
  }
}
