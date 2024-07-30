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

function showMoreAboutMe() {
    document.getElementById('more-about-me').style.display = 'flex';
}

function hideMoreAboutMe() {
    document.getElementById('more-about-me').style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();


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
            document.getElementById('notification').style.display = 'block';
        }, function(error) {
            console.log('FAILED...', error);
        });

    
    document.getElementById('contact-form').reset();
});