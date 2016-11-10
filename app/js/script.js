window.onload = function() {
  var nav = document.querySelector('nav');
  var container = document.querySelector('.container');

  nav.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
    console.log(e.target.getAttribute('href'));
  });

  function updateView(view, cb) {
    var url = view.split('.')[0];
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(e) {
      container.innerHTML = e.target.response;
      cb();
    });
    xhr.open('GET', view);
    xhr.send();
  }

  updateView('about.html', function() {
    window.history.replaceState('about', '');
  });

  // Animation code

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var frame = 0;
  var lastFrameTime = 0;

  var vines = vines = [{
    x: 0,
    y: 0,
    a: 2 * Math.PI * Math.random(),
    da: 0,
    width: 8,
    points: [],
    lifetime: Infinity
  }];
  
  window.requestAnimationFrame(update);

  function update(time) {
    window.requestAnimationFrame(update);

    var delta = time - lastFrameTime;

    // if it's been less than 16ms (60fps) since last frame, don't
    // do anything and return
    if(delta < 16) {
      return;
    }

    lastFrameTime = time;
    frame++;

    // update
    vines = vines.filter(function(vine) {
      return vine.lifetime--
    });
    vines.forEach(function(vine) {
      dx = Math.cos(vine.a) * vine.width / 2;
      dy = Math.sin(vine.a) * vine.width / 2;
      vine.x += dx;
      vine.y += dy;
      vine.a += vine.da / vine.width / 2;
      vine.points.splice(0, vine.points.length - vine.lifetime);
      vine.points.splice(0, vine.points.length - 65); // leave last 65 points
      vine.points.push({x: vine.x, y: vine.y}); // add a point to each vine

      // every 30 frames change the angle increment
      if(frame % 30 == 0) {
        vine.da = Math.random() - 0.5;
      }

      if(vine.width > 5 && Math.random() < 0.02 && vines.length < 60) {
        // position of new vine same as position of current vine
        vines.push({
          x: vine.x,
          y: vine.y,
          a: vine.a,
          da: vine.da,
          width: Math.random() * 4 + 3,
          points: [],
          lifetime: Math.min(4096, 0 | vine.width * 32 * (1 + Math.random()))
        });
      }
    });

    // render
    canvas.height = 512;
    canvas.width = 512;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    vines.forEach(function(vine) {
      if(vine.width == 8) {
        ctx.translate(-vine.x, -vine.y);
      }

      ctx.beginPath();
      l = vine.points.length - 1;
      for(i = l; p = vine.points[i]; i--) {
        ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    });
  }
};
