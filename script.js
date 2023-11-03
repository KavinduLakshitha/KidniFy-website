const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.focus();
  });
});

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

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");
  const content = item.querySelector(".accordion-content");

  title.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").style.maxHeight = "0";
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
