// Load particles.js with its configuration file
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
// =============================================================================
// TECHSTACK ANIMATION
// =============================================================================

const techstackAnimation = anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 2000,
  delay: 1000
});

// =============================================================================
// MENU ICON ANIMATION
// =============================================================================
const menuIcon = document.querySelector('.menu-icon');

const menuAnimation = anime({
  targets: '.menu-icon',
  rotate: '180',
  duration: 3000,
  autoplay: false
})
menuIcon.addEventListener('mouseenter', () => {
  menuAnimation.restart(); // Start the animation on hover
});
menuIcon.addEventListener('mouseleave', () => {
  menuAnimation.pause(); // Pause the animation when mouse leaves
});
