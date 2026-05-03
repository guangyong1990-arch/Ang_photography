// Simple image carousel for hero preview
const carouselImages = [
    { src: 'image/building/B(4).jpeg', alt: 'Building photography preview' },
    { src: 'image/building/B(2).jpeg', alt: 'Architectural marvel in photography' },
    { src: 'image/building/B(6).jpeg', alt: 'Modern building capture' },
    { src: 'image/building/B(8).jpeg', alt: 'Cityscape photography' }

];

let currentIndex = 0;
const imgElement = document.querySelector('.hero-preview .preview-card img');

function changeImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    imgElement.src = carouselImages[currentIndex].src;
    imgElement.alt = carouselImages[currentIndex].alt;
}

// Change image every 5 seconds
setInterval(changeImage, 5000);