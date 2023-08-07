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

 //scrolltrigger animations
 const scrollThreshold = 150; // Adjust this value as needed

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
   if (isFirstScroll && window.scrollY <= scrollThreshold && clicked === false) {
     scrollToIntro();
     isFirstScroll = false;
   }
 });

let clicked = false;
 document.querySelector('#about-nav').addEventListener('click', function (event) {
  event.preventDefault();
  clicked = true;
  const aboutSection = document.querySelector('#about-me');
  
  // Scroll to the section smoothly
  aboutSection.scrollIntoView({
      behavior: 'smooth'
  });

});

  //hiding the content after start
  const introPage = document.getElementById('introduction-page');
  const mouseContainer = document.getElementById('mouse-scroll-icon-container');
  const aboutPage = document.getElementById('about-me');

  window.addEventListener('load', function () {
    this.setTimeout(() => {
      introPage.style.display = 'flex'
      mouseContainer.style.display = 'flex'
      aboutPage.style.display = 'flex'
    }, 2500);
});
