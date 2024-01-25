// const drop_down = document.querySelector('.drop_down');
// const toggle = document.getElementById('toggle');

// toggle.onclick = function(){
//   drop_down.classList.toggle('active');
// }
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle');
  const dropDown = document.querySelector('.drop_down');

  toggleButton.addEventListener('click', function() {
    dropDown.classList.toggle('visible');
  });
});