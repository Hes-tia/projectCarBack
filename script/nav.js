let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.left= "0";
    document.getElementById("main").style.left="5vw"
    document.getElementById("header").style.left="5vw"
  } else {
    document.getElementById("navbar").style.left = "-10vw";
    document.getElementById("main").style.left="0"
    document.getElementById("header").style.left="0"
  }
  prevScrollpos = currentScrollPos;
}