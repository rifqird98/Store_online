$(function () {
  $(ducument).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
