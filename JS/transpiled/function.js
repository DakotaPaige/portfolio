$(document).ready(function () {
  //add class to make header transparent on load
  $('nav').addClass('banner-header');

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
      values: [{ x: 100, y: 0 }, { x: 300, y: 10 }]
    },
    leave: {
      autoRotate: true,
      values: [{ x: 500, y: 10 }, { x: 600, y: 0
        // {x: $(window).width() + 300,  y: -100}
      }]
    }
  };

  //init scrollmagic controller
  var controller = new ScrollMagic.Controller();

  //create tween for scrollmagic
  var tween = new TimelineMax().add(TweenMax.to($('#cat'), 1.2, { css: { bezier: catpath.entry }, ease: Power1.easeInOut })).add(TweenMax.to($('#cat'), 1.2, { css: { bezier: catpath.leave }, ease: Power1.easeInOut }));

  //build scene for scrollmagic
  var scene = new ScrollMagic.Scene({ triggerElement: '#trigger', duration: 500 }).setPin('#target').setTween(tween)
  // .addIndicators({name: "2 (duration: 300"})
  .addTo(controller);
});