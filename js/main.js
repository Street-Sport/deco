$(function(){

  // БУРГЕР ВЕРХНЕГО МЕНЮ
  $('.header__btn-menu').on('click', function (event) {
    event.preventDefault();
    $('.nav').toggleClass('active');
  })
  // БУРГЕР МЕНЮ ДЛЯ ССЫЛОК
  $('.header__btn-social').on('click', function (event) {
    event.preventDefault();
    $('.header__social-ul').toggleClass('active');
  })

  // САЙДБАР
  $('.sidebar-toggle').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('active');
  })

  
  /*  Toggle header search
/* ------------------------------------ */
  $('#search').on('click', function (event) {
    event.preventDefault
    $('#search').toggleClass('active');
    $('.search-expand').slideToggle(250);
    setTimeout(function () {
      $('.search-expand input').focus();
    }, 300);
  });

  // SLICK SLIDER
  $('.slider__inner').slick({
    arrows: true,
    dots: true,
    autoplay: 2000,
  


    // СВОЙ КЛАСС ТОЧЕК (dots)
    dotsClass: 'header-dots',


    // СВОИ СТРЕЛКИ (arows)
    prevArrow:
      '<button type="button" class="slick-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"></button>',

  });

  $('.widget__slider').slick({
    arrows: true,

    // СВОИ СТРЕЛКИ (arows)
    prevArrow:
      '<button type="button" class="slick-prev slick-prev--wi"></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-next--wi"></button>',

  });

  $('.recomend-post__slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,

    prevArrow:
      '<button type="button" class="r__btn--pre"></button>',
    nextArrow:
      '<button type="button" class="r__btn--next"></button>',
    
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
  

  // Решение проблемы "object fit" для экплоера! 
  $('.slider__pic').each(function () {           // Note: {.post-thumb img} is css selector of the image tag
    var t = $(this),
      s = 'url(' + t.attr('src') + ')',
      p = t.parent(),
      d = $('<div></div>');
    t.hide();
    p.append(d);
    d.css({
      'height': 580,          // Note: You can change it for your needs
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position': 'top',
      'background-image': s
    });
  });

 
});
