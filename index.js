const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
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
    },
  });