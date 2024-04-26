$(document).ready(function () {
  $(".side-menu").removeClass("active");
  $(".menuHeader01 > .xi-bars").click(function () {
    if ($(".side-menu").hasClass("active") == false) {
      $(".side-menu").addClass("active");
      $(".side-menu-bg").css("display", "block");
    } else {
      $(".side-menu").removeClass("active");
      $(".side-menu-bg").css("display", "none");
    }
  });
});
