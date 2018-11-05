// When the user scrolls the page, this function executed 
window.onscroll = function() {afterScrolling()};

// Get the navbar
var navBar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function afterScrolling() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
};

