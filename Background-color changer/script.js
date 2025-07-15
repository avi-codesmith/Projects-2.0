"use strict";

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach((e) => {
  console.log(e);
  e.addEventListener("click", function () {
    body.style.background = e.className;
    if (
      body.style.background === "white" ||
      body.style.background === "yellow" ||
      body.style.background === "pink"
    ) {
      body.style.color = "#111";
    } else {
      body.style.color = "#fff";
    }
    // switch (e.className) {
    //   case "white":
    //     body.style.color = "#111";
    //     break;
    //   case "yellow":
    //     body.style.color = "#111";
    //     break;
    //   case "pink":
    //     body.style.color = "#111";
    //     break;
    //   default:
    //     body.style.color = "#fff";
    //     break;
    // }
  });
});
