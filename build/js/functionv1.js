'use strict';
$(document).ready(function() {
  $('nav').addClass('banner-header'),
    $('.main-carousel').flickity({ cellAlign: 'center', resize: !0 }),
    AOS.init(),
    $('#main-menu-toggle').on('click', function() {
      $('.main-menu').toggleClass('menu-expanded'),
        $('#main-area-mobile').addClass('main-area-mobile');
    }),
    $('#main-menu-close').on('click', function() {
      $('.main-menu').removeClass('menu-expanded'),
        $('#main-area-mobile').removeClass('main-area-mobile');
    }),
    $('#main-menu a').on('click', function() {
      $('.main-menu').removeClass('menu-expanded'),
        $('#main-area-mobile').removeClass('main-area-mobile');
    }),
    $('#main-area-mobile').on('click', function() {
      $('.main-menu').removeClass('menu-expanded'),
        $('#main-area-mobile').removeClass('main-area-mobile');
    }),
    $(window).scroll(function() {
      $(document).scrollTop() < $('header').height()
        ? ($('nav').addClass('banner-header'),
          $('.menu-toggle').removeClass('menu-toggle-dark'))
        : ($('nav').removeClass('banner-header'),
          $('.menu-toggle').addClass('menu-toggle-dark'));
    });
  var a = {
      entry: { autoRotate: !0, values: [{ x: 100, y: 0 }, { x: 300, y: 0 }] },
      leave: { autoRotate: !1, values: [{ x: 350, y: 0 }, { x: 350, y: 0 }] }
    },
    e = [
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat1.png',
      'images/cats/cat2.png',
      'images/cats/cat3.png',
      'images/cats/cat4.png',
      'images/cats/cat5.png',
      'images/cats/cat6.png',
      'images/cats/cat7.png',
      'images/cats/cat8.png',
      'images/cats/cat9.png',
      'images/cats/cat10.png',
      'images/cats/cat11.png',
      'images/cats/cat12.png',
      'images/cats/cat13.png',
      'images/cats/cat14.png',
      'images/cats/cat15.png',
      'images/cats/cat16.png',
      'images/cats/cat17.png',
      'images/cats/cat18.png',
      'images/cats/cat19.png',
      'images/cats/cat20.png',
      'images/cats/cat21.png',
      'images/cats/cat22.png',
      'images/cats/cat23.png',
      'images/cats/cat24.png',
      'images/cats/cat25.png',
      'images/cats/cat26.png',
      'images/cats/cat27.png',
      'images/cats/cat28.png',
      'images/cats/cat29.png',
      'images/cats/cat30.png',
      'images/cats/cat31.png',
      'images/cats/cat32.png',
      'images/cats/cat33.png',
      'images/cats/cat34.png',
      'images/cats/cat35.png',
      'images/cats/cat36.png',
      'images/cats/cat37.png',
      'images/cats/cat38.png',
      'images/cats/cat39.png',
      'images/cats/cat40.png',
      'images/cats/cat41.png'
    ],
    t = { curImg: 0 },
    s = TweenMax.to(t, 0.1, {
      curImg: e.length - 1,
      roundProps: 'curImg',
      repeat: 0,
      immediateRender: !0,
      ease: Linear.easeNone,
      onUpdate: function() {
        $('#cat').attr('src', e[t.curImg]);
      }
    }),
    c = new TimelineMax()
      .add(
        TweenMax.to($('#cat'), 1.2, {
          css: { bezier: a.entry },
          ease: Power1.easeInOut
        })
      )
      .add(
        TweenMax.to($('#cat'), 1.2, {
          css: { bezier: a.leave },
          ease: Power1.easeInOut
        })
      ),
    n = new ScrollMagic.Controller();
  new ScrollMagic.Scene({ triggerElement: '#trigger', duration: 300 })
    .setPin('#target')
    .setTween(c)
    .addTo(n),
    new ScrollMagic.Scene({ triggerElement: '#trigger', duration: 300 })
      .setTween(s)
      .addTo(n);
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(a) {
      if (
        location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        var e = $(this.hash);
        (e = e.length ? e : $('[name=' + this.hash.slice(1) + ']')).length &&
          (a.preventDefault(),
          $('html, body').animate(
            { scrollTop: e.offset().top - 50 },
            1e3,
            function() {}
          ));
      }
    });
});
