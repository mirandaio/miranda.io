window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var MAX = 96 * 60;
  var time = 0;
  var frame = 0;
  var timeNextFrame = 0;
  var vines = vines = [{x: 0, y: 0, a: 0, ai: 0, w: 8, p: [], l: MAX}];

  update();

  function update() {
    requestAnimationFrame(update);
    var currentTime = performance.now() / 1000;
    
    while(time < currentTime) {
      while(time < timeNextFrame) {
        time += 1 / 16384;
      }
      frame++;
      timeNextFrame += 1 / 60;
      
      // update visuals for a single frame
      vines = vines.filter(v => v.l--);
      vines.forEach(v => {
        dx = Math.cos(v.a) * v.w / 2;
        dy = Math.sin(v.a) * v.w / 2;
        v.x += dx;
        v.y += dy;
        v.a += v.ai / v.w / 2; // base angle increment on thickness of branch
        v.p.splice(0, v.p.length - v.l);
        v.p.splice(0, v.p.length - 60 * 5); // leave the last 60 points
        v.p.push({x: v.x, y: v.y, dx: dx, dy: dy}); // add a point to each vine
        if(frame % 30 == 0) {
          v.ai = Math.random() - 0.5;
        }
        if(v.w > 1 && Math.random() < v.l / 16384 / 2) {
          // position of new vine same as position of current vine
          vines.push({
            x: v.x,
            y: v.y,
            a: v.a,
            ai: v.ai,
            w: v.w / 2,
            p: [],
            l: Math.min(v.l, 0 | v.w * 32 * (1 + Math.random()))
          });
        }
      });
    }

    // render visual
    H = canvas.height = 512; // preserve aspect ratio of browser window
    W = canvas.width = 0 | H * innerWidth / innerHeight;
    ctx.translate(W/2, H/2);
    ctx.strokeStyle = '#000';
    vines.forEach(v => {
      if(v.w == 8) {
        ctx.translate(-v.x, -v.y);
      }
      ctx.beginPath();
      l = v.p.length - 1;
      for(i = l; p = v.p[i]; i--) {
        ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    });
  }
};