function showproject(projectid) {
  $("#project-description .content").hide();
  $("#project-description " + projectid).fadeIn("slow");
}

function showquote(quote) {
  if ($(quote).css("display") != "none") return;
  $("#quotes").children().hide();
  $(quote).css("display", "flex").hide().fadeIn("slow");
}

function shownews(newsitem) {
  if ($(newsitem).css("display") != "none") return;
  $("#news").children().hide();
  $(newsitem).css("display", "flex").hide().fadeIn("slow");
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

var newsitems = [];
$("#news").children().each(function(idx, e) { newsitems.push(e) });

function cycle_quotes(n = 0) {
  if ($('#quotes').isInViewport()) {
    showquote(quotes[n]);
    if (n >= quotes.length - 1) {
      setTimeout(function() { cycle_quotes(0); }, 10000);
    } else {
      setTimeout(function() { cycle_quotes(n+1); }, 10000);
    }
  } else {
    setTimeout(function() { cycle_quotes(n); }, 10000);
  }
}

function cycle_news(n = 0) {
  if ($('#news').isInViewport()) {
    shownews(newsitems[n]);
    if (n >= newsitems.length - 1) {
      setTimeout(function() { cycle_news(0); }, 10000);
    } else {
      setTimeout(function() { cycle_news(n+1); }, 10000);
    }
  } else {
    setTimeout(function() { cycle_news(n); }, 10000);
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
    cycle_quotes();
  }

  // News
  if ($("#news").length) {
    cycle_news();
  }

  $("#projectnav a").click(function() {
    showproject($(this).data("target"));
  });

});
