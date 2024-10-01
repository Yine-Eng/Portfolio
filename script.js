// Toggle menu bar for small screens
const menu = document.querySelector("#menubar");
const nav = document.querySelector(".navigate");
const navLinks = document.querySelectorAll(".navigate a");

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    nav.classList.toggle('active');
}

navLinks.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('fa-x');
        nav.classList.remove('active');
    }
});

// Section Reveal Animation: responds to scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (section.id === 'home') {
            // Always keep the home section visible
            section.classList.add("visible");
        } else {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (sectionTop < window.innerHeight - revealPoint) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        }
    });
});

// Ensure home section is visible when page loads
window.addEventListener('load', () => {
    document.querySelector('#home').classList.add('visible');
});

// Show More About Me section
function showMoreAboutMe() {
    document.getElementById('more-about-me').style.display = 'flex';
}

// Hide More About Me section
function hideMoreAboutMe() {
    document.getElementById('more-about-me').style.display = 'none';
}

// Form submission with email.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Disable submit button while sending email
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerText = 'Sending...';

    var contactNumber = Math.floor(Math.random() * 100000);


    var parms = {
        contact_number: contactNumber,
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_sxg9vr4', 'template_7g8emxw', parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            submitButton.innerText = 'Sent!';
            document.getElementById('notification').classList.add('show');

            // Re-enable button and change text back to 'Submit' after 3 seconds
            setTimeout(function() {
                submitButton.innerText = 'Submit';
                submitButton.disabled = false;
            }, 3000);
        }, function(error) {
            console.log('FAILED...', error);

            // Show error message and re-enable button
            alert('Oops! Something went wrong. Please try again.');
            submitButton.disabled = false;
            submitButton.innerText = 'Submit';
        });

    document.getElementById('contact-form').reset();
});

// JS to Toggle Dark and Light Modes
const themeToggle = document.getElementById("theme-toggle");
const lightModeIcon = document.getElementById("light-mode-icon");
const darkModeIcon = document.getElementById("dark-mode-icon");
const themePic = document.getElementById("themePicture");
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    if (themePic.src.includes("images/moon.png"))
        themePic.src = "images/sun.png";
    else
        themePic.src = "images/moon.png";
}

// Event listener for the text button
themeToggle.addEventListener("click", toggleTheme);