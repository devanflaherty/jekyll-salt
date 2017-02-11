var controller = new ScrollMagic.Controller();

$('.statement-pop').each(function(){
  var currentStatement = this;
  var trigger = currentStatement.closest('section');

  var tween_statement = TweenMax
  .fromTo(currentStatement, 1, {
    transform: 'translate(0px, 60px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "100%"
  })
  .setTween(tween_statement)
  // .addIndicators({name: "Pop"})
  .addTo(controller);
});

$('.hint').each(function(){
  var currentHint = this;
  var trigger = currentHint.closest('section');

  var tween_hint = TweenMax
  .fromTo(currentHint, 1, {
    transform: 'translate(0px, -60px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "100%"
  })
  .setTween(tween_hint)
  // .addIndicators({name: "Hint", indent: 120})
  .addTo(controller);
});

$('.drawicon').each(function(){
  var currentDrawicon = this;
  var trigger = currentDrawicon.closest('section');

  var tween_drawicon = TweenMax
  .fromTo(currentDrawicon, 1, {
    transform: 'translate(0px, -90px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "100%"
  })
  .setTween(tween_drawicon)
  // .addIndicators({name: "Hint", indent: 120})
  .addTo(controller);
});

$('.talk h2').each(function(){
  var currentTalkHead = this;
  var trigger = currentTalkHead.closest('section');

  var tween_talk = TweenMax
  .fromTo(currentTalkHead, 1, {
    transform: 'translate(0px, -60px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "500"
  })
  .setTween(tween_talk)
  // .addIndicators({name: "talk"})
  .addTo(controller);
});

// Img reveal
$('.flex-wrap img').each(function(){
  var currentImg = this;
  var trigger = currentImg;

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "190%"
  })
  //.setTween(tween_img)
  .setClassToggle(currentImg, 'reveal')
  // .addIndicators({name: "talk"})
  .addTo(controller);
});

$('.parallax').each(function(){
  var currentParallax = this;
  var trigger = currentParallax.closest('section');

  var tween_parallax = TweenMax
  .fromTo(currentParallax, 1, {
    transform: 'translate(0px, -75px) scale(1.5)'
  }, {
    transform: 'translate(0px, 75px) scale(1.5)', ease: Linear.easeNone
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "200%"
  })
  .setTween(tween_parallax)
  // .addIndicators({name: "parallax"})
  .addTo(controller);
});

$('section:not(.navigation, .no-pull)').each(function(){
  var currentStatement = this;
  var trigger = currentStatement.closest('section');

  var tween_statement = TweenMax
  .fromTo(currentStatement, 1, {
    transform: 'translate(0px, 100px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter"
  })
  .setTween(tween_statement)
  // .addIndicators({name: "Pop"})
  .addTo(controller);
});
