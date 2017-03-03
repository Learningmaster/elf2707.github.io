'use strict';

window.onload = function () {
     const svgMorpheus = new SVGMorpheus('#icons');
     const icons=[
        '#svgPath01',
        '#svgPath02',
        '#svgPath03',
        '#svgPath04',
        '#svgPath06',
        '#svgPath07',
        '#svgPath08',
        '#svgPath09',
        '#svgPath10',
        '#svgPath11',
      ];
      
      const easings={
        'circ-in': 'Circ In','circ-out': 'Circ Out','circ-in-out': 'Circ In/Out',
        'cubic-in': 'Cubic In', 'cubic-out': 'Cubic Out', 'cubic-in-out': 'Cubic In/Out',
        'elastic-in': 'Elastic In', 'elastic-out': 'Elastic Out', 'elastic-in-out': 'Elastic In/Out',
        'expo-in': 'Expo In', 'expo-out': 'Expo Out', 'expo-in-out': 'Expo In/Out',
        'linear': 'Linear',
        'quad-in': 'Quad In', 'quad-out': 'Quad Out', 'quad-in-out': 'Quad In/Out',
        'quart-in': 'Quart In', 'quart-out': 'Quart Out', 'quart-in-out': 'Quart In/Out',
        'quint-in': 'Quint In', 'quint-out': 'Quint Out', 'quint-in-out': 'Quint In/Out',
        'sine-in': 'Sine In','sine-out': 'Sine Out','sine-in-out': 'Sine In/Out'
      };

      const durations=[250, 500, 750, 1000, 5000];

      const rotations={
        'clock': 'Clockwise',
        'counterclock': 'Counterclockwise',
        'random': 'Random',
        'none': 'None'
      };

  var key, i, len;

  // for(key in icons) {
  //   selIcon.options[selIcon.options.length]=new Option(icons[key], key);
  // }

  // for(key in easings) {
  //   selEasing.options[selEasing.options.length]=new Option(easings[key], key);
  // }

  // for(i=0, len=durations.length;i<len;i++) {
  //   selDuration.options[selDuration.options.length]=new Option(durations[i], durations[i]);
  // }

  // for(key in rotations) {
  //   selRotation.options[selRotation.options.length]=new Option(rotations[key], key);
  // }


  // selIcon.selectedIndex=1;
  // selEasing.selectedIndex=15;
  // selDuration.selectedIndex=2;
  // selRotation.selectedIndex=0;

  //function getSelValue(sel) {
    //return sel.options[sel.selectedIndex].value;
 // }

  // var timeoutInstance, manualChange=false;
  // var currentIconIndex = 0;

  // function onIconChange() {
  //   clearTimeout(timeoutInstance);
  //   var valEasing='elastic-in',
  //       valDuration=500,
  //       valRotation='none';
  //   svgMorpheus.to(icons[currentIconIndex], {duration: valDuration, easing: valEasing, rotation: valRotation}, launchTimer);
  // }
  
  // function timerTick() {
  //   let selIndex = currentIconIndex;
  //   while(selIndex === currentIconIndex) {
  //     selIndex=Math.round(Math.random()*(icons.length-1));
  //   }
    
  //   currentIconIndex=selIndex;
  //   onIconChange();
  // }

  // function launchTimer() {
  //   timeoutInstance=setTimeout(timerTick, 1000);
  // }
  
  // selIcon.addEventListener('change', onIconChange);

  // launchTimer();

// audio
var audio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/tick.mp3");

var tl = new TimelineMax({
  yoyo: true,
  repeat: -1,
  repeatDelay: 1
});

tl.timeScale(1.05);

const icon1 = document.getElementById("svgPath01");


for(var i = 0; i < icons.length; i++) {
  tl
    .to(icon1, {
      morphSVG: {
        shape: icons[i],
        shapeIndex: 1
      },
      stroke: '#F00',
      scale: 1,
      onComplete: function(){
        audio.play();
      },
      onReverseComplete: function(){
        audio.play();
      }
    })
  }
};