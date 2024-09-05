// for mobile nav bar
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle');
  const dropDown = document.querySelector('.drop_down');

  toggleButton.addEventListener('click', function() {
    dropDown.classList.toggle('visible');
  });
});

// for the services page
function showContent(category) {
  const allContent = document.querySelectorAll('div[id^="Bread"], div[id^="Cakes"], div[id^="Snacks"], div[id^="Parfait"]');
  allContent.forEach(content => {
      content.style.display = 'none';
  });
  document.getElementById(category).style.display = 'block';
}