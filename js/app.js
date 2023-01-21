$(document).ready(function () {
  console.log("Welcome Here");

  if (localStorage.getItem("mainTheme")) {
    $("body").attr("data-default-color", localStorage.getItem("mainTheme"));
  } else {
    $("body").attr("data-default-color", "red");
  }
  $("body").css("padding-left", $(".sidebar").innerWidth() + 50);
  $(window).resize(function () {
    if ($(window).innerWidth() > 767) {
      $("body").css("padding-left", $(".sidebar").innerWidth() + 50);
    }
  });
  $(".colors li").click(function () {
    $("body").attr("data-default-color", $(this).data("color"));
    localStorage.setItem("mainTheme", $(this).data("color"));
  });
});
