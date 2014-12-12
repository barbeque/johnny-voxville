var vx = vx || {};
vx.step = function(state) {
  // blot out the screen
  state.context.clearRect(0, 0, state.canvas.width, state.canvas.height);
  // draw the voxel world
  state.context.beginPath();
  state.context.moveTo(100, 150);
  state.context.lineTo(450, 50);
  state.context.stroke();
  // get input
  // do whatever updates we need
};

/// launcher function
vx.go = function() {
  state = {};
  state.canvas = document.getElementById('theatre');
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
