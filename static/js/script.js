const navOptions = document.querySelectorAll(".nav-link")

function setActiveNav() {
    navOptions.forEach(option => option.classList.remove("active"));
    this.classList.add("active");
    toggleMobileNav();
}

function toggleMobileNav() {
    const navBarTogglerBtn = document.querySelector(".navbar-toggler");
    navBarTogglerBtn.classList.add("collapsed");
    navBarTogglerBtn.setAttribute("aria-expanded", "false");

    const navbarCollapse = document.querySelector("#navbarToggler");
    navbarCollapse.classList.remove("show");
}

function sendEmail() {
    const contactForm = document.querySelector("#contact-form");
    contactForm.addEventListener("submit", function(e) {
        const submitBtn = document.querySelector(".submit-btn");
        e.preventDefault();
        submitBtn.disabled = true;
        const modalFooter = document.querySelector(".modal-footer");
        const modalBody = document.querySelector(".modal-body");
        const modalTitle = document.querySelector(".modal-title");
        
        emailjs.sendForm("yahoo", "portfolio_contact_form", this)
            .then(function() {
                const formFields = document.querySelectorAll("input");
                const messageField = document.querySelector("#message-input");
                
                messageField.value = "";
                formFields.forEach(field => field.value = "");
                submitBtn.disabled = false;

                modalTitle.innerText = "Success!";
                modalBody.innerHTML = "<p>Thank you for your message.</p>";
                modalFooter.innerHTML = '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
            }, function(error) {
                submitBtn.disabled = false;
                modalTitle.innerText = "Sorry!";
                modalBody.innerHTML = "<p>Sorry, your message couldn't be sent at this time. The issue is: " + error + ".</p>";
                modalFooter.innerHTML = '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
            });
    })    
}

navOptions.forEach(item => item.addEventListener("click", setActiveNav));
window.addEventListener("load", sendEmail);