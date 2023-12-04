/*  MUSIC PLAYER  */
let currentTrack = 0;
let isPlaying = false;

// get audio files and create track indicator items
const songList = document.querySelectorAll("audio");
songList.forEach((song) => {
  const trackIndicator = document.getElementById("track-indicator");

  trackIndicator.innerHTML += "<div class='track-indicator-item'></div>";

  // autoplay next song, and stop if last
  song.addEventListener("ended", () => {
    if (currentTrack === songList.length - 1) {
      songList[currentTrack].currentTime = 0;

      isPlaying = false;
      changePlayBtnStyle();
    } else {
      playerControl("next");
    }
  });
});

const trackIndicatorItems = document.querySelectorAll(".track-indicator-item");
highlightIndicator();

const totalTime = document.getElementById("total-time");

setTimeout(insertTrackInfo(), 100);

// gets control buttons in DOM and sets a listener for clicks
const playerControlBtns = document.querySelectorAll("[data-job]");

playerControlBtns.forEach((button) => {
  button.addEventListener("click", () => {
    let job = button.dataset.job;

    playerControl(job);
  });
});

function playerControl(job) {
  let canChange;

  switch (job) {
    case "previous":
      canChange = checkMusicEnds(job);

      if (canChange) {
        songList[currentTrack].pause();
        songList[currentTrack].currentTime = 0;

        currentTrack--;

        if (isPlaying) {
          songList[currentTrack].play();
        }
      }

      changeBtnStyles();
      highlightIndicator();
      insertTrackInfo();

      break;

    case "next":
      canChange = checkMusicEnds(job);

      if (canChange) {
        songList[currentTrack].pause();
        songList[currentTrack].currentTime = 0;

        currentTrack++;

        if (isPlaying) {
          songList[currentTrack].play();
        }
      }

      changeBtnStyles();
      highlightIndicator();
      insertTrackInfo();

      break;

    default:
      if (isPlaying === false) {
        songList[currentTrack].play();

        isPlaying = true;
      } else {
        songList[currentTrack].pause();

        isPlaying = false;
      }

      changePlayBtnStyle();
  }
}

// convert song lengths in seconds to minutes and seconds: 0:00
function convertToMinutesAndSeconds(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  let fixedSec = String("0" + seconds).slice(-2);

  return `${minutes}:${fixedSec}`;
}

// insert track's duration in element
function insertTrackInfo() {
  totalTime.innerHTML = convertToMinutesAndSeconds(songList[currentTrack].duration);
}

// check if user reached the last or first songs in list
function checkMusicEnds(direction) {
  if (direction === "previous") {
    if (currentTrack <= 0) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "next") {
    if (currentTrack >= songList.length - 1) {
      return false;
    } else {
      return true;
    }
  }
}

// highlight current track's position indicator
function highlightIndicator() {
  for (i = 0; i < songList.length; i++) {
    trackIndicatorItems[i].style.backgroundColor = "var(--sand)";
    if (i === currentTrack) {
      trackIndicatorItems[currentTrack].style.backgroundColor = "var(--old-orange)";
    }
  }
}

// change buttons bg color based on track position
function changeBtnStyles() {
  if (currentTrack === 0) {
    playerControlBtns[0].style.backgroundColor = "var(--sand-shadow)";
    playerControlBtns[2].style.backgroundColor = "var(--sand)";
  } else if (currentTrack === songList.length - 1) {
    playerControlBtns[0].style.backgroundColor = "var(--sand)";
    playerControlBtns[2].style.backgroundColor = "var(--sand-shadow)";
  } else {
    playerControlBtns[0].style.backgroundColor = "var(--sand)";
    playerControlBtns[2].style.backgroundColor = "var(--sand)";
  }
}

function changePlayBtnStyle() {
  if (isPlaying) {
    playerControlBtns[1].style.backgroundColor = "var(--old-orange)";
  } else {
    playerControlBtns[1].style.backgroundColor = "var(--sand)";
  }
}
