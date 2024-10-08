document.addEventListener('DOMContentLoaded', () => {
    const toggleNavButton = document.getElementById('toggle-nav');
    const newToggleButton = document.getElementById('toggle-nav-2');
    const pagesNavbarTop = document.querySelector('.pages-navbar-top');
    const pagesNavbarBottom = document.querySelector('.pages-navbar-bottom');
    const textContainer = document.querySelector('.TEXT'); // Select the TEXT container

    // Hide the pages navbar and new toggle button initially
    pagesNavbarTop.style.display = 'none';
    pagesNavbarBottom.style.display = 'none';
    newToggleButton.style.display = 'none'; // Make sure the new button is hidden initially

    // Function to toggle visibility for hidden navigation bars
    toggleNavButton.addEventListener('click', () => {
        const isTopVisible = pagesNavbarTop.style.display === 'flex';
        const isBottomVisible = pagesNavbarBottom.style.display === 'flex';

        // Toggle the visibility of the navbars
        pagesNavbarTop.style.display = isTopVisible ? 'none' : 'flex';
        pagesNavbarBottom.style.display = isBottomVisible ? 'none' : 'flex';

        // Show or hide the new toggle button based on visibility of the navbars
        if (pagesNavbarTop.style.display === 'flex' || pagesNavbarBottom.style.display === 'flex') {
            newToggleButton.style.display = 'block'; // Show button if navbars are visible
            
            // Randomly position the button within the .TEXT container above the bottom navbar
            const containerWidth = textContainer.clientWidth;
            const containerHeight = textContainer.clientHeight;

            // Get the height of the bottom navbar
            const bottomNavbarHeight = pagesNavbarBottom.offsetHeight;

            // Generate random positions
            const randomX = Math.random() * (containerWidth - 100); // Adjust according to button width
            const randomY = Math.random() * (containerHeight - bottomNavbarHeight - 100); // Adjust for button height

            // Set new position
            newToggleButton.style.position = 'absolute'; // Make position absolute
            newToggleButton.style.left = `${randomX}px`;
            newToggleButton.style.top = `${randomY}px`;
        } else {
            newToggleButton.style.display = 'none'; // Hide button if navbars are not visible
        }
    });

    // Function to hide the navbars when the new toggle button is clicked
    newToggleButton.addEventListener('click', () => {
        pagesNavbarTop.style.display = 'none'; // Hide the top navbar
        pagesNavbarBottom.style.display = 'none'; // Hide the bottom navbar
        newToggleButton.style.display = 'none'; // Hide the new toggle button as well
    });
});
