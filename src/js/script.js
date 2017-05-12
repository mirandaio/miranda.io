import animateVines from './vines';
import './../css/styles.css';

const canvas = document.getElementById('canvas');
animateVines(canvas);

const navList = document.querySelector('.nav-list');
const container = document.querySelector('.container');

const updateView = (function() {
  const viewCache = {};
  return function(view, cb) {
    if(viewCache[view]) {
      container.innerHTML = viewCache[view];
      if(cb) {
        cb(view);
      }
    } else {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function(e) {
        viewCache[view] = e.target.response;
        container.innerHTML = viewCache[view];
        if(cb) {
          cb(view);
        }
      });
      xhr.open('GET', view + '.html');
      xhr.send();
    }
  };
}());

window.addEventListener('popstate', (e) => {
  updateView(e.state);
});

navList.addEventListener('click', e => {
  if(e.target !== e.currentTarget) {
    e.preventDefault();
    const view = e.target.getAttribute('href');
    if(otherView(view, window.location.pathname)) {
      updateView(view, updateURL);
    }
  }
});

function updateURL(view) {
  const path = view === '/about' ? '/' : view;
  window.history.pushState(view, '', path);
}

function otherView(view, path) {
  return (view === '/about' && path !== '/') ||
    (view !== '/about' && view !== path);
}
