document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Optional: Add a simple parallax effect to the header
    window.addEventListener('scroll', () => {
        const headerContent = document.querySelector('header');
        if (headerContent) {
            const scrollPos = window.scrollY;
            headerContent.style.transform = `translateY(${scrollPos * 0.3}px)`;
            headerContent.style.opacity = 1 - (scrollPos * 0.003);
        }
    });
});
