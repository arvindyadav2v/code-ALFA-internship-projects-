document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Set opacity to 1
                entry.target.style.transform = 'translateY(0)'; // Reset position
                observer.unobserve(entry.target); // Stop observing this section
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0; // Initial opacity
        section.style.transform = 'translateY(20px)'; // Initial position
        observer.observe(section); // Start observing each section
    });
});
