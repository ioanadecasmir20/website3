// Smooth scroll to contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Form interaction
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").innerText =
        "Message sent successfully (demo only)";

    this.reset();
});
