function showproject(projectid) {
  $("#project-description .content").hide();
  $("#project-description " + projectid).fadeIn("slow");
}

function showquote(quote) {
  $("#quotes .media").hide();
  $(quote).css("display", "flex").hide().fadeIn("slow");
}

var quotes = [];
$("#quotes").children().each(function(idx, e) { quotes.push(e) });

function cycle_quotes(n = 0) {
  showquote(quotes[n]);
  if (n >= quotes.length - 1) {
    setTimeout(function() { cycle_quotes(0); }, 5000);
  } else {
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
