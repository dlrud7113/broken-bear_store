$(document).ready(function () {
  $(".xi-close-min").click(function () {
    if ($(".side-menu").hasClass("active") == true) {
      $(".side-menu").removeClass("active");
      $(".side-menu-bg").css("display", "none");
    } else {
      $(".side-menu").addClass("active");
      $(".side-menu-bg").css("display", "block");
    }
  });
  $(".side-menu-bg").click(function () {
    if ($(".side-menu").hasClass("active") == true) {
      $(".side-menu").removeClass("active");
      $(".side-menu-bg").css("display", "none");
    } else {
      $(".side-menu").addClass("active");
      $(".side-menu-bg").css("display", "block");
    }
  });
});
