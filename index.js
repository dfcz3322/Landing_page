const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const topBannerSwiper = new Swiper('.top-banner__swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const sixthBannerSwiper = new Swiper('.sixth-banner__swiper', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: -170,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });