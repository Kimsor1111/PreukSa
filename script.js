const SeeMore = document.querySelector(".seemore");
const Content = document.querySelector(".content");
let isTrue = false;
SeeMore.addEventListener("click", () => {
  if (!isTrue) {
    Content.textContent =
      "Disclaimer: The Site does not offer professional or definitively accurate advice or opinions regarding products or services. The information and opinions provided are for entertainment and educational purposes only and should not replace professional advice. Therefore, before making any decisions based on your scores, we recommend consulting with appropriate professionals. We do not provide any professional or definitively accurate advice on products or services. ANY USE OR RELIANCE ON INFORMATION FOUND ON THE SITE IS AT YOUR OWN RISK.";
    SeeMore.textContent = "Read Less";
    isTrue = true;
  } else {
    Content.textContent =
      "Disclaimer: The Site does not offer professional or definitively accurate...";
    SeeMore.textContent = "Read More";
    isTrue = false;
  }
});

const Body = document.querySelector("body");
const Menubar = document.querySelector(".fa-solid.fa-bars");
const SideMenu = document.querySelector(".sidemenu");
let isOpen = false;
Menubar.addEventListener("click", () => {
  if (!isOpen) {
    Body.style.overflowY = "hidden";
    SideMenu.classList.replace("hidden", "flex");
    Menubar.classList.replace("fa-bars", "fa-x");
    isOpen = true;
  } else {
    Body.style.overflowY = "auto";
    SideMenu.classList.replace("flex", "hidden");
    Menubar.classList.replace("fa-x", "fa-bars");
    isOpen = false;
  }
});
