// burger menu
const arrowSvgPath =
  '<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,16a2.993,2.993,0,0,1-1.987-.752c-.327-.291-.637-.574-.84-.777L6.3,11.647a1,1,0,0,1,1.4-1.426L10.58,13.05c.188.187.468.441.759.7a1,1,0,0,0,1.323,0c.29-.258.57-.512.752-.693L16.3,10.221a1,1,0,1,1,1.4,1.426l-2.879,2.829c-.2.2-.507.48-.833.769A2.99,2.99,0,0,1,12,16Z"></path>';
const xSvgPath =
  '<path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"></path> dom_i.js:13:11';
const burgerBtnSvg = document.getElementById("burger-menu-icon");
burgerBtnSvg.innerHTML = arrowSvgPath;

const burgerMenuBtn = document.getElementById("burger-menu-btn");
const burgerMenu = document.getElementById("burger-menu");

burgerMenuBtn.addEventListener("click", () => {
  if (burgerBtnSvg.innerHTML === xSvgPath) {
    burgerBtnSvg.innerHTML = arrowSvgPath;
    burgerMenu.style.display = "none";
  } else {
    burgerBtnSvg.innerHTML = xSvgPath;
    burgerMenu.style.display = "block";
  }
});

const showMusicPlayerBtn = document.getElementById("show-music-player");

showMusicPlayerBtn.addEventListener("click", () => {
  musicPlayer.style.bottom = "0px";
});

// music player

const playSvgPath =
  '<path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z"></path>';

const pauseSvgPath =
  '<path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z"></path><path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z"></path>';

const playPauseBtnSvg = document.getElementById("play-pause-btn-svg");

playPauseBtnSvg.innerHTML = playSvgPath;

let playingSong = 0;
let playing = false;

const previousBtnSvg = document.getElementById("previous");
const nextBtnSvg = document.getElementById("next");

const playPauseBtn = document.getElementById("play-pause-btn");

playPauseBtn.addEventListener("click", () => {
  if (playing === true) {
    playPauseBtnSvg.innerHTML = playSvgPath;

    songList[playingSong].pause();

    playing = false;
  } else {
    playPauseBtnSvg.innerHTML = pauseSvgPath;
    songList[playingSong].play();

    playing = true;
  }
});

const musicPlayer = document.getElementById("music-player");

const closeMusicPlayerBtn = document.getElementById("close-btn");

closeMusicPlayerBtn.addEventListener("click", () => {
  musicPlayer.style.bottom = "-70px";
});

checkEndStartOfPlaylist();

const songList = document.querySelectorAll("audio[data-song]");

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

previousBtn.addEventListener("click", () => {
  if (playingSong === 0) {
  } else {
    songList[playingSong].pause();
    playingSong--;

    if (playing === true) {
      songList[playingSong].play();
    }
  }

  checkEndStartOfPlaylist();
});

nextBtn.addEventListener("click", () => {
  if (playingSong === 3) {
  } else {
    songList[playingSong].pause();
    playingSong++;

    if (playing === true) {
      songList[playingSong].play();
    }
  }

  checkEndStartOfPlaylist();
});

function checkEndStartOfPlaylist() {
  if (playingSong === 0) {
    previousBtnSvg.style.fill = "var(--middle)";
  } else if (playingSong === 3) {
    nextBtnSvg.style.fill = "var(--middle)";
  } else {
    previousBtnSvg.style.fill = "var(--light)";
    nextBtnSvg.style.fill = "var(--light)";
  }
}
