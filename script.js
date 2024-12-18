
// JavaScript for NewTek Cleaning Clone

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    // Form submission handler
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Extract form data
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;

        // Display an alert or perform an AJAX request here
        alert(`Thank you, ${name}! We will get back to you at ${email} soon.`);

        // Optionally, clear the form
        contactForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", () => {
        // Toggle the "active" class to show/hide the nav
        nav.classList.toggle("active");
    });
});