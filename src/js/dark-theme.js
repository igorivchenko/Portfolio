const button = document.getElementById('btn-header');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  button.classList.add('right');
} else {
  document.body.classList.remove('dark-theme');
  button.classList.remove('right');
}

button.addEventListener('click', onButtonClick);

function onButtonClick() {
  document.body.classList.toggle('dark-theme');
  button.classList.toggle('right');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
