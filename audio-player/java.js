const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const progress = document.querySelector("#progress");
let isPlay = false;
function playAudio() {
  if (!isPlay) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    playBtn.src = "svg/pause.png";
  } else {
    audio.pause();
    isPlay = false;
    playBtn.src = "svg/play.png";
  }
}
playBtn.addEventListener("click", playAudio);
//change line
progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #3a3a24 0%, #d0d082 ${value}%, #fffffff7 ${value}%, #ffffff 100%)`;
});
//buttons next and back
let playNum = 0;
const songs = ["I wanna love you", "understand", "Malang"];
function playNext() {
  playNum++;
  playAudio();
}
function playPrev() {
  playNum--;
  playAudio();
}
