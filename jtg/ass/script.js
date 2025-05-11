

// ---------- video play and pause ------------------ //
 
const video = document.querySelector('.video-element');
const playButton = document.getElementById('play-button');

// Set initial play icon
playButton.innerHTML = '<img src="assets/video/play.svg" alt="Play" class="play-toggle-icon">';

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playButton.innerHTML = '<img src="assets/video/pause.png" alt="Pause" class="play-toggle-icon">';
  } else {
    video.pause();
    playButton.innerHTML = '<img src="assets/video/play.svg" alt="Play" class="play-toggle-icon">';
  }
}


//------------------------- Testimonial -------------------//


const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active-dot', i === index);
  });
  current = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showTestimonial(i));
});

setInterval(() => {
  const next = (current + 1) % testimonials.length;
  showTestimonial(next);
}, 5000);



//------------------------- Contact Modal -------------------//
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('successModal');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (contactForm.checkValidity()) {
    modal.style.display = 'block';
    body.style.overflow = 'hidden';  // Disable body scroll
    contactForm.reset(); // clear form after showing modal
  }
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  body.style.overflow = '';  // Enable body scroll again
});

window.addEventListener('click', function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    body.style.overflow = '';  // Enable body scroll again
  }
});