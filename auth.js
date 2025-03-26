document.addEventListener("DOMContentLoaded", () => {

    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");
    const logoutLink = document.getElementById("logout-link");
  
    if (logoutLink) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        loginLink.style.display = "none";
        registerLink.style.display = "none";
        logoutLink.style.display = "block";
      }
  
      logoutLink.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        alert("Logged out successfully!");
        window.location.reload();
      });
    }
  

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        const user = JSON.parse(localStorage.getItem(email));
        if (user && user.password === password) {
          localStorage.setItem("loggedInUser", email);
          alert("Login successful!");
          window.location.href = "index.html";
        } else {
          alert("Invalid email or password.");
        }
      });
    }
  
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("register-name").value;
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;
        if (localStorage.getItem(email)) {
          alert("Email already registered!");
          return;
        }
        localStorage.setItem(email, JSON.stringify({ name, email, password }));
        alert("Registration successful! Please log in.");
        window.location.href = "login.html";
      });
    }
  });
  