//   if (getComputedStyle(a).getPropertyValue("display") != "none") {
//   }

window.addEventListener("resize", function () {
  // check lebar layar
  var lebar = window.innerWidth;
  if (lebar >= 1200) {
    document.getElementById("baris-section1");
  }

  if(lebar < 1200) {

  }
});

// check navbar
var navsection4 = document.querySelectorAll(".nav-sec4");
navsection4.forEach((links) => {
  links.addEventListener("click", function () {
    navsection4.forEach((link) => {
      link.classList.remove("nav-active");
    });
    this.classList.add("nav-active");

    if (links.classList.contains("nav-active")) {
      if (links.classList.contains("living-filter")) {
        living();
      } else if (links.classList.contains("security-filter")) {
        security();
      } else if (links.classList.contains("electrical-filter")) {
        electrical();
      } else if (links.classList.contains("lighting-filter")) {
        lighting();
      } else {
        all();
      }
    }
  });
});

function living() {
  // add living items
  document.querySelectorAll(".living-item").forEach((living) => {
    living.style.display = "block";
  });

  document.querySelectorAll(".security-item").forEach((security) => {
    security.style.display = "none";
  });

  document.querySelectorAll(".electrical-item").forEach((electrical) => {
    electrical.style.display = "none";
  });

  document.querySelectorAll(".lighting-item").forEach((lighting) => {
    lighting.style.display = "none";
  });
}

function security() {
  // add scurity items
  document.querySelectorAll(".living-item").forEach((living) => {
    living.style.display = "none";
  });

  document.querySelectorAll(".security-item").forEach((security) => {
    security.style.display = "block";
  });

  document.querySelectorAll(".electrical-item").forEach((electrical) => {
    electrical.style.display = "none";
  });

  document.querySelectorAll(".lighting-item").forEach((lighting) => {
    lighting.style.display = "none";
  });
}

function electrical() {
  // add electrical items
  document.querySelectorAll(".living-item").forEach((living) => {
    living.style.display = "none";
  });

  document.querySelectorAll(".security-item").forEach((security) => {
    security.style.display = "none";
  });

  document.querySelectorAll(".electrical-item").forEach((electrical) => {
    electrical.style.display = "block";
  });

  document.querySelectorAll(".lighting-item").forEach((lighting) => {
    lighting.style.display = "none";
  });
}

function lighting() {
  // add electrical items
  document.querySelectorAll(".living-item").forEach((living) => {
    living.style.display = "none";
  });

  document.querySelectorAll(".security-item").forEach((security) => {
    security.style.display = "none";
  });

  document.querySelectorAll(".electrical-item").forEach((electrical) => {
    electrical.style.display = "none";
  });

  document.querySelectorAll(".lighting-item").forEach((lighting) => {
    lighting.style.display = "block";
  });
}

function all() {
  // add all items
  document.querySelectorAll(".living-item").forEach((living) => {
    living.style.display = "block";
  });

  document.querySelectorAll(".security-item").forEach((security) => {
    security.style.display = "block";
  });

  document.querySelectorAll(".electrical-item").forEach((electrical) => {
    electrical.style.display = "block";
  });

  document.querySelectorAll(".lighting-item").forEach((lighting) => {
    lighting.style.display = "block";
  });
}
