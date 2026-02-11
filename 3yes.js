
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.querySelector(".btn--yes");
  const noBtn = document.querySelector(".btn--no");

  yesBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "4yes.html"; 
  });

  noBtn.addEventListener("click", () => {
    // Redirect to another page
    window.location.href = "2no.html"; 
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const catImg = document.querySelector(".cat-img");
  let lastX = null, lastY = null, lastZ = null;
  const shakeThreshold = 15; // adjust sensitivity
  let shakeDetected = false;

  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
      const acc = event.accelerationIncludingGravity;

      if (lastX !== null && lastY !== null && lastZ !== null) {
        const deltaX = Math.abs(lastX - acc.x);
        const deltaY = Math.abs(lastY - acc.y);
        const deltaZ = Math.abs(lastZ - acc.z);

        if ((deltaX + deltaY + deltaZ) > shakeThreshold && !shakeDetected) {
          shakeDetected = true;
          // Remove blur and show image
          catImg.style.filter = "blur(0)";
          catImg.style.opacity = "1";
        }
      }

      lastX = acc.x;
      lastY = acc.y;
      lastZ = acc.z;
    });
  } else {
    // fallback if no motion sensor
    catImg.style.filter = "blur(0)";
    catImg.style.opacity = "1";
  }
});


