/* music player */
const songList = document.querySelectorAll("audio[data-song]");
const previousBtn = document.getElementById("previous-btn");
const previousBtnSvg = document.getElementById("previous");
const playPauseBtn = document.getElementById("play-pause-btn");
const playPauseBtnSvg = document.getElementById("play-pause-btn-svg");
const nextBtn = document.getElementById("next-btn");
const nextBtnSvg = document.getElementById("next");

// sets initial state of player
let playing = false;
let playingSong = 0;

// inserts icon in play button
const playSvgPath =
  '<path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z"></path>';
const pauseSvgPath =
  '<path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z"></path><path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z"></path>';

playPauseBtnSvg.innerHTML = playSvgPath;

// checks and disables previous track button
checkEndStartOfPlaylist();

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

previousBtn.addEventListener("click", () => {
  if (playingSong === 0) {
  } else {
    songList[playingSong].pause();
    songList[playingSong].currentTime = 0;
    playingSong--;

    setTimeout(() => {
      if (playing === true) {
        songList[playingSong].play();
      }
    }, 50);
  }

  checkEndStartOfPlaylist();
});

nextBtn.addEventListener("click", () => {
  if (playingSong === 3) {
  } else {
    songList[playingSong].pause();
    songList[playingSong].currentTime = 0;
    playingSong++;

    setTimeout(() => {
      if (playing === true) {
        songList[playingSong].play();
      }
    }, 50);
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

songList.forEach((element) => {
  element.addEventListener("ended", () => {
    if (playingSong === 3) {
      playPauseBtnSvg.innerHTML = playSvgPath;
    } else {
      songList[playingSong].currentTime = 0;
      playingSong++;

      setTimeout(() => {
        if (playing === true) {
          songList[playingSong].play();
        }
      }, 50);
    }
  });
});
