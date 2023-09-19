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
const currentTimeSong = document.querySelector(".currentTime");
const lengthSong = document.querySelector(".lengthSong");
const songs = ["I wanna love you", "understand", "Malang"];
const singers = ["Akon", "BoyWithUke", "Aamir Khan"];
let playNum = 0;
let isPlay = false;
//
// start audio
audio.addEventListener(
  "loadeddata",
  //onloadedmetadata
  () => {
    lengthSong.textContent = getTime(audio.duration);
    progress.max = audio.duration;
    progress.value = audio.currentTime;
  },
  false,
);
function getTime(num) {
  //128
  let seconds = parseInt(num);
  let minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}
if (!isPlay) {
  setInterval(() => {
    progress.value = audio.currentTime;
    currentTimeSong.textContent = getTime(audio.currentTime);
  }, 500);
}
function playAudioForPlayBtn() {
  if (!isPlay) {
    play();
    // audio.currentTime = 0;
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
playBtn.addEventListener("click", playAudioForPlayBtn);

//buttons next and back
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

//count progress
function updateProgress() {
  play();
  audio.currentTime = progress.value;
}
progress.addEventListener("change", updateProgress);
// console.dir(audio);
