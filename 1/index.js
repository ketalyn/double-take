// Existing carousel dragging logic
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Mouse down event
    carousel.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent default behavior
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    // Mouse leave event
    carousel.addEventListener('mouseleave', () => isDragging = false);
    // Mouse up event
    carousel.addEventListener('mouseup', () => isDragging = false);

    // Mouse move event
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // Stop the function if not dragging
        e.preventDefault();

        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust multiplier for smoother dragging
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile devices
    carousel.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        isDragging = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchend', () => isDragging = false);

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return; // Stop the function if not dragging
        e.preventDefault();

        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust multiplier for smoother dragging
        carousel.scrollLeft = scrollLeft - walk;
    });
});

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

// Custom times and dates for each image
const imageInfo = {
    "Image 1": { time: "10:00", date: "011024" },
    "Image 2": { time: "11:00", date: "021024" },
    "Image 3": { time: "12:00", date: "031024" },
    "Image 4": { time: "01:00", date: "041024" },
    "Image 5": { time: "02:00", date: "051024" },
    "Image 6": { time: "03:00", date: "061024" },
    "Image 7": { time: "04:00", date: "071024" },
    "Image 8": { time: "05:00", date: "081024" },
    "Image 9": { time: "06:00", date: "091024" }
};

// Select the TIME and DATE elements in the navbar
const timeElement = document.querySelector('.image-time');
const dateElement = document.querySelector('.image-date');

// Add event listeners for each image in the carousels
carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            // Get the alt text of the clicked image
            const altText = image.alt;

            // Check if the image has custom time and date information
            if (imageInfo[altText]) {
                // Update the TIME and DATE elements with the custom info, no labels
                timeElement.textContent = imageInfo[altText].time;
                dateElement.textContent = imageInfo[altText].date;
            } else {
                // Default fallback if no custom info is found
                timeElement.textContent = '';
                dateElement.textContent = '';
            }

            // Hide both the top and bottom navbars when an image is clicked
            pagesNavbarTop.style.display = 'none';
            pagesNavbarBottom.style.display = 'none';
        });
    });
});
