function isiPhone(){
  return (
    (navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)
  );
}
function isiPad(){
  return (
    (navigator.platform.indexOf("iPad") != -1)
  );
}
if(isiPhone()){
  $('body').addClass('iphone');
}
if(isiPad()){
  $('body').addClass('ipad');
}

if(isiPad() || isiPhone()){
  $("#showcaseList li").bind("touchstart click", function(){
    $(this).toggleClass("hover");
  });
  $("#showcaseList li").bind("touchend click", function(){
    $(this).removeClass("hover");
  });
}
