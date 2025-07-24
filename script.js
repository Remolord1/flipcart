document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";
    email.classList.remove("error-border");
    password.classList.remove("error-border");

    // Email validation
    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      email.classList.add("error-border");
      isValid = false;
    } else if (!validateEmail(email.value)) {
      emailError.textContent = "Enter a valid email.";
      email.classList.add("error-border");
      isValid = false;
    }

    // Password validation
    if (!password.value.trim()) {
      passwordError.textContent = "Password is required.";
      password.classList.add("error-border");
      isValid = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      password.classList.add("error-border");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    // Basic email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
