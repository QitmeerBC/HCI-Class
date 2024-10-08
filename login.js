const validEmail = "admin@admin.com";
const validPassword = "12345";

function handleLogin(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const email = emailInput.value;
  const password = passwordInput.value;
  const errorMessage = document.getElementById("errorMessage");

  if (email === validEmail && password === validPassword) {
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Invalid email or password";
    emailInput.value = "";
    passwordInput.value = "";
  }
}

document.getElementById("login-form").addEventListener("submit", handleLogin);
