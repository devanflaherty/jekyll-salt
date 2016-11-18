// Tweens
//heart
if($("body").hasClass("Process")) {
  var tween_heart = TweenMax
  .staggerFromTo('#heart .columns', 2, {
    transform: 'translate(0px, 100px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#heart",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_heart)
  // .addIndicators({name: "heart"})
  .addTo(controller);

  //services
  var tween_services = new TimelineMax()
  .staggerFromTo('.Process #services li:nth-child(odd)', 2, {
    transform: 'translate(-50px, 0px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".Process #services",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_services)
  // .addIndicators({name: "services"})
  .addTo(controller);

  var tween_services = new TimelineMax()
  .staggerFromTo('.Process #services li:nth-child(even)', 2, {
    transform: 'translate(50px, 0px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".Process #services",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_services)
  // .addIndicators({name: "services"})
  .addTo(controller);

  // location
  var tween_location = TweenMax
  .staggerFromTo('#location .columns', 2, {
    transform: 'translate(0px, 100px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#location",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_location)
  // .addIndicators({name: "Northwest"})
  .addTo(controller);

  //bio pic
  var tween_bio = TweenMax
  .fromTo('.bio', 1, {
    transform: 'translate(0px, -40px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#whois",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_bio)
  // .addIndicators({name: "bio"})
  .addTo(controller);

  // Instagram
  var tween_instagram = new TimelineMax()
  .staggerFromTo('.sl-pop div', 2, {
    transform: 'translate(0px, 100px)'
  }, {
    transform: 'translate(0px, 0px)'
  }, 0.33)
;

  var scene = new ScrollMagic.Scene({
    triggerElement: "#instagram",
    triggerHook: "onEnter",
    duration: "100%"
  })
  .setTween(tween_instagram)
  // .addIndicators({name: "instagram"})
  .addTo(controller);

  $('.type-row').each(function(){
    var currentHint = this;
    var trigger = currentHint.closest('article');

    var tween_pull = TweenMax
    .fromTo(currentHint, 1, {
      transform: 'translate(0px, 100px)'
    }, {
      transform: 'translate(0px, 0px)'
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: trigger,
      triggerHook: "onEnter",
      duration: "100%"
    })
    .setTween(tween_pull)
    // .addIndicators({name: "Pull", indent: 120})
    .addTo(controller);
  });

}
