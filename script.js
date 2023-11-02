document.addEventListener("DOMContentLoaded", function () {
  const menuBars = document.getElementById("menu-bars");
  const closeIcon = document.getElementById("close-icon");
  const nav = document.querySelector("nav");

  function openNav() {
    nav.style.transform = "translateX(0%)";
  }

  function closeNav() {
    nav.style.transform = "translateX(-100%)";
  }

  menuBars.addEventListener("click", openNav);

  closeIcon.addEventListener("click", closeNav);

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

const tabs = document.querySelectorAll(".tab-btn");
const allContents = document.querySelectorAll(".content");
const line = document.querySelector(".line"); // Select the line element

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    // Add the event parameter 'e'
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    allContents.forEach((content) => {
      content.classList.remove("active");
    });
    allContents[index].classList.add("active");
  });
});
