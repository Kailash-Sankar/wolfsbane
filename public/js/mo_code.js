'use strict';

var rect = new mojs.Shape({
  shape: 'rect',
  left: '50%',
  fill: 'none',
  radius: 90,
  radiusX:300,
  // stroke: { 'rgba(0,255,255, 1)': 'magenta' },
  stroke: { 'aqua': '#6640ab' },
  strokeWidth: { 10: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%': '100%' },
  //angle: { 0: 180 },
  parent : document.getElementById('page-home'),
  duration: 4000,
  repeat: 999
}).play();


/* --- click effect -- */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {if (window.CP.shouldStopExecution(2)){break;} var source = arguments[i]; for (var key in source) {if (window.CP.shouldStopExecution(1)){break;} if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } }
window.CP.exitedLoop(1);
 }
window.CP.exitedLoop(2);
 return target; };

var OPTS = {
  fill: 'none',
  radius: 25,
  strokeWidth: { 50: 0 },
  scale: { 0: 1 },
  angle: { 'rand(-35, -70)': 0 },
  duration: 500,
  left: 0, top: 0,
  easing: 'cubic.out',
  className: 'mo-mouse-anim',
  //repeat: 999,
  //parent : document.querySelectorAll('#page-about .funky-txt')[0]
  parent : document.querySelectorAll('.pages-stack')[0]
};

var circle1 = new mojs.Shape(_extends({}, OPTS, {
  stroke: 'aqua'
}));

var circle2 = new mojs.Shape(_extends({}, OPTS, {
  radius: { 0: 15 },
  strokeWidth: { 30: 0 },
  stroke: '#9b4dca',
  delay: 'rand(75, 150)'
}));

var pages = ['page-about','page-blog','page-skills','page-experience','page-projects','page-site','page-contact'];

pages.forEach(function(page){
  document.getElementById(page).addEventListener( 'click', function (e) {
   circle1
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
    circle2
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
  });
});




/* --------- experimental ------------
var _x;

var LINE1_DURATION = 1000;

var trailOpts = {
 fill: 'none',
 stroke: 'aqua',
 shape: 'line',
 radiusY: 0,
 radiusX: 10,
 strokeDasharray: '100%',
 strokeDashoffset: { '100%': '0%' },
 angle: 180,
 duration: LINE1_DURATION / 2,
 strokeWidth: { 6: 2 },
 isShowStart: true,
 easing: 'cubic.out',
 opacity: .75,
 y: -4,
 left: -22,
 parent: document.querySelectorAll('#page-about .funky-txt')[0],
 //repeat : 999
};

var trail2Opts = _extends({}, trailOpts, {
 radiusX: 4,
 left: -15,
 y: 3
});

var trailReturn = {
 easing: 'quad.in',
 strokeDashoffset: '100%',
 duration: LINE1_DURATION / 2,
 parent: document.querySelectorAll('#page-about .funky-txt')[0],
// repeat : 999
};


var trail1 = new mojs.Shape(trailOpts).then(_extends({
 duration: LINE1_DURATION / 5
}, trailReturn));

var trail2 = new mojs.Shape(trail2Opts).then(_extends({
 duration: LINE1_DURATION / 6
}, trailReturn));


$('#page-about .funky-txt').on('mouseenter', function (e) {
  trail1.replay();
  trail2.replay();
});
*/
