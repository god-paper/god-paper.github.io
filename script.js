const text = "god-paper.github.io";
let index = 0;

function typeText() {
  const element = document.getElementById("text");
  element.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(typeText, 100);

