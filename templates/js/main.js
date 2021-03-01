$(document).ready(function () {
  $(document).on("click", ".cta", function () {
    $(this).toggleClass("active");
    $("#mySidenav").toggleClass("sidenav-active");
  });
});
