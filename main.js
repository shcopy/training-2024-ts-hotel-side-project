// Import
import Swiper from "swiper/bundle";
import "swiper/css/bundle"; // 覆蓋 bootstrap

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import AOS from "aos";
import "./node_modules/aos/dist/aos.css";

import jQuery from "jquery";
window.$ = jQuery;


// JavaScript


// Food swiper
const foodSwiper = new Swiper(".foodSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: false,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next-news",
    prevEl: ".swiper-button-prev-news",
    clickable: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
})

// aos
AOS.init();

// jQuery
// Signin/ login
$('.needs-validation').each(function (index) {
  $(this).on('submit', function (e) {
    e.preventDefault();
    $(this).addClass('was-validated');
  });
});

console.log("Hello world!");