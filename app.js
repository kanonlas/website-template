// ====================
// Portfolio JavaScript
// ====================

// Check that JavaScript is working
console.log("Portfolio website loaded successfully!");

// ====================
// Dynamic Copyright Year
// ====================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ====================
// Smooth Scrolling
// ====================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    // Only apply to internal links
    if (targetId.startsWith("#")) {
      event.preventDefault();

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
