window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var time = 0;
  var frame = 0;
  var timeNextFrame = 0;
  var vines = vines = [{x: 0, y: 0, a: 2.35, ai: 0, w: 8, p: [], l: Infinity}];

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
      vines = vines.filter(vine => vine.l--);
      vines.forEach(vine => {
        dx = Math.cos(vine.a) * vine.w / 2;
        dy = Math.sin(vine.a) * vine.w / 2;
        vine.x += dx;
        vine.y += dy;
        vine.a += vine.ai / vine.w / 2;
        vine.p.splice(0, vine.p.length - vine.l);
        vine.p.splice(0, vine.p.length - 65); // leave the last 300 points
        vine.p.push({x: vine.x, y: vine.y}); // add a point to each vine
        if(frame % 30 == 0) {
          vine.ai = Math.random() - 0.5;
        }
        if(vine.w > 5 && Math.random() < 0.02 && vines.length < 60) {
          // position of new vine same as position of current vine
          vines.push({
            x: vine.x,
            y: vine.y,
            a: vine.a,
            ai: vine.ai,
            w: Math.random() * 4 + 3,
            p: [],
            l: Math.min(4096, 0 | vine.w * 32 * (1 + Math.random()))
          });
        }
      });
    }

    // render visual
    canvas.height = 512;
    canvas.width = 512;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    vines.forEach(vine => {
      if(vine.w == 8) {
        ctx.translate(-vine.x, -vine.y);
      }
      ctx.beginPath();
      l = vine.p.length - 1;
      for(i = l; p = vine.p[i]; i--) {
        ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    });
  }
};
