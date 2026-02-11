
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.querySelector(".btn--yes");
  const noBtn = document.querySelector(".btn--no");

  yesBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "5yes.html"; 
  });

  noBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "5no.html"; 
  });
});




