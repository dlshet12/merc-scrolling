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

function scrollPlay() {
    var scrollPosition = window.pageYOffset;

    // Video 1 playback
    if (scrollPosition < vid0.duration * playbackConst) {
        vid0.currentTime = scrollPosition / playbackConst;
        vid0.style.opacity = 1;  // Fully show video 1
        vid1.style.opacity = 0;   // Hide video 2
    }

    // Video 2 playback
    if (scrollPosition >= vid0.duration * playbackConst) {
        vid1.currentTime = (scrollPosition - vid0.duration * playbackConst) / playbackConst;
        vid0.style.opacity = 1;  // Keep video 1 visible
        vid1.style.opacity = 1;   // Show video 2
    }

    // Adjust the opacity of the first video to create a parallax-like effect
    if (scrollPosition >= vid0.duration * playbackConst - 500) {
        let fadeAmount = (vid0.duration * playbackConst - scrollPosition) / 500; // Fade over 500 pixels
        vid0.style.opacity = fadeAmount < 0 ? 0 : fadeAmount; // Fade out as scrolling continues
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