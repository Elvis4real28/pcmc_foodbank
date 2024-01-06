

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Smoothly scroll to the target element
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add keyboard navigation support for the burger menu
function toggleMenuKeyPress(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        toggleMenu();
    }
}

// Close the burger menu when a navigation link is clicked or pressed
function closeMenu() {
    var navMenu = document.querySelector('.nav ul');
    navMenu.classList.remove('show');
}

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
    link.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            closeMenu();
        }
    });
});



// Form validation for volunteer sign-up form
document.getElementById('volunteerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get name and email values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var nameValidationMessage = document.getElementById('nameValidationMessage');
    var emailValidationMessage = document.getElementById('emailValidationMessage');

    // Clear previous validation messages
    nameValidationMessage.textContent = '';
    emailValidationMessage.textContent = '';

    // Validate name
    if (name.trim() === '') {
        nameValidationMessage.textContent = 'Please enter a valid name.';
        return;
    }

    // Validate email format
    if (email.trim() === '' || !isValidEmail(email)) {
        emailValidationMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Add additional validation or submission logic as needed
    alert('Thank you for signing up as a volunteer!');
    this.reset();
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toggle the navigation menu visibility
function toggleMenu() {
    var navMenu = document.querySelector('.nav ul');
    navMenu.classList.toggle('show');
}

// Initialize Slick slider for services
$('.service-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false, // Disable dots
    arrows: false, // Enable arrows
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
});

// Function to open the default mail client with the specified email address
function contactUs() {
    var email = 'elvisjht@gmail.com';
    var subject = 'Contact Us Inquiry';
    var body = 'Hello,\n\nI would like to get in touch regarding the services offered by UK Food Bank.\n\n';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open the default mail client
    window.location.href = mailtoLink;
}
