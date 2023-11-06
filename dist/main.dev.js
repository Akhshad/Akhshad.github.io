"use strict";

//loading screen
setTimeout(function () {
  var loadingScreen = document.querySelector('.loading-screen');
  gsap.to(loadingScreen, {
    scale: 1000
  });
  gsap.from(loadingScreen, {
    scale: 0,
    duration: 1,
    onComplete: function onComplete() {
      loadingScreen.style.display = 'none';
      console.log('Loading animation complete!');
    }
  });
}, 4000); //loading bar

var loadingBar = document.querySelector('.loading-bar');
var percentageLabel = document.querySelector('.percentage-label');
gsap.to(loadingBar, {
  duration: 4,
  width: '100%',
  onUpdate: function onUpdate() {
    // Update the percentage label based on loading bar width
    var progress = gsap.getProperty(loadingBar, 'width') / loadingBar.parentNode.offsetWidth * 100;
    percentageLabel.textContent = Math.round(progress) + '%';
  },
  onComplete: function onComplete() {
    percentageLabel.textContent = '100%';
  },
  ease: 'linear',
  repeat: -1
}); //bounce animation for .bw

var bouncyElement = document.querySelector('.bw');
gsap.set(bouncyElement, {
  y: -500
}); // Set initial position above the screen

gsap.to(bouncyElement, {
  duration: 1,
  y: 0,
  delay: 4.4,
  // Bounce back to original position
  ease: 'bounce.out',
  // Use the bounce easing for a realistic bounce effect
  onComplete: function onComplete() {
    // Animation completed callback
    console.log('Bounce animation complete!');
  }
}); //for frontemd wonders

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.righttt',
    start: '-70% center',
    end: '50% center',
    scrub: true,
    markers: false,
    toggleActions: 'play reverse play complete'
  }
});
tl.from('.righttt', {
  x: 800
}); // typed.js

var typed = new Typed('#element', {
  strings: ['front-end developer', '&amp; a graphic designer.'],
  typeSpeed: 50,
  startDelay: 5000,
  loop: true
}); //Testimonials-h7
// Target the fade-in element

var fadeElement = document.querySelector('h7'); // Create a timeline for the animation

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: fadeElement,
    start: 'top 80%' // Adjust this value based on when you want the animation to start

  }
}); // Define the animation

tl2.to(fadeElement, {
  opacity: 1,
  duration: 3
}); //section2

var fadeElement1 = document.querySelector('.section2');
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: fadeElement1,
    start: 'top 80%'
  }
});
tl3.to(fadeElement1, {
  opacity: 1,
  duration: 5
}); //.info

var fadeElement2 = document.querySelector('.info');
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: fadeElement2,
    start: 'top 80%'
  }
});
tl4.to(fadeElement2, {
  opacity: 1,
  duration: 3
}); //for testimonials

gsap.registerPlugin(ScrollTrigger); // Define the scroll trigger animation

gsap.from('.lf', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.lf',
    start: 'top 80%',
    // Adjust the starting point
    end: 'bottom 20%',
    // Adjust the ending point
    markers: 'false',
    toggleActions: 'play reverse play reset' // Adjust actions on scroll

  }
});
gsap.from('.rt', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.rt',
    start: 'top 80%',
    // Adjust the starting point
    end: 'bottom 20%',
    // Adjust the ending point
    markers: 'false',
    toggleActions: 'play reverse play reset'
  }
});
gsap.from('.gr', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.gr',
    start: 'top 80%',
    // Adjust the starting point
    end: 'bottom 20%',
    // Adjust the ending point
    markers: 'false',
    toggleActions: 'play reverse play reset'
  }
});
gsap.from('.ux', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.ux',
    start: 'top 80%',
    // Adjust the starting point
    end: 'bottom 20%',
    // Adjust the ending point
    markers: 'false',
    toggleActions: 'play reverse play reset'
  }
});