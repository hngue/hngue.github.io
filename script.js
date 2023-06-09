const galleryScroll = document.querySelector('.gallery-scroll');

// Calculate the total width of the gallery-scroll element
const galleryWidth = galleryScroll.scrollWidth;

// Set the animation duration based on the gallery width
const animationDuration = (galleryWidth / 100) * 5;

// Apply the animation duration to the CSS
galleryScroll.style.animationDuration = `${animationDuration}s`;

// Duplicate the gallery content
const galleryContent = galleryScroll.innerHTML;
galleryScroll.innerHTML += galleryContent;



// Header Gray Out
const navigation = document.querySelector('.navigation');
const navigationLinks = document.querySelectorAll('.navigation a');

navigation.addEventListener('mouseover', (event) => {
  const hoveredLink = event.target.closest('a');
  if (hoveredLink) {
    navigationLinks.forEach(link => {
      if (link !== hoveredLink) {
        link.classList.add('grayed-out');
      }
    });
  } else {
    navigationLinks.forEach(link => {
      link.classList.add('grayed-out');
    });
  }
});

navigation.addEventListener('mouseout', () => {
  navigationLinks.forEach(link => {
    link.classList.remove('grayed-out');
  });
});


// Pause the video when it's out of the viewport
window.addEventListener('scroll', function() {
    const video = document.querySelector('.background-video');
    const videoPosition = video.getBoundingClientRect().top;
  
    if (videoPosition > window.innerHeight || videoPosition < -video.clientHeight) {
      video.pause();
    } else {
      video.play();
    }
  });

  
// Get all tags
const tags = document.querySelectorAll('.tag');

// Attach click event listeners to tags
tags.forEach(tag => {
  tag.addEventListener('click', () => {
    const clickedTag = tag.getAttribute('data-tag');
    filterVideos(clickedTag);
  });
});

// Function to filter videos based on tag
function filterVideos(tag) {
  const videos = document.querySelectorAll('.video-box');

  videos.forEach(video => {
    const videoTags = video.getAttribute('data-tags').split(' ');
    const isVisible = videoTags.includes(tag) || tag === 'all';

    if (isVisible) {
      video.style.display = 'block';
    } else {
      video.style.display = 'none';
    }
  });
}
