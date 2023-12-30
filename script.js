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
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function () {
        // Close the navigation menu
        var navMenu = document.querySelector('.nav ul');
        navMenu.classList.remove('show');
    });
    link.addEventListener('keypress', function (event) {
        // Close the navigation menu when 'Enter' key is pressed
        if (event.key === 'Enter') {
            var navMenu = document.querySelector('.nav ul');
            navMenu.classList.remove('show');
        }
    });
});

// Create a Stripe client
var stripe = Stripe('pk_test_51OR7MgGK5ROpFNQVh2Yhv0gm1V4ypesV6uBGFRUaKRGjZgpDkFgcGjVOYfQhc8FSVcPN7qHtdFGrSI2ImbfCVHiD00eEQBdRNK');

// Create an instance of Elements
var elements = stripe.elements();

// Create an instance of the card Element
var card = elements.create('card');

// Add an instance of the card Element to the card-element div
card.mount('#card-element');

// Handle real-time validation errors from the card Element
card.addEventListener('change', function (event) {
    // Display validation errors or clear the error message
    var displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

// Form validation for donation form
document.getElementById('donationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get donation amount and card element
    var amount = document.getElementById('amount').value;
    var cardElement = elements.getElement('card');

    // Create a token and handle the result
    stripe.createToken(cardElement).then(function (result) {
        if (result.error) {
            // Display error message if token creation fails
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // Process the token on the server (replace this with actual server-side processing)
            alert('Thank you for your donation of £' + amount + '!');

            // Reset the form
            document.getElementById('donationForm').reset();
        }
    });
});

// Function to set the donation amount when clicking on suggestion buttons
function setAmount(amount) {
    document.getElementById('amount').value = amount;
}

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

// Close the burger menu when a navigation link is clicked
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function () {
        var navMenu = document.querySelector('.nav ul');
        navMenu.classList.remove('show');
    });
});

// Close the burger menu when a navigation link is clicked or pressed
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function () {
        // Close the navigation menu
        var navMenu = document.querySelector('.nav ul');
        navMenu.classList.remove('show');
    });
    link.addEventListener('keypress', function (event) {
        // Close the navigation menu when 'Enter' key is pressed
        if (event.key === 'Enter') {
            var navMenu = document.querySelector('.nav ul');
            navMenu.classList.remove('show');
        }
    });
});

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
