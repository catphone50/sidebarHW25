const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const navSide = document.querySelector(".navSide");

menuButton.addEventListener("click", () => {
  navSide.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navSide.classList.remove("active");
});
