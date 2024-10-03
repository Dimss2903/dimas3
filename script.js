// Carousel Logic (if needed for multiple items)
let carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

showCarouselItem(currentIndex);

// Add any event listener for arrows or buttons if you have them for carousel navigation

