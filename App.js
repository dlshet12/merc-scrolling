var playbackConst = 800, 
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


window.addEventListener('scroll', function() {
    const horseSection = document.getElementById('horseSection');
    const horseImage = document.getElementById('horseImage');
    const horseText = document.getElementById('horseText'); // Text to animate


    // Get the bounding box of the horse section
    const horseRect = horseSection.getBoundingClientRect();

    // Check if the top of the horse section is at or above the top of the viewport
    if (horseRect.top <= 0) {
        // Trigger zoom-out effect once the image reaches the top
        horseImage.style.transform = 'scale(0.7)'; 
        
        // Fade-up and reveal the text
        horseText.style.opacity = '1';
        horseText.style.transform = 'translate(-50%, -30%)'; // Move the text slightly up
    } else {
        // Reset scale if it's not at the top yet
        horseImage.style.transform = 'scale(1.3)';
        horseText.style.opacity = '0';
        horseText.style.transform = 'translate(-50%, -50%)'; // Reset position
    }
});





// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500, 
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"), 
//     // select video element         
//     vid = document.getElementById('v0'); 

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);