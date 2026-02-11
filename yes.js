// script.js
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.querySelector(".btn--yes");
  const noBtn = document.querySelector(".btn--no");

  yesBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "2yes.html"; 
  });

  noBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "2no.html"; 
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Start hidden off-screen to the left
  container.style.transform = "translateX(-100vw)";
  container.style.opacity = "0";

  // Trigger the animation after a tiny delay
  setTimeout(() => {
    container.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
    container.style.transform = "translateX(0)";
    container.style.opacity = "1";
  }, 100);
});
