const toogle = document.getElementsByClassName("tooglebutt")[0];
const nav = document.getElementsByClassName("nav-links")[0];
toogle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
