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
});