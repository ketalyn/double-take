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

// Set individual carousel speeds and starting positions
document.querySelectorAll('.carousel-container').forEach((carousel, index) => {
    const duration = 30 + index * 5; // Adjust the base duration and increment as needed
    carousel.style.animation = `scrollPoem ${duration}s linear infinite`; // Set animation with customized duration

    // Customize starting position for each poem
    carousel.style.transform = `translateX(${0 + index * 10}%)`; // Adjust starting position based on index
});

// Add hover event listeners
document.querySelectorAll('.image-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
        const carousel = row.querySelector('.carousel-container');
        carousel.style.animationPlayState = 'running'; // Start animation on hover
        carousel.style.clipPath = 'inset(0 0 0 0)'; // Show all content
    });
    
    row.addEventListener('mouseleave', () => {
        const carousel = row.querySelector('.carousel-container');
        carousel.style.animationPlayState = 'paused'; // Pause animation on leave
        carousel.style.clipPath = 'inset(0 100% 0 0)'; // Hide content again
    });
});
