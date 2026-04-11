// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Timeline dot animation
window.addEventListener("scroll", () => {
  const dot = document.querySelector(".dot");
  let offset = window.scrollY * 0.3;
  dot.style.top = 120 + offset + "px";
});

function sendEmail() {
  window.location.href = "mailto:tharaneeshj@gmail.com";
}

function openLinkedIn() {
  window.open("https://linkedin.com", "_blank");
}

function openGithub() {
  window.open("https://github.com", "_blank");
}

function callNow() {
  window.location.href = "tel:+917395936932";
}