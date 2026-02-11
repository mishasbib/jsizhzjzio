// script.js
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.querySelector(".btn--yes");
  const noBtn = document.querySelector(".btn--no");

  yesBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "3yes.html"; 
  });

  noBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "3no.html"; 
  });
});

const nextBtn = document.getElementById("nextBtn");
const page = document.getElementById("page");

nextBtn.addEventListener("click", () => {
  // Add exit animation class (slides page to the left)
  page.classList.add("slide-out-left");

  // Wait for animation to finish before navigating
  setTimeout(() => {
    window.location.href = "nextpage.html"; // change to your page
  }, 800); // match your CSS animation duration
});
