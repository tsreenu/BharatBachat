// Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Auto-advance carousel
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }, 5000);

    // Click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
}

// Scroll animation
function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.content-text, .content-image').forEach(el => {
        observer.observe(el);
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initScrollAnimation();
});
