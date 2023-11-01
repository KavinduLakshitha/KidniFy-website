document.addEventListener("DOMContentLoaded", function () {
  const menuBars = document.getElementById("menu-bars");
  const closeIcon = document.getElementById("close-icon");
  const nav = document.querySelector("nav");

  // Function to open the navbar
  function openNav() {
    nav.style.transform = "translateX(0%)";
  }

  // Function to close the navbar
  function closeNav() {
    nav.style.transform = "translateX(-100%)";
  }

  // Add an event listener to open the navbar when the menu icon is clicked
  menuBars.addEventListener("click", openNav);

  // Add an event listener to close the navbar when the close icon is clicked
  closeIcon.addEventListener("click", closeNav);

  // Add an event listener to close the navbar when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      nav.style.transform === "translateX(0%)" &&
      !nav.contains(event.target) &&
      event.target !== menuBars
    ) {
      closeNav();
    }
  });
});
