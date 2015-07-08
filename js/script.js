$(document).ready(function() {

  $( ".card-btn-open" ).click(function() {
    $(".cover").addClass("cover-hide");
    $(".resume").removeClass("resume-hide");
    window.removeEventListener( 'scroll', noscroll );
  });

  $( ".card-btn-close" ).click(function() {
    $(".cover").removeClass("cover-hide");
    $(".resume").addClass("resume-hide");
    window.addEventListener( 'scroll', noscroll );
  });

  function noscroll() {
  			window.scrollTo( 0, 0 );
  		}
  // reset scrolling position
  document.body.scrollTop = document.documentElement.scrollTop = 0;

	// disable scrolling
	window.addEventListener( 'scroll', noscroll );

});
