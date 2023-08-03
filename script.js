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
    if (isFirstScroll) {
      scrollToIntro();
      isFirstScroll = false;
    }
  });
