// Slide in
document.addEventListener("DOMContentLoaded", function () {
    const slideElements = document.querySelectorAll('.slide-in, .slide-in-left');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Tek seferlik animasyon
            }
        });
    }, { threshold: 0.25 });

    slideElements.forEach(el => observer.observe(el));
});