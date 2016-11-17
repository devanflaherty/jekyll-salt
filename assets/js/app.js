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

// Connect Reveal
$('#connect').hide();
$( ".toggleConnect" ).click(function() {
  $('.close').fadeIn('slow');
  $('html').addClass( "connectFixed" );
  $('#connect .left-panel').show();
  $('#connect .right-panel').show();
  $('#connect').fadeIn(function() {
    $('#connect .left-panel').addClass("visible");
    $('#connect .right-panel').addClass("visible");
  });
});
$( ".close" ).click(function() {
  $('#connect .left-panel').removeClass("visible");
  $('#connect .right-panel').removeClass("visible");
  $('#connect').fadeOut(function() {
    $('html').removeClass( "connectFixed" );
  });
});

// FULL HEIGHT HEADER & PARALLAX FADE
$(function() {
  resizeDiv();
  $('.parallax').removeClass("invisible");
});
window.onresize = function(event) {
  resizeDiv();
};
function resizeDiv() {
  vph = $(window).height();
  $('.vh').css({'height': vph});
}

$( ".parallax" ).waitForImages(function() {
  $( this ).addClass('fade');
});

// Mobile Nav
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();

   if (st > lastScrollTop){
      $("#main-nav").removeClass('peek');
   } else {
     var offset = lastScrollTop - st;
     if (st > 800) {
       if (offset > 8) {
         $("#main-nav").addClass('peek');
       }
     }
   }
   lastScrollTop = st;
});

// Where the magic happens
$( ".nav-toggle" ).click(function() {
  $(this).toggleClass( "active" );

  $('html').toggleClass( "navFixed" );
  $('.full-nav').toggleClass("visible");
  $('.logo').toggleClass( "black" );
});
$(window).resize(function(){
  if ($(window).width() >= 640){
    $('.nav-toggle').removeClass( "active" );
    $('html').removeClass( "navFixed" );
    $('.full-nav').removeClass("visible");
    $('.logo').removeClass( "black" );
  }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Some jquery to add some styling to the markdown parsed html on showcase pages
// Find imgs in a paragraph tag and wrap them in a row
$( "#contentBody p" ).has( "img" ).wrap( '<div class="row expanded collapse flex-wrap" />');
// Remove the wrapping p tag
$( ".flex-wrap p" ).has( "img" ).contents().unwrap();

var rowWrap = '<div class="row align-center content"><div class="small-11 medium-10 large-9 columns content-col"></div></div>';
var firstChild = $('#contentBody').children().first();

firstChild.not(".flex-wrap").nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);

$(".flex-wrap").each(function(i) {
  $(this).nextUntil('.flex-wrap').wrapAll(rowWrap);
  $(this).has( "a" ).find("a").wrap( "<div class='columns'></div>" );
  $(this).has( "img" ).find("img").wrap( "<div class='columns'></div>" );
  $(this).has( "a" ).find("a .columns").contents().unwrap();
});
$(".youtube-video").addClass("flex-video widescreen");

// IMG Captions
$(".columns img").each(function() {
  var imageCaption = $(this).attr("title");
  if (imageCaption) {
    $("<h6>" + imageCaption + "</h6>").insertBefore(this);
  }
});

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
    transform: 'translate(0px, 60px)'
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

if($("body").hasClass("Showcase")) {

  // var tween_case = new TimelineMax()
  // .to('#caseContainer', 0.5, {
  //   z: -150
  // })
  // .to("#caseContainer", 1,   {x: "-33.33%"})	// move in to first panel
  // .to("#caseContainer", 0.5, {z: 0})				// move back to origin in 3D space
  // // animate to third panel
  // .to("#caseContainer", 0.5, {z: -150, delay: 1})
  // .to("#caseContainer", 1,   {x: "-66.66%"})
  // .to("#caseContainer", 0.5, {z: 0});
  //
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: "#pinContainer",
  //   triggerHook: "onLeave",
  //   duration: "500%"
  // })
  // .setPin("#pinContainer")
  // .setTween(tween_case)
  // // .addIndicators({name: "swipe", indent: 120})
  // .addTo(controller);
}
