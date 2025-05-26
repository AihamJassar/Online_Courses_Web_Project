const showPassword = document.querySelector(".show-password");
showPassword.addEventListener("click", (e) => {
  let password = document.getElementById("password");
  if (e.target.classList.contains("fa-eye-slash")) {
    e.target.classList.remove("fa-eye-slash");
    e.target.classList.add("fa-eye");
    password.type = "text";
  } else {
    e.target.classList.remove("fa-eye");
    e.target.classList.add("fa-eye-slash");
    password.type = "password";
  }
});

