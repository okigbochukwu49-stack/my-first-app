// Footer year - updates automatically every year
document.getElementById("year").textContent = new Date().getFullYear();

// Hello button in Contact section
document.getElementById("helloBtn").addEventListener("click", function() {
  document.getElementById("helloMsg").textContent = "Hello! Thanks for visiting my portfolio. Let's build something great together! 🚀";
});

// Mobile menu - shows/hides links on phone
document.getElementById("menuBtn").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("show");
});
