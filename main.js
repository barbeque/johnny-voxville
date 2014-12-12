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
  vx.addSpike(state.world, 6, 6, 30); // add something interesting
  vx.addSphere(state.world, 6, 30, 6, 10, 1); // add a lollipop.
  for(var i = 0; i < 10; ++i) {
    var x = Math.floor(Math.random() * state.world[0][0].length);
    var z = Math.floor(Math.random() * state.world.length);
    vx.addSphere(state.world, x, 10, z, 10, 0); // blow a hole in the world.  
  }
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
