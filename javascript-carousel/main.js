var $container = document.querySelector('.container');
var $view = document.querySelectorAll('.view');
var $progressIcon = document.querySelectorAll('.progress-circle');
var viewIndex = 0;

$container.addEventListener('click', handleClick);

function handleClick(event) {
  if (!event.target.hasAttribute('data-view')) {
    return;
  }
  viewSwap(parseInt(event.target.getAttribute('data-view')));
}

function viewSwap(view) {
  viewIndex = view;
  for (var i = 0; i < $view.length; i++) {
    if (parseInt($view[i].getAttribute('data-view')) === view) {
      $view[i].classList.remove('hidden');
      $progressIcon[i].classList.remove('far');
      $progressIcon[i].classList.add('fas');
    } else {
      $view[i].classList.add('hidden');
      $progressIcon[i].classList.remove('fas');
      $progressIcon[i].classList.add('far');
    }
  }
}

setInterval(autoSwapView, 5000);

function autoSwapView() {
  viewIndex++;
  if (viewIndex === 6) {
    viewIndex = 0;
  }
  viewSwap(viewIndex);
}
