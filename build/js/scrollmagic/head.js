//Tweens
var tween_header = new TimelineMax()
  .fromTo('#header .overlay', 1, {
    opacity: 0
  }, {
    opacity: 1
  })
  .fromTo('#headline', 1, {
    transform: "translate(0, 0)",
    opacity: 1
  }, {
    transform: "translate(0, 150px)",
    opacity: 0
  }, 0)
  .fromTo('#subtitle', 1, {
    transform: 'translate(0px, 0px)',
    opacity: 1
  }, {
    transform: 'translate(0px, 150px)',
    opacity: 0
  }, 0)
;

var header = new ScrollMagic.Scene({
  triggerElement: '#header',
  triggerHook: "onLeave",
  duration: "200%"
})
.setTween(tween_header)
// .addIndicators({name: "overlay"})
.addTo(controller);

// NAV PARALLAX
// var headerNavParallax = new ScrollMagic.Scene({
//   triggerElement: '#main',
//   triggerHook: "onLeave",
//   offset: 100
// })
// .setClassToggle("#main-nav", 'fixed')
// .addIndicators({name: "navLax"})
// .addTo(controller);
//
// var headerNavParallax = new ScrollMagic.Scene({
//   triggerElement: '#main',
//   triggerHook: "onLeave",
//   offset: 100
// })
// .setClassToggle("#logoTag", 'fixed')
// .addIndicators({name: "navLax"})
// .addTo(controller);
