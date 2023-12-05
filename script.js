/*  MUSIC PLAYER  */
// define initial player states
let current = 0;
let isPlaying = false;

// get audio files, create track indicator items and event listeners for when songs end
const songs = document.querySelectorAll("audio");
const trackIndicator = document.getElementById("track-indicator");

songs.forEach((song) => {
  trackIndicator.innerHTML += "<div class='track-indicator-item'></div>";

  // autoplay next song, and stop playback if last
  song.addEventListener("ended", () => {
    if (current === songs.length - 1) {
      songs[current].currentTime = 0;

      isPlaying = false;
      changePlayBtnStyle();
    } else {
      playerControl("next");
    }
  });
});

// get all indicator items and highlight the first one
const trackIndicatorItems = document.querySelectorAll(".track-indicator-item");
highlightIndicator();

// insert current track's total length when page has fully loaded
const totalTime = document.getElementById("total-time");
addEventListener("load", insertTrackInfo());

// gets control buttons in DOM, sets a listener for clicks and gives task (job) for main function
const playerControlBtns = document.querySelectorAll("[data-job]");
playerControlBtns.forEach((button) => {
  button.addEventListener("click", () => {
    playerControl(button.dataset.job);
  });
});

//main function, deals with play, pause, and track skipping
function playerControl(job) {
  // canChange variable will be used to ask checkMusicEnds function if buttons should be disabled
  let canChange;

  switch (job) {
    case "previous":
      canChange = checkMusicEnds(job);

      if (canChange) {
        songs[current].pause();
        songs[current].currentTime = 0;

        current--;

        if (isPlaying) {
          songs[current].play();
        }
      }

      changeBtnStyles();
      highlightIndicator();
      insertTrackInfo();
      break;

    case "next":
      canChange = checkMusicEnds(job);

      if (canChange) {
        songs[current].pause();
        songs[current].currentTime = 0;

        current++;

        if (isPlaying) {
          songs[current].play();
        }
      }

      changeBtnStyles();
      highlightIndicator();
      insertTrackInfo();
      break;

    default:
      if (!isPlaying) {
        songs[current].play();
        isPlaying = true;
      } else {
        songs[current].pause();
        isPlaying = false;
      }

      changePlayBtnStyle();
  }
}

// insert track's duration in element
function insertTrackInfo() {
  totalTime.innerHTML = convertToMinutesAndSeconds(songs[current].duration);
}

// convert song lengths in seconds to minutes and seconds = 0:00
function convertToMinutesAndSeconds(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  // forces seconds to appear as two digits
  let fixedSec = String("0" + seconds).slice(-2);

  return `${minutes}:${fixedSec}`;
}

// highlight current track's position indicator
function highlightIndicator() {
  for (i = 0; i < songs.length; i++) {
    trackIndicatorItems[i].style.backgroundColor = "var(--sand)";
    if (i === current) {
      trackIndicatorItems[current].style.backgroundColor = "var(--old-orange)";
    }
  }
}

// check if user has reached the last or first songs in list
function checkMusicEnds(direction) {
  if (direction === "previous") {
    if (current <= 0) {
      return false;
    } else {
      return true;
    }
  } else if (direction === "next") {
    if (current >= songs.length - 1) {
      return false;
    } else {
      return true;
    }
  }
}

// change buttons background color based on track position
function changeBtnStyles() {
  if (current === 0) {
    playerControlBtns[0].style.backgroundColor = "var(--sand-shadow)";
    playerControlBtns[2].style.backgroundColor = "var(--sand)";
  } else if (current === songs.length - 1) {
    playerControlBtns[0].style.backgroundColor = "var(--sand)";
    playerControlBtns[2].style.backgroundColor = "var(--sand-shadow)";
  } else {
    playerControlBtns[0].style.backgroundColor = "var(--sand)";
    playerControlBtns[2].style.backgroundColor = "var(--sand)";
  }
}

// change play-pause button background color based on play state
function changePlayBtnStyle() {
  if (isPlaying) {
    playerControlBtns[1].style.backgroundColor = "var(--old-orange)";
  } else {
    playerControlBtns[1].style.backgroundColor = "var(--sand)";
  }
}
