// FULL HEIGHT HEADER & PARALLAX FADE
$(function() {
  resizeDiv();
  $('.parallax').removeClass("invisible");
});
window.onresize = function(event) {
  resizeDiv();
};
function resizeDiv() {
  var vph = $(window).height();
  $('.vh').css({'height': vph});
}

$( ".parallax" ).waitForImages(function() {
  $( this ).addClass('fade');
});


$(function(){
  function activeOffset() {
    var parPos = $( "#main-nav ul" ).offset();
    var parOffset = parPos.left - 100;
    if ($("#main-nav .active").length) {
      var activePos = $( "#main-nav .active" ).offset();
      var activeW = $( "#main-nav .active" ).width();
      var activeOffset = activePos.left + 22;

      $( "#main-nav .active" ).append('<span></span>');
      $( "#main-nav .active span" ).width(activeW + 4);
      $('.selector').offset({left: activeOffset}).width(activeW);
    } else {
      $('.selector').offset({left: parOffset}).width('100');
    }
  }

  activeOffset();
  window.onresize = function(event) {
    activeOffset();
  };

  $( "#main-nav a" ).hover(
    function( event ) {
      var el = $(this);
      function hoverOffset(el) {
        var pos = el.offset();
        var w = el.width();
        var offset = pos.left + 22;

        $('.selector').offset({left: offset}).width(w - 2);
      }
      hoverOffset(el);
    }, function( event ) {
      activeOffset();
    }
  );
});
