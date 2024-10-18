document.addEventListener('DOMContentLoaded', function() {
    console.log("Profile page loaded!");
});
// Adding Intersection Observer to trigger animations when sections come into view
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.about, .skills, .contact');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
