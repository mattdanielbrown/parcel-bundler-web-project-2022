

function addTouchEventListenerToDocument () {
  document.addEventListener("touchstart", function () {}, true);
}

function main () {
  const navbarList = document.querySelector('nav ul');
  const navbarController = document.getElementById('nav-menu-control');

  function toggleNavigation() {
    navbarList.classList.toggle('active');
  }

  navbarController.addEventListener('change', function () {
    toggleNavigation();
  });

  addTouchEventListenerToDocument();
}

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  main();
});
