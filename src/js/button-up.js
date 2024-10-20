const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 448) {
    buttonUp.classList.add('button-up-active');
  } else {
    buttonUp.classList.remove('button-up-active');
  }
});

buttonUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
