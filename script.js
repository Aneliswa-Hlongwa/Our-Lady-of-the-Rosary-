document.addEventListener('DOMContentLoaded', function () {
  const showBtn = document.querySelector('.nav-bar h1#show');
  const hideBtn = document.querySelector('.nav-bar h1#hidden');
  const navContents = document.querySelectorAll('.nav-bar-content');
  const h4s = document.querySelectorAll('.nav-bar-content h4');

  // Hide everything except #show icon initially
  hideBtn.style.display = 'none';
  navContents.forEach(el => el.style.display = 'none');

  // When ☰ is clicked → show only h4s
  showBtn.addEventListener('click', function () {
    showBtn.style.display = 'none';
    hideBtn.style.display = 'block';

    navContents.forEach(el => {
      el.style.display = 'block';
      const drop = el.querySelector('.drop-down');
      if (drop) drop.style.display = 'none'; // hide dropdowns initially
    });
  });

  // When ✖ is clicked → hide all
  hideBtn.addEventListener('click', function () {
    hideBtn.style.display = 'none';
    showBtn.style.display = 'block';
    navContents.forEach(el => el.style.display = 'none');
  });

  // When h4 is clicked → toggle its dropdown
  h4s.forEach(h4 => {
    h4.addEventListener('click', function () {
      const drop = this.nextElementSibling;
      if (drop && drop.classList.contains('drop-down')) {
        drop.style.display = (drop.style.display === 'block') ? 'none' : 'block';
      }
    });
  });
});
