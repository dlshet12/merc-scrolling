
var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 900, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid1 = document.getElementById('v1'); 

// dynamically set the page height according to video length
vid1.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid1.duration) * playbackConst + "px";
});

function scrollPlay() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;
  const frameNumber = scrollFraction * vid1.duration;
  
  if (!isNaN(frameNumber)) {
      vid1.currentTime = frameNumber;
  }

  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);






window.addEventListener('scroll', function() {
    const horseSection = document.getElementById('horseSection');
    const horseImage = document.getElementById('horseImage');
    const horseText = document.getElementById('horseText'); // Text to animate
    // Horse Section Animation
    const horseRect = horseSection.getBoundingClientRect();
    if (horseRect.top <= 0) {
        // Trigger zoom-out effect once the image reaches the top
        horseImage.style.transform = 'scale(0.9)';
        
        // Fade-up and reveal the text
        horseText.style.opacity = '1';
        horseText.style.transform = 'translate(-50%, -30%)'; // Move the text slightly up
    } else {
        // Reset scale and text opacity if it's not at the top yet
        horseImage.style.transform = 'scale(2)';
        horseText.style.opacity = '0';
        horseText.style.transform = 'translate(-50%, -50%)'; // Reset position
    }


})