const btn = document.querySelector("#start");
const audio = document.querySelector("#pig-song");
const pig = document.querySelector(".one-circle-pig");

let canPlaySong = false;
let isStarted = false;

function start() {
  if (canPlaySong) {
    hideBtn();
    showRestartBtn();
    audio.play();
    pig.style.display = "flex";
  } else {
    console.log("Loading song...");
    btn.innerText = "Loading song 🐖...";
    isStarted = true;
  }
}

btn.addEventListener("click", start);

audio.addEventListener("canplaythrough", (e) => {
  canPlaySong = true;
  if (isStarted) {
    start();
  }
});

function restart() {
  console.log("restarting...");
  hideBtn();
  showRestartBtn();
  pig.style.display = "none";
  setTimeout(() => {
    pig.style.display = "flex";
    audio.play();
  }, 1000);
}

function showRestartBtn() {
  setTimeout(() => {
    btn.addEventListener("click", restart);
    btn.style.display = "inline-block";
    btn.style.marginTop = "3rem";
    btn.innerText = "Restart 🐷";
  }, 16100);
}

function hideBtn() {
  btn.style.display = "none";
}
