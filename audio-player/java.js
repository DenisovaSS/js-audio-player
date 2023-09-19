const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const BtnBack = document.querySelector(".back");
const BtnNext = document.querySelector(".next");
const progress = document.querySelector("#progress");
const backAll = document.querySelector(".background");
const backCover = document.querySelector(".cover");
const singer = document.querySelector(".singer");
const titleSong = document.querySelector(".title_song");
let isPlay = false;
function playAudio() {
  if (!isPlay) {
    play();
    audio.currentTime = 0;
    isPlay = true;
  } else {
    isPlay = false;
    pause();
  }
}
function play() {
  audio.play();
  playBtn.src = "svg/pause.png";
}
function pause() {
  playBtn.src = "svg/play.png";
  audio.pause();
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
const singers = ["Akon", "BoyWithUke", "Aamir Khan"];
function PlaySong(song) {
  audio.src = `muz/${song}.mp3`;
  backAll.src = `img/img${playNum + 1}.jpg`;
  backCover.src = `img/img${playNum + 1}.jpg`;
  singer.textContent = singers[playNum];
  titleSong.textContent = song;
}
function playNext() {
  playNum++;
  if (playNum > songs.length - 1) {
    playNum = 0;
  }

  PlaySong(songs[playNum]);
  play();
  isPlay = true;
}
BtnNext.addEventListener("click", playNext);
function playPrev() {
  playNum--;
  if (playNum < 0) {
    playNum = songs.length - 1;
  }

  PlaySong(songs[playNum]);
  play();
  isPlay = true;
}
BtnBack.addEventListener("click", playPrev);
