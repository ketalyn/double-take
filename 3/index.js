// Toggle visibility for hidden navigation bars
const toggleNavButton = document.getElementById('toggle-nav');
const pagesNavbarTop = document.querySelector('.pages-navbar-top');
const pagesNavbarBottom = document.querySelector('.pages-navbar-bottom');

// Hide the pages navbar initially
pagesNavbarTop.style.display = 'none';
pagesNavbarBottom.style.display = 'none';

// Toggle visibility when button is clicked
toggleNavButton.addEventListener('click', () => {
    const isTopVisible = pagesNavbarTop.style.display === 'flex'; // Check if the top navbar is currently visible
    const isBottomVisible = pagesNavbarBottom.style.display === 'flex'; // Check if the bottom navbar is currently visible

    // Toggle display style of the hidden navbars
    pagesNavbarTop.style.display = isTopVisible ? 'none' : 'flex';  // Show/hide top navbar
    pagesNavbarBottom.style.display = isBottomVisible ? 'none' : 'flex'; // Show/hide bottom navbar
});
