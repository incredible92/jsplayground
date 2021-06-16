const body = document.querySelector("body");
const button = document.querySelector("playbutton");

const colorArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  99,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
button.addEventListener("click", changeColor);

function changeColor() {
  let hexeCode = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorArray.length);
    hexeCode += colorArray[random];
  }
  body.style.backgroundColor = hexeCode;
}
