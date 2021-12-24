let mySlider

function mobileSlider() {
  if (window.innerWidth <= 575) {
    $('.footer-top__list', 'footer').addClass('swiper-wrapper');
    $('.footer-top__nav', 'footer').addClass('swiper-container');
    $('.footer-top__item', 'footer').each(function(){
      $(this).addClass('swiper-slide');
    });

    $('.mobile-slider__button').each(function(){
      $(this).css('display', 'block');
    });

    mySlider = new Swiper('.footer-top__nav', {
      spaceBetween: 20,
      slidesPerView: 'auto',
      freeMode: true,
      loop: true,
      observer: true,
      navigation: {
        nextEl: '.mobile-slider__next',
        prevEl: '.mobile-slider__prev',
      },
    });

  }

  if (window.innerWidth > 575) {
    if ($('.footer-top__nav', 'footer').hasClass('swiper-container-initialized')) {
      mySlider.destroy();
      $('.footer-top__list', 'footer').removeClass('swiper-wrapper');
      $('.footer-top__nav', 'footer').removeClass('swiper-container');
      $('.footer-top__item', 'footer').each(function(){
        $(this).removeClass('swiper-slide');
      });
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});



// addFooterSlider()

// function addFooterSlider(){

// }

// function removeFooterSlider(){
//   $('.footer-top__list', 'footer').removeClass('swiper-wrapper');
//   $('.footer-top__nav', 'footer').removeClass('swiper-container');
//   $('.footer-top__item', 'footer').each(function(){
//     $(this).removeClass('swiper-slide');
//   });


// }

//   if (document.documentElement.clientWidth <= 575 ) {
//     addFooterSlider();






//   } else {
//     removeFooterSlider()
//   }



if (document.getElementById('modal')) {
  lightGallery(document.getElementById('modal'), {
    controls: 0,
    showinfo: 0,
    rel: 0
  });
}

if (document.querySelector('.works-sec')) {
  let footerNav = document.querySelector('.footer-top__nav').style.visibility = 'hidden';
  $('.mobile-slider__button').each(function(){
    $(this).css('display', 'none');
  });
}

lightGallery(document.querySelector('[data-modal="fixed-video"]'), {
  controls: 0,
  showinfo: 0,
  rel: 0
});










let links = document.querySelectorAll('[data-anhor]');

let childSlider = new Swiper(".child-slider", {
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
  observer: true,
  pagination: {
    el: ".child-slider-pagination",
    clickable: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 'auto',
    },
  }
});

let worksSlider = new Swiper(".works-sec__slider", {
  spaceBetween: 20,
  slidesPerView: 2.2,
  slideToClickedSlide: true,
  loop: true,
  pagination: {
    el: ".works-sec__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".works-sec__next",
    prevEl: ".works-sec__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 14,
      centeredSlides: true,
      initialSlide: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  }
});


let bgSlider = new Swiper(".bg-slider", {
  spaceBetween: 0,
  slidesPerView: 1,
  watchSlidesProgress: true,
  fadeEffect: {
    crossFade: true
  },
  effect: "fade"
});


let usefulSlider = new Swiper(".useful-inner__slider", {
  spaceBetween: 0,
  slidesPerView: 1,
  history: false,
  pagination: {
    el: ".useful-box__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".useful-box__next",
    prevEl: ".useful-box__prev",
  },

  thumbs: {
    swiper: bgSlider,
  }

});


let indexSlider = new Swiper(".index-box", {
  spaceBetween: 0,
  slidesPerView: 1,
  history: false,
  hashNavigation: {
    replaceState: true,
    watchState: true,
  },
  pagination: {
    el: ".index-box__pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".index-section__next",
    prevEl: ".index-section__prev",
  },

  thumbs: {
    swiper: bgSlider,
  },
  on: {
    init: function () {
      let i = this.realIndex + 1
      if (i === 2) {
        $('.index-section').addClass('test')
      } else {
        $('.index-section').removeClass('test')
      }
      $('[data-anhor]').removeClass('active');
      $(`[data-anhor="${i}"]`).addClass('active');
    },
  },
  breakpoints: {
    320: {
      autoHeight: true,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 14,
      centeredSlides: true,
      initialSlide: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  }
});




indexSlider.on('slideChange', function (e) {
  let i = this.realIndex + 1

  if (i === 2) {
    $('.index-section').addClass('test')
  } else {
    $('.index-section').removeClass('test')
  }

  $('[data-anhor]').removeClass('active');
  $(`[data-anhor="${i}"]`).addClass('active');
});


if (! $('.index-box').length) {
  $('.main-nav__slider a').each(function () {
    let href = $(this).attr('href')
    let newHref = 'index.html' + href;
    $(this).attr('href', newHref);
  })
}

function initAjaxSlider() {
  let frameSlider = new Swiper(".frame-block__slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: ".frame-slider-nav__next",
      prevEl: ".frame-slider-nav__prev",
    },
    pagination: {
      el: ".frame-slider-nav__pagination",
      clickable: true,
    },
  });
}

function initFrameGalery() {
  let galeryBlocks = document.querySelectorAll('.frame-inner__galery');
  for (const galeryBlock of galeryBlocks) {
    lightGallery(galeryBlock)
  }
}


$('.works-sec__slide .works-descr__more').each(function(e){

  $(this).on('click', function(event){ //При клике по элементу с id=price выполнять...
    event.preventDefault();
    let data = $(this).closest('.works-sec__slide').attr('data-slide');

    $(`[data-show="${data}"`).addClass('active');
    $('body').addClass('fixed')

    $.ajax({
        url: 'works_frame.html', //Путь к файлу, который нужно подгрузить
        type: 'GET',
        beforeSend: function(){
            $(`[data-show="${data}"`).empty(); //Перед выполнением очищает содержимое блока с id=content
        },
        success: function(responce){
          $(`[data-show="${data}"`).append(responce); //Подгрузка внутрь блока с id=content
          initAjaxSlider();
          initFrameGalery();
        },
        complete: function(){
          $('.close').click(function(){
            $('.frame-wrapp').removeClass('active');
            $('body').removeClass('fixed')
          });
        }
    });
  });



});

$('.useful-inner__slide .frame-box__more').each(function(){
  $(this).on('click', function(){ //При клике по элементу с id=price выполнять...

    let data = $(this).closest('.useful-inner__slide').attr('data-slide');

    $(`[data-show="${data}"`).addClass('active');
    $('body').addClass('fixed')

    $.ajax({
        url: 'useful_frame.html', //Путь к файлу, который нужно подгрузить
        type: 'GET',
        beforeSend: function(){
            $(`[data-show="${data}"`).empty(); //Перед выполнением очищает содержимое блока с id=content
        },
        success: function(responce){
          $(`[data-show="${data}"`).append(responce); //Подгрузка внутрь блока с id=content
          initAjaxSlider();
          initFrameGalery();
        },
        complete: function(){
          $('.close').click(function(){
            $('.frame-wrapp').removeClass('active');
            $('body').removeClass('fixed')
          });
        }
    });
  });
});


$('.burger').click(function(){
  $(this).toggleClass('active');
  $(".mobile-wrapp").toggleClass('active');
  $('body').toggleClass('fixed');
});


$('.main-nav__item').click(function(){
  $('.burger').removeClass('active');
  $(".mobile-wrapp").removeClass('active');
  $('body').removeClass('fixed');
})

