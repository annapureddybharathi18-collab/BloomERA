
/*
  BloomEra — website interactions
  Instagram profile link and mobile navigation
*/

// Instagram profile URL
const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/upgrow_with_chinni/";

// Mobile navigation elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");

// Mobile menu toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Open navigation menu"
        : "Close navigation menu"
    );

    navLinks.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  // Close the mobile menu when a navigation link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

// Automatically update the copyright year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Instagram contact button
const instagramLink = document.querySelector(
  "[data-instagram-link]"
);

const contactHint = document.querySelector(
  "[data-contact-hint]"
);

if (instagramLink) {
  instagramLink.href = INSTAGRAM_PROFILE_URL;
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener noreferrer";
}

if (contactHint) {
  contactHint.textContent =
    "Connect with me on Instagram.";
}
