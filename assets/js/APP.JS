//  Review Slider
let index = 0;
const reviews = document.querySelectorAll(".review-item");

function showReview(i) {
  reviews.forEach((r, n) => {
    if (n === i) {
      r.style.opacity = "1";
      r.style.transform = "scale(1)";
    } else {
      r.style.opacity = "0.4";
      r.style.transform = "scale(0.85)";
    }
  });
}

// Initial display
showReview(index);

// Auto slide every 3 seconds
setInterval(() => {
  index = (index + 1) % reviews.length;
  showReview(index);
}, 3000);

//  Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Smooth scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Newsletter subscription
const emailInput = document.querySelector(".input");
const subscribeBtn = document.querySelector(".btn");

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email) {
    alert(`Your email has been registered: ${email}`);
    emailInput.value = "";
  } else {
    alert("Please enter your email!");
  }
});
