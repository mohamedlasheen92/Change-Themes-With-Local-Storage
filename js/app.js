$(document).ready(function () {
  console.log('Welcome Here');

  $(window).resize(function () { 
    // console.log($(window).innerWidth() + 200);
    if ($(window).innerWidth() > 767) {
      $('body').css('padding-left', $('.sidebar').innerWidth() + 50);
    }
    // else {
    //   $('body').css('padding-left', 0);
    // }
  });

  $('.colors li').click(function () {
    $('body').attr('data-default-color', $(this).data('color'));
  })
  console.log($('.colors').innerWidth());
});