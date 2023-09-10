window.addEventListener('load', () => {
  // const loadingScreen = document.querySelector('.loading-screen');
  // loadingScreen.classList.add('hidden');
});
//electron reverse animation
const electronsIDs = [
    "electron-1", "electron-2", "electron-3", "electron-4", "electron-5", "electron-6",
    "electron-7", "electron-8", "electron-9", "electron-10", "electron-11", "electron-12",
    "electron-13", "electron-14"
  ];
  
  const WebIcon = document.getElementById("web-icon-white");
  WebIcon.addEventListener("animationend", reverseAnimations);
  
  function reverseAnimations() {
    electronsIDs.forEach((electronID) => {
      const electron = document.getElementById(electronID);
      electron.style.animation = "none";
      setTimeout(() => {
        electron.style.animation = electronID + '-animation 0.4s ease-in-out reverse';
      }, 1);
    });
  }

 //scroll trigger animations
 const scrollThreshold = 150;

 function scrollToIntro() {
   const introPage = document.querySelector("#introduction-page-container");
   gsap.to(window, {
     scrollTo: { y: introPage.offsetTop, offsetY: window.innerHeight - introPage.offsetHeight },
     duration: 0.5,
     ease: "power1.inOut",
   });
 }

 let isFirstScroll = true;
 window.addEventListener("scroll", () => {
   if (isFirstScroll && window.scrollY <= scrollThreshold && clicked === false && startPosition == true) {
     scrollToIntro();
     isFirstScroll = false;
   }
 });
//navigation scrolling
let clicked = false;
 document.querySelector('#about-nav').addEventListener('click', function (event) {
  event.preventDefault();
  clicked = true;
  const aboutSection = document.querySelector('#about-me');
  
  aboutSection.scrollIntoView({
      behavior: 'smooth'
  });

});

//technologies scrolling
const techContainer = document.getElementById('tech-container');
let isDragging = false;
let startX = 0;
let scrollX = 0;
const maxScroll = -5060;

techContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - scrollX;
    techContainer.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const mouseX = e.clientX;
    const distanceX = mouseX - startX;

    scrollX = Math.min(Math.max(distanceX, maxScroll), 0);
    techContainer.style.transform = `translateX(${scrollX}px)`;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;

    isDragging = false;
    techContainer.style.transition = 'transform 0.3s ease-in-out';
});

document.addEventListener('mouseleave', () => {
    if (!isDragging) return;

    isDragging = false;
    techContainer.style.transition = 'transform 0.3s ease-in-out'; 
});


//? for the mobile devices
const maxScrollMobile = 0;
techContainer.addEventListener('touchstart', handleDragStart, { passive: true });
document.addEventListener('touchmove', handleDragMove, { passive: false });
document.addEventListener('touchend', handleDragEnd);
document.addEventListener('touchcancel', handleDragEnd);

function handleDragStart(e) {
    isDragging = true;
    startX = e.touches[0].clientX - scrollX;
    techContainer.style.transition = 'none';
}

function handleDragMove(e) {
    if (!isDragging) return;

    const mouseX = e.touches[0].clientX;
    const distanceX = mouseX - startX;

    scrollX = Math.min(distanceX, maxScrollMobile);
    techContainer.style.transform = `translateX(${scrollX}px)`;
}

function handleDragEnd() {
    if (!isDragging) return;

    isDragging = false;
    techContainer.style.transition = 'transform 0.3s ease-in-out';
}
 //to prevent scroll if the page is not at start on refresh
 let startPosition = true;
 function checkPosition(){
   if (window.scrollY > 0) {
     startPosition = false;
 }
 }
//technologies container animation
window.addEventListener('DOMContentLoaded', () => {
  techContainer.classList.add('active');
  checkPosition();
});

techContainer.addEventListener('click', () => {
    techContainer.classList.remove('active');
});
techContainer.addEventListener('touchstart', () => {
  techContainer.classList.remove('active');
});
