let links = document.querySelectorAll(".header .container .links li a");
links.forEach(link => {
  link.addEventListener("click", e => {
    links.forEach(link => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
let bars = document.getElementById("bars");
bars.onclick = _ => {
  let links = document.getElementById("links");
  links.classList.toggle("open");
};
let userIcon = document.getElementById("user");
userIcon.addEventListener("click", _ => {
  let pupop = document.createElement("div");
  pupop.classList.add("container", "pupop");
  document.body.appendChild(pupop);
});