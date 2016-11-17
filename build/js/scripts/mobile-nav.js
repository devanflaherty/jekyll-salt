// Mobile Nav
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();

   if (st > lastScrollTop){
      $("#main-nav").removeClass('peek');
   } else {
     var offset = lastScrollTop - st;
     if (st > 800) {
       if (offset > 8) {
         $("#main-nav").addClass('peek');
       }
     }
   }
   lastScrollTop = st;
});

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
