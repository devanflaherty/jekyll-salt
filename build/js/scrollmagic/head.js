//Tweens
var tween_header = new TimelineMax()
  .fromTo('#header .overlay', 1, {
    opacity: 0
  }, {
    opacity: 1
  })
  .fromTo('.page-links', 1, {
    transform: 'translate(0px, 0px)'
  }, {
    transform: 'translate(0px, -240px)'
  }, 0)
  .fromTo('.subheader', 1, {
    transform: 'translate(0px, 0px)'
  }, {
    transform: 'translate(0px, 100px)'
  }, 0)
  // .fromTo('.go-down', 1, {
  //   opacity: 1
  // }, {
  //   opacity: 0
  // }, 0)
  ;

var header = new ScrollMagic.Scene({
  triggerElement: '#header',
  triggerHook: "onLeave",
  duration: "200%"
})
.setTween(tween_header)
// .addIndicators({name: "overlay"})
.addTo(controller);
