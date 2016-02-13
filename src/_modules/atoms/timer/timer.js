'use strict';

var timer = document.getElementById('timer');
if(timer) {
  var svg = document.getElementById('svg');
  var width = 60;
  svg.setAttribute('width', width);
  svg.setAttribute('height', width);
  var t = 60;
  var theta = 0;
  var radius = svg.getAttribute('width') / 2;
  timer.setAttribute('transform', 'translate(' + radius + ',' + radius + ')');

  (function animate() {
    theta += 0.5;
    theta %= 360;
    var x = Math.sin(theta * Math.PI / 180) * radius;
    var y = Math.cos(theta * Math.PI / 180) * -radius;
    var d = 'M0,0 v' + -radius + 'A' + radius + ',' + radius + ' 1 ' + ((theta > 180) ? 1 : 0) + ',1 ' + x + ',' + y + 'z';
    timer.setAttribute('d', d);
    setTimeout(animate, t);
  })();
}
