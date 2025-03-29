let links = document.querySelectorAll(".header .container .links li a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
let bars = document.getElementById("bars");
bars.onclick = (_) => {
  let links = document.getElementById("links");
  links.classList.toggle("open");
};
let userIcon = document.getElementById("user");
userIcon.addEventListener("click", (_) => {
  let popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
  } else {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    document.body.appendChild(popup);
    let close = document.createElement("span");
    close.classList.add("close-but");
    close.appendChild(document.createTextNode("X"));
    popup.appendChild(close);
    let title = document.createElement("h2");
    title.classList.add("login-title");
    let titleText = document.createTextNode("login");
    title.appendChild(titleText);
    popup.appendChild(title);
    let form = document.createElement("form");
    form.method = "POST";
    popup.appendChild(form);
    let emailLabel = document.createElement("label");
    emailLabel.classList.add("email-label");
    let email = document.createElement("input");
    email.classList.add("email", "::before");
    email.type = "email";
    email.placeholder = "Email";
    email.name = "email";
    emailLabel.appendChild(email);
    form.appendChild(emailLabel);
    let passwordLabel = document.createElement("label");
    passwordLabel.classList.add("password-label");
    let password = document.createElement("input");
    password.classList.add("password");
    password.type = "password";
    password.placeholder = "Password";
    password.name = "password";
    passwordLabel.appendChild(password);
    let showPassword = document.createElement("i");
    showPassword.classList.add("fa-solid", "fa-eye-slash", "show-password");
    passwordLabel.appendChild(showPassword);
    form.appendChild(passwordLabel);
    let link = document.createElement("a");
    link.classList.add("link");
    link.href = "#";
    let linkText = document.createTextNode("Forgot Password?");
    link.appendChild(linkText);
    form.appendChild(link);
    let butLogin = document.createElement("input");
    butLogin.classList.add("but-login");
    butLogin.type = "submit";
    butLogin.value = "LOGIN";
    form.appendChild(butLogin);
    let signBut = document.createElement("a");
    signBut.classList.add("sign-but");
    signBut.href = "sign-in.html";
    signBut.appendChild(document.createTextNode("SIGN IN"));
    popup.appendChild(signBut);
    let line = document.createElement("div");
    line.classList.add("line");
    popup.appendChild(line);
    let box = document.createElement("div");
    box.classList.add("box");
    let google = document.createElement("a");
    google.classList.add("google");
    google.href = "#";
    let googleText = document.createTextNode("Google");
    google.appendChild(googleText);
    box.appendChild(google);
    let apple = document.createElement("a");
    apple.classList.add("apple");
    apple.href = "#";
    let appleText = document.createTextNode("Apple");
    apple.appendChild(appleText);
    box.appendChild(apple);
    popup.appendChild(box);
  }
});
document.onclick = (e) => {
  if (e.target.classList.contains("close-but")) {
    document.querySelector(".popup").remove();
  } else if (e.target.classList.contains("fa-eye") || e.target.classList.contains("fa-eye-slash")) {
    let password = document.querySelector(".password");
    if(e.target.classList.contains("fa-eye-slash")) {
      e.target.classList.remove("fa-eye-slash");
      e.target.classList.add("fa-eye");
      password.type = "text";
    } else {
      e.target.classList.remove("fa-eye");
      e.target.classList.add("fa-eye-slash");
      password.type = "password";
    }
  }
};
