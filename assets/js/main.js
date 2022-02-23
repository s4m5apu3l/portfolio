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

console.log('true');

// animation scroll

const anime = document.querySelectorAll('.animation');

if (anime.length > 0) {
  window.addEventListener('scroll', animeScroll);

  function animeScroll() {
  for (let index = 0; index < anime.length; index++) {
    const animeItem = anime[index];
    const animeItemHeight = animeItem.offsetHeight;
    const animeItemOffset = offset(animeItem).top;
    const animeStart = 4;

    let animePoint = window.innerHeight - animeItemHeight / animeStart;

      if(animeItemHeight  > window.innerHeight) {
        animePoint = window.innerHeight - window.innerHeight / animeStart;
      }

      if((pageYOffset > animeItemOffset - animePoint) && pageYOffset < (animeItemOffset + animeItemHeight)) {
        animeItem.classList.add('active');

      } else {
        if(!animeItem.classList.contains('anime-no-hide')) {
          animeItem.classList.remove('active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animeScroll();
}