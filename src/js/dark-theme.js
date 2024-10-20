// const button = document.getElementById('btn-header');
// const span = document.getElementById('header-mob-span');

// button.addEventListener('click', onButtonClick);

// function onButtonClick() {
//   document.body.classList.toggle('dark-theme');
//   button.classList.toggle('right');

//   if (localStorage.getItem('theme') !== 'dark')
//     localStorage.setItem('theme', 'dark');
//   else localStorage.setItem('theme', 'light');
// }

const button = document.getElementById('btn-header');

// Проверка сохранённой темы при загрузке страницы
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  button.classList.add('right'); // Оставляем переключатель в правильном положении
} else {
  document.body.classList.remove('dark-theme');
  button.classList.remove('right'); // Оставляем переключатель в исходном положении
}

button.addEventListener('click', onButtonClick);

function onButtonClick() {
  document.body.classList.toggle('dark-theme');
  button.classList.toggle('right'); // Переключаем кнопку вручную

  // Сохранение текущей темы в localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
