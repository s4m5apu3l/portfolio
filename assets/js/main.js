const swiper = new Swiper(".my-swiper", {
  effect: "cube",
  // grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 70,
    shadowScale: 1.1,
  },

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

console.log('true')