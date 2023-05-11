const badgeEl = document.querySelector("header .badges");

const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 뱃지 숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });

      // 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });

      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((fadeEl, idx) => {
  gsap.to(fadeEl, 1, {
    delay: (idx + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
  autoplay: {
    delay: 5000,
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleEl = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleEl.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
