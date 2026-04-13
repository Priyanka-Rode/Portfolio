// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Toggle blue/pink accent when PR logo is clicked
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', () => {
    document.body.classList.toggle('pink-mode');
  });
}

// Timeline dot animation
window.addEventListener("scroll", () => {
  const dot = document.querySelector(".dot");
  let offset = window.scrollY * 0.3;
  dot.style.top = -220 + offset + "px";
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

function downloadResume() {
  const link = document.createElement('a');
  link.href = 'PriyankaRode_Resume.pdf';
  link.download = 'PriyankaRode_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function callNow() {
  window.location.href = "tel:+917395936932";
}