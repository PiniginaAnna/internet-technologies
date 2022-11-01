"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const tabheaderItems = document.querySelector(".tabheader__items"),
    tabcontents = document.querySelectorAll(".tabcontent");

  function hideContent() {
    tabcontents.forEach((content) => {
      content.style.display = "none";
    });
  }
  hideContent();

  function showActive() {
    tabheaderItems.addEventListener("click", (event) => {
      if (!event.target.classList.contains("tabheader__item_active")) {
        for (let tabheaderItem of tabheaderItems.children) {
          tabheaderItem.classList.remove("tabheader__item_active");
        }
        event.target.classList.add("tabheader__item_active");
      }
    });
  }
  showActive();


});
