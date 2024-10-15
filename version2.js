var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

function scrollPlay() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;
  const frameNumber = scrollFraction * vid.duration;
  
  if (!isNaN(frameNumber)) {
      vid.currentTime = frameNumber;
  }

  window.requestAnimationFrame(scrollPlay);
}
window.requestAnimationFrame(scrollPlay);

document.getElementById('navigateBtn').addEventListener('click', function() {
  window.location.href = './version3.html'; // Change to your desired HTML file
});

