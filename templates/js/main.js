// import Aos from "aos";

AOS.init({
  duration: 900,
  once: false,
});

// Navigation aniimation
$(() => {
  $(document).on("click", ".cta", function () {
    $(this).toggleClass("active");
    $("#mySidenav").toggleClass("sidenav-active");
  });
});

// navigation close after click any link
$("#mySidenav a").on("click", function () {
  console.log("object");
  // console.log();
  $("#mySidenav").removeClass("sidenav-active");
  $(".cta").removeClass("active");
});

// Magnific Pop up
$(".popup").magnificPopup({
  type: "image",
  // delay removal by X to allow out-animation
  removalDelay: 500,
  callbacks: {
    beforeOpen: function () {
      //  just a hack that adds mfp-anim class to markup
      this.st.image.markup = this.st.image.markup.replace(
        "mfp-figure",
        "mfp-figure mfp-with-anim"
      );
      this.st.mainClass = this.st.el.attr("data-effect");
    },
  },
  closeOnContentClick: true,
  //  allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  midClick: true,
});

// $(window).on("load", function () {
//   AOS.refresh();
// });

// let op = 0;
// let timer = 0;
// // removeLoader custom Function
// const removeLoader = (e) => {
//   timer = setInterval(hideEl(e), 20);
// };
// const hideEl = (el) => {
//   op = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
//   if (op > 0) {
//     op = op - 0.1;
//     el.style.opacity = op;
//   } else {
//     clearInterval(timer);
//   }
//   // console.log(e);
// };

// fadeout the loader
// $(window).on("load", () => {
//   console.log("window loaded");
//   // const loader = document.getElementById("page-loader");
//   // console.log(loader);
//   // removeLoader(loader);
//   $("#page-loader").fadeOut("slow");
//   // AOS.refresh();
//   // $(".loader-wrapper").addClass("remove-page-loader");
// });
