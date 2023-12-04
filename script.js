/*  MUSIC PLAYER  */
const songList = document.querySelectorAll("audio");

const songs = {
  1: {
    name: "Drown",
    element: songList[0],
  },
  2: {
    name: "Motion In Emotional Hiatus",
    element: songList[1],
  },
  3: {
    name: "Caieira's Song",
    element: songList[2],
  },
  4: {
    name: "Windchime",
    element: songList[3],
  },
};

let currentTrack = 1;
let isPlaying = false;

// gets control buttons in DOM and sets a listener for clicks
const playerControlBtns = document.querySelectorAll("[data-job]");

playerControlBtns.forEach((button) => {
  button.addEventListener("click", () => {
    let job = button.dataset.job;

    playerControl(job);
  });

  button.addEventListener("ended", () => {
    console.log("Song has ended.");
  });
});

function playerControl(job) {
  switch (job) {
    case "previous":
      songs[currentTrack].element.pause();
      songs[currentTrack].element.currentTime = 0;

      currentTrack--;

      if (isPlaying === true) {
        songs[currentTrack].element.play();
      }
      break;

    case "next":
      songs[currentTrack].element.pause();
      songs[currentTrack].element.currentTime = 0;

      currentTrack++;

      if (isPlaying === true) {
        songs[currentTrack].element.play();
      }
      break;

    default:
      if (isPlaying === false) {
        songs[currentTrack].element.play();

        isPlaying = true;
      } else {
        songs[currentTrack].element.pause();

        isPlaying = false;
      }
  }
}
