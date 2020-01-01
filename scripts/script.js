document.getElementById("year").textContent = year
document.getElementById("year").innerText = date
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
    }

// The script runs the time of the navigation bar.
function timeDisplay(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock-display").innerText = time;
    document.getElementById("clock-display").textContent = time;
    
    setTimeout(timeDisplay, 1000);
    
}
timeDisplay();
