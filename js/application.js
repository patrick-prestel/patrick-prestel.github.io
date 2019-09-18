function showproject(projectid) {
  $("#project-description .content").hide();
  $("#project-description " + projectid).fadeIn("slow");
}

function showquote(quote) {
  $("#quotes").children().hide();
  $(quote).css("display", "flex").hide().fadeIn("slow");
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop() + $("#spacer").height();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var quotes = [];
$("#quotes").children().each(function(idx, e) { quotes.push(e) });

function cycle_quotes(n = 0) {
  if ($('#quotes').isInViewport()) {
    showquote(quotes[n]);
    if (n >= quotes.length - 1) {
      setTimeout(function() { cycle_quotes(0); }, 10000);
    } else {
      setTimeout(function() { cycle_quotes(n+1); }, 10000);
    }
  } else {
    setTimehout(function() { cycle_quotes(n); }, 10000);
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

  // Quotes
  if ($("#quotes").length) {
    showquote(quotes[0]);
    cycle_quotes();
  }

  $("#projectnav a").click(function() {
    showproject($(this).data("target"));
  });

});
