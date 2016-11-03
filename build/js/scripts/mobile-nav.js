// Mobile Nav

// Where the magic happens
$( ".nav-toggle" ).click(function() {
  $(this).toggleClass( "active" );

  $('html').toggleClass( "navFixed" );
  $('.full-nav').toggleClass("visible");
  $('.logo').toggleClass( "black" );
});
$(window).resize(function(){
  if ($(window).width() >= 640){
    $('.nav-toggle').removeClass( "active" );
    $('html').removeClass( "navFixed" );
    $('.full-nav').removeClass("visible");
    $('.logo').removeClass( "black" );
  }
});
