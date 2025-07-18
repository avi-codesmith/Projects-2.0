const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const body = document.querySelector("body");

const randomColor = () => {
  let color = "#";
  const hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    color += hex[random];
  }
  return color;
};

let changMe;

start.addEventListener("click", () => {
  if (!changMe) {
    changMe = setInterval(() => {
      const bgColor = randomColor();
      body.style.background = bgColor;
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(changMe);
  changMe = null;
});
