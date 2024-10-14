var playbackConst = 500, 
    setHeight = document.getElementById("set-height"), 
    vid0 = document.getElementById('v0'),
    vid1 = document.getElementById('v1');
    horseContainer = document.getElementById('horse-container'),
    horseImage = document.getElementById('horse'),
    finalImageContainer = document.getElementById('final-image-container');

// Dynamically set the page height based on both videos' duration
vid0.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid0.duration + vid1.duration) * playbackConst + "px";
});


// Function to interpolate values for smooth transitions
function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

let lastScrollPosition = 0;
let currentScrollPosition = 0;



function scrollPlay() {
  currentScrollPosition += (window.pageYOffset - currentScrollPosition) * 0.1; // Smoother scroll interpolation

  // Video 1 playback
  if (currentScrollPosition < vid0.duration * playbackConst) {
      vid0.currentTime = currentScrollPosition / playbackConst;
      vid0.style.opacity = 1;
      vid1.style.opacity = 0;
  }

  // Video 2 playback
  if (currentScrollPosition >= vid0.duration * playbackConst) {
      vid1.currentTime = (currentScrollPosition - vid0.duration * playbackConst) / playbackConst;
      vid0.style.opacity = 1;
      vid1.style.opacity = 1;
  }

  // Smooth fade-out effect for Video 1
  if (currentScrollPosition >= vid0.duration * playbackConst - 500) {
      let fadeAmount = (vid0.duration * playbackConst - currentScrollPosition) / 500;
      vid0.style.opacity = fadeAmount < 0 ? 0 : fadeAmount; // Fade out smoothly
  }

  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);


document.getElementById('navigateBtn').addEventListener('click', function() {
    window.location.href = './version3.html'; // Change to your desired HTML file
  });


