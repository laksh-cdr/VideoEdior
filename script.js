let playBtn = document.getElementById("play");
let startBtn = document.getElementById("start");
let endBtn = document.getElementById("end");
let videoPlayer = document.getElementById("videoPreview");

// video progress
let videoProgressBar = document.getElementById("videoProgressBar");
let videoProgress = document.getElementById("videoProgress");

playBtn.addEventListener("click", function() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerText = "Stop";
  } else {
    videoPlayer.pause();
    playBtn.innerText = "Play";
  }
})

startBtn.addEventListener("click", function() {
  videoPlayer.currentTime = 0;
  videoProgress.style.width = 0;
})

endBtn.addEventListener("click", function() {
  videoPlayer.currentTime = videoPlayer.duration;
  videoProgress.style.width = "100%";
})

// video progress
videoPlayer.addEventListener("play", function() {
    setInterval(() => {
      if (!videoPlayer.paused) {
        let percent = (videoPlayer.currentTime / videoPlayer.duration) * 100
        videoProgress.style.width = `${percent}%`
      }
    }, 2)
})

videoProgressBar.addEventListener("click", (e) => {
  let mouseX = e.clientX;
  
})