// Mobile Nav
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();

   if (st > lastScrollTop){
      $("#main-nav").removeClass('peek');
      $("#logoTag").removeClass('peek');
   } else {
     var offset = lastScrollTop - st;
     if (st > 800) {
       if (offset > 8) {
         $("#main-nav").addClass('peek');
         $("#logoTag").addClass('peek');
       }
     }
   }
   lastScrollTop = st;
});

// Where the magic happens
$( ".nav-toggle" ).click(function(e) {
  $(this).toggleClass( "active" );

  $('.full-nav').toggleClass("visible");
  $('body').toggleClass( "navFixed" );

});
$(window).resize(function(){
  if ($(window).width() >= 640){
    $('.nav-toggle').removeClass( "active" );
    $('body').removeClass( "navFixed" );
    $('.full-nav').removeClass("visible");
    $('.logo').removeClass( "black" );
  }
});
