const cardBtns = document.querySelectorAll('.card-btns i');

cardBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => e.target.classList.toggle('selected'))
);

const themeSelector = document.getElementById('theme-selector');

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  themeSelector.classList.add('fa-sun');
  document.documentElement.classList.add('dark');
} else {
  themeSelector.classList.add('fa-moon');
  document.documentElement.classList.add('light');
}

themeSelector.addEventListener('click', () => {
  if (themeSelector.classList.contains('fa-sun')) {
    themeSelector.classList.remove('fa-sun');
    themeSelector.classList.add('fa-moon');
  } else {
    themeSelector.classList.remove('fa-moon');
    themeSelector.classList.add('fa-sun');
  }

  document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light');
});
