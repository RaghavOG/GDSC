gsap.registerPlugin(ScrollTrigger);

// Cursor animation
const cursor = document.querySelector('.cursor');
document.body.style.cursor = 'none';

document.body.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
        x: event.x - cursor.offsetWidth / 2,
        y: event.y - cursor.offsetHeight / 2,
        duration: 0.1
    });
});

// Adjust cursor z-index on form focus

// Temporarily disable cursor for form elements
document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('focus', () => {
        cursor.style.display = 'none'; // Hide cursor
    });

    element.addEventListener('blur', () => {
        cursor.style.display = 'block'; // Show cursor
    });
});


// Curtain animations
let tl = gsap.timeline();

tl.fromTo(
    '.curtain-1 h1',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.1, ease: "power2.out" }
)
.to(
    '.curtain-1',
    { y: "-100%", duration: 0.1, ease: "power2.inOut" },
    "+=0.7" 
)
.fromTo(
    '.curtain-2 h1',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
)
.to(
    '.curtain-2',
    { y: "-100%", duration: 0.1, ease: "power2.inOut" },
    "+=1" 
)
.add(() => {
    document.querySelectorAll('.curtain').forEach(curtain => curtain.style.display = 'none');
    document.body.style.overflow = 'auto';
    document.body.style.cursor = 'auto';
});

// GSAP animation for navbar items
gsap.from(".nav-link", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// GSAP animations on scroll

// Hero Section
gsap.from('.about-1', {

  opacity: 0,
  scale: 0,
  y: 50,
  duration: 1
});

gsap.from('.about-2', {
  scrollTrigger: {
    trigger: '.about-2',
    start: 'top 80%',
    end: 'bottom top',
    scrub: true
  },
  
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from('.about-3', {
  scrollTrigger: {
    trigger: '.about-3',
    start: 'top 80%',
    end: 'bottom top',
    scrub: true
  },
  opacity: 0,
  
  y: 50,
  duration: 1
});

// Past Events Section
gsap.from('.past-events-full h1', {
  scrollTrigger: {
    trigger: '.past-events-full h1',
    start: 'top 80%',
    end: 'bottom top',
    scrub: true
  },
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from('.events', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });

// Organisers Section
gsap.from('.organisers h1', {
  scrollTrigger: {
    trigger: '.organisers h1',
    start: 'top 80%',
    end: 'bottom top',
    scrub: true
  },
  opacity: 0,
  y: 50,
  duration: 1
});

// Organisers Section - animate all at once
gsap.from('.profile', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });
  