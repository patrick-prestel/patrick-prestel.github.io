function showproject(projectid) {
  $("#project-description .content").hide();
  $("#project-description " + projectid).fadeIn("slow");
}

function showquote(quoteid) {
  $("#quotes .media").hide();
  $("#quotes " + quoteid).css("display", "flex").hide().fadeIn("slow");
}

var quotes = ["#quote-1", "#quote-2", "#quote-3"];
function cycle_quotes(n = 0) {
  showquote(quotes[n]);
  if (n >= quotes.length - 1) {
    console.log("Showing quote " + quotes[0]);
    setTimeout(function() { cycle_quotes(0); }, 5000);
  } else {
    console.log("Showing quote " + quotes[n+1]);
    setTimeout(function() { cycle_quotes(n+1); }, 5000);
  }
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
  cycle_quotes();

  $("#projectnav a").click(function() {
    showproject($(this).data("target"));
  });

});
