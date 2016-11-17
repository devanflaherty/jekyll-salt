//Tweens
var tween_header = new TimelineMax()
  .fromTo('#header .overlay', 1, {
    opacity: 0
  }, {
    opacity: 1
  })
  .fromTo('#main-nav', 1, {
    transform: "translate(0, 0)"
  }, {
    transform: "translate(0, -300px)"
  }, 0)
  .fromTo('#headline', 1, {
    transform: "translate(0, 0)",
    opacity: 1
  }, {
    transform: "translate(0, 150px)",
    opacity: 0.5
  }, 0)
  .fromTo('#subtitle', 1, {
    transform: 'translate(0px, 0px)',
    opacity: 1
  }, {
    transform: 'translate(0px, 150px)',
    opacity: 0.5
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

var header = new ScrollMagic.Scene({
  triggerElement: '#header',
  triggerHook: "onLeave",
  offset: 500
})
.setClassToggle("#main-nav", 'transition')
// .addIndicators({name: "overlay"})
.addTo(controller);
