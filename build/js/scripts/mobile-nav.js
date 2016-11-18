// Mobile Nav
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();

   if (st > lastScrollTop){
     if(st > 150) {
      $("#main-nav").addClass('peek-hide');
      $("#logoTag").addClass('peek-hide');
     }
   } else {
     var offset = lastScrollTop - st;
     if(st > 300) {
       if (offset > 8) {
         $("#main-nav").removeClass('peek-hide');
         $("#logoTag").removeClass('peek-hide');
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
