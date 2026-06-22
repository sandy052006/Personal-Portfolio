const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
  menuIconOpen.classList.remove("hidden");
  menuIconClose.classList.add("hidden");
  menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.remove("hidden");
      menuIconOpen.classList.add("hidden");
      menuIconClose.classList.remove("hidden");
      menuToggle.setAttribute("aria-expanded", "true");
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.className = "text-sm text-center text-red-400";
      formStatus.classList.remove("hidden");
      return;
    }

    formStatus.textContent =
      "Thanks for your message! Connect the form to a service like Formspree or EmailJS to receive emails.";
    formStatus.className = "text-sm text-center text-cyan-400";
    formStatus.classList.remove("hidden");
    contactForm.reset();
  });
}
