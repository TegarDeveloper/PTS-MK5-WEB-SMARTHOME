// Ganti background ke transparent

var btn = document.getElementById("btn");
var light = document.getElementById("light");
var header = document.querySelector(".navbar");

function toggleBtn() {
  btn.classList.toggle("activeToggle");
  light.classList.toggle("on");
}

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 2,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

function resposiveSmartHome() {
  var lebar = window.innerWidth;

  if (lebar <= 576) {
    // remove sticky
    window.addEventListener("scroll", function () {
      document.getElementById("navbar").classList.remove("sticky");
      document.getElementById("search").placeholder = "Pertanyaanmu";
    });
  } else {
    // document.querySelectorAll("#addrow").classList.add("row");
    document.getElementById("search").placeholder = "Masukan Pertanyaanmu";
  }

  if (lebar <= 992) {
    // replace img
    document.querySelector(".laptop").src = "../assets/images/laptop-lengkap-mobile.png";

    // remove overflow
    document.querySelector(".section3").classList.remove("overflow-hidden");

    // remove lampu
    if (document.querySelector(".lampuku") != undefined) {
      document.querySelector(".lampuku").remove();
    }

    // remove overflow
    document.getElementById("card-animate1").classList.remove("card-animate");
    document.getElementById("card-animate2").classList.remove("card-animate");

    // hide overflow
    document.querySelector(".section5").classList.remove("overflow-hidden");

    // remove carousel desktop
    // document.querySelector('.carousel-web').remove();

    // TextKeuntungan SmartHome remove dan replace to h2
    if (document.querySelector(".p-benefit1") != undefined) {
      document.querySelector(".text-benefit1").innerHTML = "Penggunaan listrik yang lebih hemat<br><span class='spanns' id='spanns'>Anda dapat mengatur kapan perangkat Smart Home dinyalakan dan dimatikan secara smart online. </span> ";
      document.querySelector(".p-benefit1").remove();

      document.querySelector(".text-benefit2").innerHTML = "Kontrol yang mudah<br><span class='spanns' id='spanns'>Anda dapat mengatur perangkat Smart Home sesuka hati anda mulai dari menyalakan, mematikan, penjadwal, dsb. </span> ";
      document.querySelector(".p-benefit2").remove();

      document.querySelector(".text-benefit3").innerHTML = "Integrasi & automisasi<br><span class='spanns' id='spanns'>Anda dapat mengatur Input yang terjadi secara otomatis berdasarkan waktu, peristiwa, atau kondisi tertentu </span> ";
      document.querySelector(".p-benefit3").remove();
    }

    // add and remove span mode mobile
    var i = document.querySelectorAll(".spanns");
    if (lebar <= 360) {
      i.forEach((element) => {
        element.style.display = "none";
      });

      // geser posisi h2
      document.querySelector(".text-benefit1").style.top = "-92px";
      document.querySelector(".text-benefit2").style.top = "64px";
      document.querySelector(".text-benefit3").style.top = "210px";
    } else {
      i.forEach((element) => {
        element.style.display = "block";
      });
      document.querySelector(".text-benefit1").style.top = "-100px";
      document.querySelector(".text-benefit2").style.top = "50px";
      document.querySelector(".text-benefit3").style.top = "192px";
    }
  } else {
    // remove img pesawat
    if (document.getElementById("button-addon2") != undefined) {
      document.getElementById("button-addon2").remove();
    }
  }

}


// Add a listener for the 'resize' event
window.addEventListener("resize", resposiveSmartHome);

// Call the function initially to apply responsive design based on initial screen width
resposiveSmartHome();
