var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', switchTab);

function switchTab(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tab.length; i++) {
    if ($tab[i] === event.target) {
      event.target.classList.add('active');
    } else {
      $tab[i].classList.remove('active');
    }
  }
  for (var j = 0; j < $view.length; j++) {
    if ($view[j].getAttribute('data-view') === event.target.getAttribute('data-view')) {
      $view[j].classList.remove('hidden');
    } else {
      $view[j].classList.add('hidden');
    }
  }
}
