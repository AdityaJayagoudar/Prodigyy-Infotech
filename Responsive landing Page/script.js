// Change background color on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'silver'; // Darker background when scrolled
    } else {
        navbar.style.backgroundColor = 'silver'; // Original background
    }
});