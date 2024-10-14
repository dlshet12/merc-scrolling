// var playbackConst = 500, 
//     setHeight = document.getElementById("set-height"), 
//     vid0 = document.getElementById('v0'),
//     vid1 = document.getElementById('v1');
//     horseSection = document.getElementById('horseSection');

// // Dynamically set the page height based on both videos' duration
// vid0.addEventListener('loadedmetadata', function() {
//     setHeight.style.height = Math.floor(vid0.duration + vid1.duration) * playbackConst + "px";
// });


// // Function to interpolate values for smooth transitions
// function lerp(start, end, amount) {
//   return start + (end - start) * amount;
// }

// let lastScrollPosition = 0;
// let currentScrollPosition = 0;



// function scrollPlay() {
//   currentScrollPosition += (window.pageYOffset - currentScrollPosition) * 0.1; 

//   // Video 1 playback
//   if (currentScrollPosition < vid0.duration * playbackConst) {
//       vid0.currentTime = currentScrollPosition / playbackConst;
//       vid0.style.opacity = 1;
//       vid1.style.opacity = 0;
//   }

//   // Video 2 playback
//   if (currentScrollPosition >= vid0.duration * playbackConst) {
//       vid1.currentTime = (currentScrollPosition - vid0.duration * playbackConst) / playbackConst;
//       vid0.style.opacity = 1;
//       vid1.style.opacity = 1;
//          // Apply parallax effect on the second video
//          let parallaxScroll = (currentScrollPosition - vid0.duration * playbackConst) / 5; // Adjust the divisor for speed
//          vid1.style.transform = `translateY(${parallaxScroll}px)`; 
//   }

//   // Smooth fade-out effect for Video 1
//   if (currentScrollPosition >= vid0.duration * playbackConst - 500) {
//       let fadeAmount = (vid0.duration * playbackConst - currentScrollPosition) / 500;
//       vid0.style.opacity = fadeAmount < 0 ? 0 : fadeAmount; // Fade out smoothly
//   }


//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);


// window.addEventListener('scroll', function() {
//     const horseSection = document.getElementById('horseSection');
//     const horseImage = document.getElementById('horseImage');
//     const horseText = document.getElementById('horseText'); // Text to animate


//     // Get the bounding box of the horse section
//     const horseRect = horseSection.getBoundingClientRect();

//     // Check if the top of the horse section is at or above the top of the viewport
//     if (horseRect.top <= 0) {
//         // Trigger zoom-out effect once the image reaches the top
//         horseImage.style.transform = 'scale(0.7)'; 
        
//         // Fade-up and reveal the text
//         horseText.style.opacity = '1';
//         horseText.style.transform = 'translate(-50%, -30%)'; // Move the text slightly up
//     } else {
//         // Reset scale if it's not at the top yet
//         horseImage.style.transform = 'scale(1.3)';
//         horseText.style.opacity = '0';
//         horseText.style.transform = 'translate(-50%, -50%)'; // Reset position
//     }
// });



//   // Fade out effect for Video 2 and show horse section
//   if (currentScrollPosition >= (vid0.duration + vid1.duration) * playbackConst) {
 

//     let horseFadeInPoint = (vid0.duration + vid1.duration) * playbackConst + 100;
//     let fadeAmount = (currentScrollPosition - horseFadeInPoint) / 500;

//     horseSection.style.opacity = fadeAmount > 1 ? 1 : fadeAmount;
//     horseSection.style.transform = `scale(${lerp(1, 0.8, fadeAmount)})`; // Zoom-out effect on horse image
// }





// Variables for video and horse section
var playbackConst = 500,
    setHeight = document.getElementById("set-height"),
    vid0 = document.getElementById('v0'),
    vid1 = document.getElementById('v1'),
    horseSection = document.getElementById('horseSection'),
    horseImage = document.getElementById('horseImage'),
    horseText = document.getElementById('horseText');

// Set the page height based on both videos' duration
vid0.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid0.duration + vid1.duration + 10) * playbackConst + "px"; // Add extra space for the horse section
});

// Function to interpolate values for smooth transitions
function lerp(start, end, amount) {
    return start + (end - start) * amount;
}

let currentScrollPosition = 0;

function scrollPlay() {
    currentScrollPosition += (window.pageYOffset - currentScrollPosition) * 0.1; // Smooth scroll interpolation

    // Video 1 playback
    if (currentScrollPosition < vid0.duration * playbackConst) {
        vid0.currentTime = currentScrollPosition / playbackConst;
        vid0.style.opacity = 1;
        vid1.style.opacity = 0;
    }

    // Video 2 playback
    if (currentScrollPosition >= vid0.duration * playbackConst) {
        vid1.currentTime = (currentScrollPosition - vid0.duration * playbackConst) / playbackConst;
        vid0.style.opacity = 0;
        vid1.style.opacity = 1;
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
        horseImage.style.transform = 'scale(0.7)';
        
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