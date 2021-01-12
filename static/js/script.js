const navOptions = document.querySelectorAll(".nav-link")

function setActiveNav() {
    navOptions.forEach(option => option.classList.remove("active"));
    this.classList.add("active");
    toggleMobileNav()
}

function toggleMobileNav() {
    const navBarTogglerBtn = document.querySelector(".navbar-toggler");
    navBarTogglerBtn.classList.add("collapsed");
    navBarTogglerBtn.setAttribute("aria-expanded", "false")

    const navbarCollapse = document.querySelector("#navbarToggler")
    navbarCollapse.classList.remove("show");
}

function sendEmail() {
    const contactForm = document.querySelector("#contact-form")
    contactForm.addEventListener("submit", function(e) {
        const submitBtn = document.querySelector(".submit-btn")
        e.preventDefault();
        submitBtn.disabled = true;
        emailjs.sendForm("yahoo", "portfolio_contact_form", this)
            .then(function() {
                console.log('SUCCESS!');
                const formFields = document.querySelectorAll("input")
                const messageField = document.querySelector("#message-input")
                messageField.value = ""
                formFields.forEach(field => field.value = "")
                submitBtn.disabled = false;
            }, function(error) {
                console.log('FAILED...', error);
                submitBtn.disabled = false;
            });
    })    
}

navOptions.forEach(item => item.addEventListener("click", setActiveNav))
window.addEventListener("load", sendEmail)