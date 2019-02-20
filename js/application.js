function showproject(projectid) {
  $("#project-description .content").hide();
  $("#project-description " + projectid).fadeIn("slow");
}

$(document).ready(function() {

  // Navbar burger
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".navbar-menu a").click(function() {
    $(".navbar-burger").removeClass("is-active");
    $(".navbar-menu").removeClass("is-active");
  });

  // Project descriptions
  showproject("#soulfood-delight");

  $("#projectnav a").click(function() {
    showproject($(this).data("target"));
  });

});
