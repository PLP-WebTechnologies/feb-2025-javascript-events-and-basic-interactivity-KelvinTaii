// Event Handling
document.getElementById("changeTextBtn").addEventListener("click", function () {
    this.textContent = "Clicked!";
    this.style.backgroundColor = "lightgreen";
  });
  
  document.getElementById("secretBtn").addEventListener("mousedown", () => {
    this.timer = setTimeout(() => alert("You discovered the secret! 🎉"), 1000);
  });
  document.getElementById("secretBtn").addEventListener("mouseup", () => {
    clearTimeout(this.timer);
  });
  
  document.addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Gallery/Slideshow
  const images = ["img1.jpg", "img2.jpeg", "img3.jpeg"];
  let index = 0;
  const galleryImg = document.getElementById("galleryImg");
  
  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    galleryImg.src = images[index];
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    galleryImg.src = images[index];
  });
  
  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(div => div.style.display = "none");
      document.getElementById(`tab-${btn.dataset.tab}`).style.display = "block";
    });
  });
  
  // Form Validation
  const form = document.getElementById("myForm");
  const msg = document.getElementById("formMsg");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      msg.textContent = "Invalid email format.";
      msg.style.color = "red";
      return;
    }
    if (password.length < 8) {
      msg.textContent = "Password must be at least 8 characters.";
      msg.style.color = "red";
      return;
    }
  
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
  });
  
  // Real-time feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("formMsg");
    if (this.value.length < 8) {
      feedback.textContent = "Password too short.";
      feedback.style.color = "orange";
    } else {
      feedback.textContent = "Password looks good!";
      feedback.style.color = "green";
    }
  });
  