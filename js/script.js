$(function () {
  // Trigger
  $(".trigger").click(function () {
    $(".trigger").toggleClass("active");
    $(".gnb").toggleClass("active");

    // 메뉴 클릭하면 닫히게
    $(".gnb li a").click(function () {
      $(".trigger").removeClass("active");
      $(".gnb").removeClass("active");
    });
  });

  // Go-top
  $(".go-top").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600,
    );
  });

  // Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".header, .go-top").addClass("active");
    } else {
      $(".header, .go-top").removeClass("active");
    }
  });

  // slick
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
