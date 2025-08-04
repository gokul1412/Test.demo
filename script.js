// Save registration data in localStorage
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const message = document.getElementById("regMessage");

      if (name && email && password) {
        localStorage.setItem("user", JSON.stringify({ name, email, password }));
        message.style.color = "lightgreen";
        message.textContent = "Registered successfully! Redirecting...";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const message = document.getElementById("loginMessage");

      const userData = JSON.parse(localStorage.getItem("user"));

      if (userData && email === userData.email && password === userData.password) {
        message.style.color = "lightgreen";
        message.textContent = "Login successful!";
        setTimeout(() => {
          window.location.href = "dashboard.html"; // Replace or create this page
        }, 1500);
      } else {
        message.style.color = "red";
        message.textContent = "Invalid credentials!";
      }
      if (userData && email === userData.email && password === userData.password) {
  alert("Login successful!");
  window.location.href = "dashboard.html"; // Redirect after alert
}
if (userData && email === userData.email && password === userData.password) {
  // Show popup
  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  // Redirect after 2 seconds
  setTimeout(() => {
    popup.style.display = "none";
    window.location.href = "dashboard.html";
  }, 2000);
}


    });
  }
});
