var header = document.querySelector(".navbar");

function resposiveSmartHome() {
  var lebar = window.innerWidth;

  if (lebar > 992) {
    window.addEventListener("scroll", function () {
      if(window.scrollY > 1) {
        header.classList.toggle("sticky", window.scrollY > 2);
      }
      else {
        document.getElementById("navbar").classList.remove("sticky");
      }
    });
  } else {
    document.getElementById("navbar").classList.add("navbar-light", "navbar-store");
  }
}
// Add a listener for the 'resize' event
window.addEventListener("resize", resposiveSmartHome);

// Call the function initially to apply responsive design based on initial screen width
resposiveSmartHome();
