'use strict';

$(document).ready(function () {
  //add class to make header transparent on load
  $('nav').addClass('banner-header');

  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    resize: true
  });

  AOS.init();

  $(window).scroll(function () {
    var currentScreenPosition = $(document).scrollTop();
    if (currentScreenPosition < $('header').height()) {
      $('nav').addClass('banner-header');
    } else {
      $('nav').removeClass('banner-header');
    }
  });

  //defines the path for the cat to walk along
  var catpath = {
    entry: {
      autoRotate: true,
      values: [{ x: 100, y: 0 }, { x: 300, y: 0 }]
    },
    leave: {
      autoRotate: false,
      values: [{ x: 350, y: 0 }, { x: 350, y: 0
        // {x: $(window).width() + 300,  y: -100}
      }]
    }
  };

  var images = ['images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat1.png', 'images/cats/cat2.png', 'images/cats/cat3.png', 'images/cats/cat4.png', 'images/cats/cat5.png', 'images/cats/cat6.png', 'images/cats/cat7.png', 'images/cats/cat8.png', 'images/cats/cat9.png', 'images/cats/cat10.png', 'images/cats/cat11.png', 'images/cats/cat12.png', 'images/cats/cat13.png', 'images/cats/cat14.png', 'images/cats/cat15.png', 'images/cats/cat16.png', 'images/cats/cat17.png', 'images/cats/cat18.png', 'images/cats/cat19.png', 'images/cats/cat20.png', 'images/cats/cat21.png', 'images/cats/cat22.png', 'images/cats/cat23.png', 'images/cats/cat24.png', 'images/cats/cat25.png', 'images/cats/cat26.png', 'images/cats/cat27.png', 'images/cats/cat28.png', 'images/cats/cat29.png', 'images/cats/cat30.png', 'images/cats/cat31.png', 'images/cats/cat32.png', 'images/cats/cat33.png', 'images/cats/cat34.png', 'images/cats/cat35.png', 'images/cats/cat36.png', 'images/cats/cat37.png', 'images/cats/cat38.png', 'images/cats/cat39.png', 'images/cats/cat40.png', 'images/cats/cat41.png'];

  var obj = { curImg: 0 };

  // create tween for image transition
  var tween2 = TweenMax.to(obj, 0.1, {
    curImg: images.length - 1,
    roundProps: 'curImg',
    repeat: 0,
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function onUpdate() {
      $('#cat').attr('src', images[obj.curImg]);
    }
  });

  // console.log(tween2);

  //create tween for movement for scrollmagic
  var tween = new TimelineMax().add(TweenMax.to($('#cat'), 1.2, {
    css: { bezier: catpath.entry },
    ease: Power1.easeInOut
  })).add(TweenMax.to($('#cat'), 1.2, {
    css: { bezier: catpath.leave },
    ease: Power1.easeInOut
  }));

  //init scrollmagic controller
  var controller = new ScrollMagic.Controller();

  //build scene for scrollmagic
  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
    duration: 300
  }).setPin('#target').setTween(tween)
  // .addIndicators({name: "2 (duration: 300"})
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#trigger',
    duration: 300
  }).setTween(tween2).addTo(controller);

  //smoothscroll
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000, function () {
          // Callback after animation
        });
      }
    }
  });
});