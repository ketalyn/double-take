document.addEventListener('DOMContentLoaded', () => {
    const toggleNavButton = document.getElementById('toggle-nav');
    const newToggleButton = document.getElementById('toggle-nav-2');
    const pagesNavbarTop = document.querySelector('.pages-navbar-top');
    const pagesNavbarBottom = document.querySelector('.pages-navbar-bottom');
    const textContainer = document.querySelector('.TEXT');

    // Hide the pages navbar and new toggle button initially
    pagesNavbarTop.style.display = 'none';
    pagesNavbarBottom.style.display = 'none';
    newToggleButton.style.display = 'none';

// Function to toggle visibility for hidden navigation bars
toggleNavButton.addEventListener('click', () => {
    const isTopVisible = pagesNavbarTop.style.display === 'flex';
    const isBottomVisible = pagesNavbarBottom.style.display === 'flex';

    // Toggle the visibility of the navbars
    pagesNavbarTop.style.display = isTopVisible ? 'none' : 'flex';
    pagesNavbarBottom.style.display = isBottomVisible ? 'none' : 'flex';

    // Show or hide the new toggle button based on visibility of the navbars
    if (pagesNavbarTop.style.display === 'flex' || pagesNavbarBottom.style.display === 'flex') {
        newToggleButton.style.display = 'block';

        // Randomly position the button within the .TEXT container above the bottom navbar
        const containerWidth = textContainer.clientWidth;
        const containerHeight = textContainer.clientHeight;

        const bottomNavbarHeight = pagesNavbarBottom.offsetHeight;
        const randomX = Math.random() * (containerWidth - 100);
        const randomY = Math.random() * (containerHeight - bottomNavbarHeight - 100);

        newToggleButton.style.position = 'absolute';
        newToggleButton.style.left = `${randomX}px`;
        newToggleButton.style.top = `${randomY}px`;

        // Add a class for special styling
        newToggleButton.classList.add('randomly-placed');
    } else {
        newToggleButton.style.display = 'none';
        newToggleButton.classList.remove('randomly-placed'); // Remove class if not visible
    }
});

    // Function to hide the navbars when the new toggle button is clicked
    newToggleButton.addEventListener('click', () => {
        pagesNavbarTop.style.display = 'none';
        pagesNavbarBottom.style.display = 'none';
        newToggleButton.style.display = 'none';
    });

    // Image dragging functionality with GSAP Draggable
    const images = document.querySelectorAll('.side-image');

    images.forEach(image => {
        gsap.set(image, { position: 'absolute' }); // Set the initial position to absolute

        Draggable.create(image, {
            type: 'x,y', // Allow dragging in both x and y directions
            // Remove bounds for unlimited dragging
            // bounds: { minX: 0, minY: 0, maxX: window.innerWidth - image.offsetWidth, maxY: window.innerHeight - image.offsetHeight },
            onPress: () => {
                image.style.cursor = 'grabbing'; // Change cursor on drag
            },
            onRelease: () => {
                image.style.cursor = 'grab'; // Reset cursor after drag
            }
        });
    });
});
