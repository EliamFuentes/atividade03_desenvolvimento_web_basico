function menuShow() {
  const menuMobile = document.querySelector(".mobile-menu");
  const icon = document.querySelector(".icon");

  menuMobile.classList.toggle("open");
  icon.src = menuMobile.classList.contains("open")
    ? "close_white_36dp.svg"
    : "menu_white_36dp.svg";
}
