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
  const allLinks = document.querySelectorAll('a[href="#"]');

  allContent.forEach(content => {
    content.style.display = 'none';
  });
  allLinks.forEach(link => {
    link.classList.remove('show-shadow');
  });

  // Set display style based on category
  const gridCategories = ['Bread', 'Snacks', 'Parfait'];
  document.getElementById(category).style.display = gridCategories.includes(category) ? 'grid' : 'block';

  document.querySelector(`a[onclick="showContent('${category}')"]`).classList.add('show-shadow');
}