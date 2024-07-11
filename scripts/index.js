const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const navSide = document.querySelector(".navSide");
const btns = document.querySelectorAll(".btn");

menuButton.addEventListener("click", () => {
  navSide.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navSide.classList.remove("active");
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const subList = btn.nextElementSibling;
    if (subList) {
      subList.classList.toggle("show");
    }
  });
});
