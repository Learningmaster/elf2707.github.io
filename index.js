'use strict';

window.onload = function () {
  var svgMorpheus = new SVGMorpheus('#icons'),
      selIcon     = document.getElementById('selIcon'),
      selEasing   = document.getElementById('selEasing'),
      selDuration = document.getElementById('selDuration'),
      selRotation = document.getElementById('selRotation'),
      icons=[
        'svg01',
        'svg02',
        'svg03',
        'svg04',
        'svg05',
        'svg06',
        'svg07',
        'svg08',
        'svg09',
        'svg10',
        'svg11',
        'svg12'
      ];
      easings={
        'circ-in': 'Circ In','circ-out': 'Circ Out','circ-in-out': 'Circ In/Out',
        'cubic-in': 'Cubic In', 'cubic-out': 'Cubic Out', 'cubic-in-out': 'Cubic In/Out',
        'elastic-in': 'Elastic In', 'elastic-out': 'Elastic Out', 'elastic-in-out': 'Elastic In/Out',
        'expo-in': 'Expo In', 'expo-out': 'Expo Out', 'expo-in-out': 'Expo In/Out',
        'linear': 'Linear',
        'quad-in': 'Quad In', 'quad-out': 'Quad Out', 'quad-in-out': 'Quad In/Out',
        'quart-in': 'Quart In', 'quart-out': 'Quart Out', 'quart-in-out': 'Quart In/Out',
        'quint-in': 'Quint In', 'quint-out': 'Quint Out', 'quint-in-out': 'Quint In/Out',
        'sine-in': 'Sine In','sine-out': 'Sine Out','sine-in-out': 'Sine In/Out'
      },
      durations=[250, 500, 750, 1000, 5000],
      rotations={
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

  var timeoutInstance, manualChange=false;
  var currentIconIndex = 0;

  function onIconChange() {
    clearTimeout(timeoutInstance);
    var valEasing='elastic-out',
        valDuration=500,
        valRotation='None';
    svgMorpheus.to(icons[currentIconIndex], {duration: valDuration, easing: valEasing, rotation: valRotation}, launchTimer);
  }
  
  function timerTick() {
    let selIndex = currentIconIndex;
    while(selIndex === currentIconIndex) {
      selIndex=Math.round(Math.random()*(icons.length-1));
    }
    
    currentIconIndex=selIndex;
    onIconChange();
  }

  function launchTimer() {
    timeoutInstance=setTimeout(timerTick, 1000);
  }
  
  selIcon.addEventListener('change', onIconChange);

  launchTimer();
};