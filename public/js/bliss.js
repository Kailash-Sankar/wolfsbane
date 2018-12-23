// inspired by a turoail in https://tympanus.net/
// done using mo.js instead of vanilla

const width = window.innerWidth;
const height = window.innerHeight;

console.log(width,height)

function bubble() {
  return {
    parent:       document.getElementById('our_canvas'),
    shape:  			'circle',
    scale:   			{ 0.3 : 0.4 },
    left:         Math.random()*(width-5),
    top:          '105%',
    y :           { '0' : -1 * Math.random()*(height/2) },
    fill:         { '#fff': 'transparent' },
    fillOpacity:  Math.random()*1,
    radius:       10,
    duration:     6000,
    repeat:       999,
    delay:        Math.random()*6000,
  }
}

let count = 0;
for(let i=0;i<width*0.30;i++) {
  let b = new mojs.Shape( bubble() ).play();
  count++;
}

console.log('generated',count,'bubbles.')

$('#heart').on('click',function(){
  $('.invite').fadeIn("slow");
})

$('.invite .header').on('click', function(){
  $('.invite').fadeOut("slow");
})
