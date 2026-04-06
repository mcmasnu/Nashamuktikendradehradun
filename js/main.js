// main.js for multi-page rehabilitation website

// Smooth scrolling functionality
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
}

// Interactive elements
const interactiveElements = document.querySelectorAll('.interactive');

interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});

// Navigation functionality
function toggleNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');
}

const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', toggleNavigation);