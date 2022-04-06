const drums = document.querySelectorAll(".drum");

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    const buttonText = drum.textContent;
    playBaraban(buttonText);
    animationButton(buttonText);
  });
});

document.addEventListener("keydown", (e) => {
  const keyBoard = e.key;
  playBaraban(keyBoard);
  animationButton(keyBoard);
});

function playBaraban(key) {
  switch (key) {
    case "w":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const bl = new Audio("./sounds/tom-1.mp3");
      bl.play();
      break;
    case "j":
      const br = new Audio("./sounds/tom-2.mp3");
      br.play();
      break;
    case "k":
      const bt = new Audio("./sounds/tom-3.mp3");
      bt.play();
      break;
    case "l":
      const bb = new Audio("./sounds/tom-4.mp3");
      bb.play();
      break;
  }
}

function animationButton(key) {
  const button = document.querySelector(`.${key}`);
  button.classList.add('pressed')
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 200);
}
