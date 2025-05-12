// ---------- video play and pause ------------------ //

const video = document.querySelector(".video-element")
const playButton = document.getElementById("play-button")

// Set initial play icon
playButton.innerHTML = '<img src="assets/video/play.svg" alt="Play" class="play-toggle-icon">'

function togglePlayPause() {
  if (video.paused) {
    video.play()
    playButton.innerHTML = '<img src="assets/video/pause.png" alt="Pause" class="play-toggle-icon">'
  } else {
    video.pause()
    playButton.innerHTML = '<img src="assets/video/play.svg" alt="Play" class="play-toggle-icon">'
  }
}

//------------------------- Testimonial -------------------//

const testimonials = document.querySelectorAll(".testimonial")
const dots = document.querySelectorAll(".dot")
let current = 0

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index)
    dots[i].classList.toggle("active-dot", i === index)
  })
  current = index
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showTestimonial(i))
})

setInterval(() => {
  const next = (current + 1) % testimonials.length
  showTestimonial(next)
}, 5000)

//------------------------- Contact Modal -------------------//
const contactForm = document.getElementById("contactForm")
const modal = document.getElementById("successModal")
const closeBtn = document.querySelector(".close-btn")
const body = document.body

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (contactForm.checkValidity()) {
    modal.style.display = "block"
    body.style.overflow = "hidden" // Disable body scroll
    contactForm.reset() // clear form after showing modal
  }
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
  body.style.overflow = "" // Enable body scroll again
})

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none"
    body.style.overflow = "" // Enable body scroll again
  }
})

// Handle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-button");
  const menuLinks = mobileMenu.querySelectorAll("a");
  const menuOverlay = document.querySelector(".mobile-menu-overlay");
  const body = document.body;

  // Function to open mobile menu
  function openMenu() {
    hamburger.classList.add("open");
    mobileMenu.classList.add("open");
    body.style.overflow = "hidden"; // Prevent scrolling
    
    // Add staggered animation delay to menu items
    menuLinks.forEach((link, index) => {
      setTimeout(() => {
        link.parentElement.style.opacity = "1";
        link.parentElement.style.transform = "translateX(0)";
      }, 100 + (index * 50));
    });
  }
  
  // Function to close mobile menu
  function closeMenu() {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    body.style.overflow = ""; // Re-enable scrolling
    
    // Reset animations
    menuLinks.forEach(link => {
      link.parentElement.style.opacity = "0";
      link.parentElement.style.transform = "translateX(-20px)";
    });
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (mobileMenu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on close button click
  closeBtn.addEventListener("click", closeMenu);
  
  // Close menu when clicking on a link
  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  
  // Close menu when clicking on overlay
  menuOverlay.addEventListener("click", closeMenu);

  // Close menu on window resize (if desktop size)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  });
  
  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  });
});