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
    "Image 1": { time: "16:31", date: "02.09.24" },
    "Image 2": { time: "16:31", date: "02.09.24" },
    "Image 3": { time: "16:29", date: "02.09.24" },
    "Image 4": { time: "16:29", date: "02.09.24" },
    "Image 5": { time: "16:28", date: "02.09.24" },
    "Image 6": { time: "16:28", date: "02.09.24" },
    "Image 7": { time: "16:28", date: "02.09.24" },
    "Image 8": { time: "16:28", date: "02.09.24" },
    "Image 9": { time: "20:21", date: "01.09.24" },
    "Image 10": { time: "20:21", date: "01.09.24" },
    "Image 11": { time: "20:11", date: "01.09.24" },
    "Image 12": { time: "20:10", date: "01.09.24" },
    "Image 13": { time: "20:10", date: "01.09.24" },
    "Image 14": { time: "13:34", date: "01.09.24" },
    "Image 15": { time: "13:33", date: "01.09.24" },
    "Image 16": { time: "13:33", date: "01.09.24" },
    "Image 17": { time: "13:26", date: "01.09.24" },
    "Image 18": { time: "13:26", date: "01.09.24" },
    "Image 19": { time: "13:26", date: "01.09.24" },
    "Image 20": { time: "13:25", date: "01.09.24" },
    "Image 21": { time: "13:25", date: "01.09.24" },
    "Image 22": { time: "13:24", date: "01.09.24" },
    "Image 23": { time: "16:27", date: "02.09.24" },
    "Image 24": { time: "16:24", date: "02.09.24" },
    "Image 25": { time: "16:23", date: "02.09.24" },
    "Image 26": { time: "16:22", date: "02.09.24" },
    "Image 27": { time: "16:22", date: "02.09.24" },
    "Image 28": { time: "16:16", date: "02.09.24" },
    "Image 29": { time: "16:15", date: "02.09.24" },
    "Image 30": { time: "16:12", date: "02.09.24" },
    "Image 31": { time: "22:24", date: "02.09.24" },
    "Image 32": { time: "16:06", date: "02.09.24" },
    "Image 33": { time: "16:00", date: "02.09.24" },
    "Image 34": { time: "15:59", date: "02.09.24" },
    "Image 35": { time: "15:58", date: "02.09.24" },
    "Image 36": { time: "15:55", date: "02.09.24" },
    "Image 37": { time: "22:14", date: "02.09.24" },
    "Image 38": { time: "15:52", date: "02.09.24" },
    "Image 39": { time: "15:11", date: "02.09.24" },
    "Image 40": { time: "15:10", date: "02.09.24" },
    "Image 41": { time: "15:06", date: "02.09.24" },
    "Image 42": { time: "15:06", date: "02.09.24" },
    "Image 43": { time: "15:04", date: "02.09.24" },
    "Image 44": { time: "15:04", date: "02.09.24" },
    "Image 45": { time: "10:46", date: "02.09.24" },
    "Image 46": { time: "10:45", date: "02.09.24" },
    "Image 47": { time: "11:47", date: "31.08.24" },
    "Image 48": { time: "17:49", date: "30.08.24" },
    "Image 49": { time: "21:33", date: "28.08.24" },
    "Image 50": { time: "21:31", date: "28.08.24" }
};

// Select the TIME and DATE elements in the navbar
const timeElement = document.querySelector('.image-time');
const dateElement = document.querySelector('.image-date');

// Add event listeners for each image in the carousels
carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');

    images.forEach(image => {
        // Function to handle display of time and date
        const showImageInfo = () => {
            const altText = image.alt;

            if (imageInfo[altText]) {
                // Update the TIME and DATE elements with the custom info
                timeElement.textContent = imageInfo[altText].time;
                dateElement.textContent = imageInfo[altText].date;
            } else {
                timeElement.textContent = '';
                dateElement.textContent = '';
            }

            // Hide both the top and bottom navbars when an image is clicked
            pagesNavbarTop.style.display = 'none';
            pagesNavbarBottom.style.display = 'none';
        };

        // Click event for desktop
        image.addEventListener('click', showImageInfo);
        
        // Touch event for mobile
        image.addEventListener('touchend', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            showImageInfo();
        });
    });
});
