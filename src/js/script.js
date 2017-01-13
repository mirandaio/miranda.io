import animateVines from './vines';

var canvas = document.getElementById('canvas');
animateVines(canvas);

var navList = document.querySelector('.nav-list');
var container = document.querySelector('.container');
var path = window.location.pathname;
var initialView = resolveView(path);

function resolveView(path) {
  var validFiles = ['/projects', '/resume', '/contact'];
  if(validFiles.includes(path)) {
    return path;
  }
  return '/about';
}

var updateView = (function() {
  var viewCache = {};
  return function(view, cb) {
    if(viewCache[view]) {
      container.innerHTML = viewCache[view];
      if(cb) {
        cb(view);
      }
    } else {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function(e) {
        viewCache[view] = e.target.response;
        container.innerHTML = viewCache[view];
        if(cb) {
          cb(view);
        }
      });
      xhr.open('GET', 'views' + view + '.html');
      xhr.send();
    }
  };
}());

updateView(initialView, function() {
  window.history.replaceState(initialView, '', path);
});

window.addEventListener('popstate', function(e) {
  updateView(e.state);
});

navList.addEventListener('click', function(e) {
  if(e.target !== e.currentTarget) {
    e.preventDefault();
    var view  = e.target.getAttribute('href');
    if(otherView(view, window.location.pathname)) {
      updateView(view, updateURL);
    }
  }
});

function updateURL(view) {
  var path = view === '/about' ? '/' : view;
  window.history.pushState(view, '', path);
}

function otherView(view, path) {
  return (view === '/about' && path !== '/') ||
    (view !== '/about' && view !== path);
}
