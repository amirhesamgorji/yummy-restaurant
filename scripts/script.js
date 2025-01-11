document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  const navbarlinks = document.querySelectorAll(".navbar a");

  function navbarlinksActive() {
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      const section = document.querySelector(navbarlink.hash);
      if (!section) return;

      const position = window.scrollY + 200;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);

  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const xBtn = document.querySelector(".bi-x");
  const mobileNav = document.querySelector(".nav-mobile");
  const overlay = document.getElementById("overlay");
  const dropdownMobile = document.querySelector(".dropdown-mobile-toggle");
  const dropdownMobileList = document.querySelector(".dropdown-mobile-list");
  const deepDropdownMobile = document.querySelector(".deep-dropdown-mobile-toggle");
  const deepDropdownMobileList = document.querySelector(".deep-dropdown-mobile-list");

  function toggleMobileNav(isOpen) {
    mobileNav.classList.toggle("active", isOpen);
    overlay.classList.toggle("active", isOpen);
    mobileNavToggle.style.display = isOpen ? "none" : "block";
  }

  mobileNavToggle.addEventListener("click", () => toggleMobileNav(true));
  xBtn.addEventListener("click", () => toggleMobileNav(false));
  overlay.addEventListener("click", () => toggleMobileNav(false));

  function toggleDropdown(listElement, mxHeight) {
    const isOpen = listElement.style.maxHeight !== "0px";
    listElement.style.maxHeight = isOpen ? "0px" : `${mxHeight}px`;
  }

  dropdownMobile.addEventListener("click", () => toggleDropdown(dropdownMobileList, 400));
  deepDropdownMobile.addEventListener("click", () =>
    toggleDropdown(deepDropdownMobileList, 200)
  );

  new Swiper(".swiper-testimonials", {
    spaceBetween: 30,
    speed: 600,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".swiper-events", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 0.5,
      },
    },
  });

  new Swiper(".swiper-gallery", {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  GLightbox({
    selector: ".glightbox",
  });
  GLightbox({
    selector: ".glightbox2",

    plyr: {
      css: "https://cdn.plyr.io/3.5.6/plyr.css",
      js: "https://cdn.plyr.io/3.5.6/plyr.js",
      config: {
        ratio: "16:9",
        muted: false,
        hideControls: true,
      },
    },
  });
  GLightbox({
    selector: ".glightbox3",

    plyr: {
      css: "https://cdn.plyr.io/3.5.6/plyr.css",
      js: "https://cdn.plyr.io/3.5.6/plyr.js",
      config: {
        ratio: "16:9",
        muted: false,
        hideControls: true,
      },
    },
  });

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }

  window.addEventListener("load", () => {
    aos_init();
  });

  new PureCounter();

  const toTop = document.getElementById("gotop");
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      if (nav) nav.classList.add("shadow");
    } else {
      if (nav) nav.classList.remove("shadow");
    }

    if (window.scrollY > 450) {
      if (toTop) {
        toTop.classList.add("opacity-100");
        toTop.classList.remove("opacity-0");
      }
    } else {
      if (toTop) {
        toTop.classList.add("opacity-0");
        toTop.classList.remove("opacity-100");
      }
    }
  });

  // Scroll to top
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0 });
    });
  }
});
