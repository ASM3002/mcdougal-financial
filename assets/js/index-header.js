var initialSrc = "/assets/img/logo.png";
var scrollSrc = "/assets/img/logo_white.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value != 0)
      $("#home-nav-logo").attr("src", scrollSrc);
   else
      $("#home-nav-logo").attr("src", initialSrc);
});