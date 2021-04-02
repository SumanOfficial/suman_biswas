$(window).on("load", () => {
  console.log("window loaded");
  $("#page-loader").fadeOut("slow");
  AOS.refresh();
});

// Navigation aniimation
$(() => {
  $(document).on("click", ".cta", function () {
    $(this).toggleClass("active");
    $("#mySidenav").toggleClass("sidenav-active");
    AOS.refresh();
  });
});

// navigation close after click any link
$("#mySidenav a").on("click", function () {
  console.log("object");
  // console.log();
  $("#mySidenav").removeClass("sidenav-active");
  $(".cta").removeClass("active");
  AOS.refresh();
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
