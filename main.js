var vx = vx || {};
vx.step = function(state) {
  // blot out the screen
  state.context.clearRect(0, 0, state.canvas.width, state.canvas.height);
  // draw the voxel world
  vx.render(state);
  // get input
  // do whatever updates we need
};

/// launcher function
vx.go = function() {
  state = {};
  state.canvas = document.getElementById('theatre');
  state.canvas.width = window.innerWidth;
  state.canvas.height = window.innerHeight;
  state.context = state.canvas.getContext('2d');
  state.world = vx.generateCubeWorld(100, 100, 100);
  var stepThunk = function(s) {
    return function() { vx.step(s); }
  }(state);
  setInterval(stepThunk, 100);
};

window.onload = window.onresize = function() {
  canvas = document.getElementById('theatre');
  // resize to full screen.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
