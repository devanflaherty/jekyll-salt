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
