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
    navBarTogglerBtn.classList.add("collapsed");
    
    const navbarCollapse = document.querySelector("#navbarToggler")
    navbarCollapse.classList.remove("show");
}

navOptions.forEach(item => item.addEventListener("click", setActiveNav))