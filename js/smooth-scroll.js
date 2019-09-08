// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $("#spacer").height()
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(document).scroll(function(){
  var st = $(this).scrollTop() + $("#spacer").height() + 1;

  $("img.bg").each(function() {
    var this_top = $(this).offset().top;
    if ($("img.bg").index($(this)) >= $("img.bg").size() - 1) {
      var next_top = 100000000;
    } else {
      var next_top = $("img.bg").eq( $("img.bg").index( $(this) ) + 1 ).offset().top;
    }
    if (st >= this_top && st < next_top) {
      var id = $(this).attr('id');
      $('.navbar-end a[href="#'+id+'"]').addClass('active');
    } else {
      var id = $(this).attr('id');
      $('.navbar-end a[href="#'+id+'"]').removeClass('active');
    }
  });
});
