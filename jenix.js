
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle');
  const dropDown = document.querySelector('.drop_down');

  toggleButton.addEventListener('click', function() {
    dropDown.classList.toggle('visible');
  });
});