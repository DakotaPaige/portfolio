$(document).ready(function() {
  //add class to make header transparent on load
  $('nav').addClass('banner-header');

  $(window).scroll(function(){
    let currentScreenPosition  = $(document).scrollTop();
    if (currentScreenPosition < $('header').height()) {
      $( 'nav' ).addClass( 'banner-header' );
    } else {
      $( 'nav' ).removeClass( 'banner-header' );
    }
  });

  //defines the path for the cat to walk along
  let catpath = {
    entry : {
      autoRotate: true,
      values: [
        {x: 100,  y: 0},
        {x: 300,  y: 10}
      ]
    },
    leave : {
      autoRotate: true,
      values: [
        {x: 500,  y: 10},
        {x: 600,  y: 0}
        // {x: $(window).width() + 300,  y: -100}
      ]
    }
  };

  let images = [
    'images/cat1.png',
    'images/cat2.png',
    'images/cat3.png',
    'images/cat4.png',
    'images/cat2.png',
    'images/cat3.png',
    'images/cat4.png'
  ];

  let obj = {curImg: 0};

  // create tween for image transition
  let tween2 = TweenMax.to(obj, 0.5, 
      {
        curImg: images.length - 1,
        roundProps: 'curImg',
        repeat: 3,
        immediateRender: false,
        ease: Linear.easeNone,
        onUpdate: function() {
          $('#cat').attr('src', images[obj.curImg]);
        }
      });

  // console.log(tween2);

  //create tween for movement for scrollmagic
  let tween = new TimelineMax()
    .add(TweenMax.to($('#cat'), 1.2,{css:{bezier:catpath.entry}, ease:Power1.easeInOut}))
    .add(TweenMax.to($('#cat'), 1.2,{css:{bezier:catpath.leave}, ease:Power1.easeInOut}));

  //init scrollmagic controller
  let controller = new ScrollMagic.Controller();

  //build scene for scrollmagic
  let scene = new ScrollMagic.Scene({triggerElement:'#trigger', duration: 400})
                  .setPin('#target')
                  .setTween(tween)
                  // .addIndicators({name: "2 (duration: 300"})
                  .addTo(controller);
  
  let scene2 = new ScrollMagic.Scene({triggerElement: '#trigger', duration: 400, offset: 50})
                   .setTween(tween2)
                   .addTo(controller);   
  
})