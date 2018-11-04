var navBar = $(".nav");
sticking = "sticky";
headerAboveNav = $(".header-above-nav").height();

$(window).scroll(function() {
  if ($(this).scrollTop() > headerAboveNav) {
    navBar.addClass(sticking);
  } else {
    navBar.removeClass(sticking);
  }
});