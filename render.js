var vx = vx || {};

vx.render = function(state) {
  // let's be stupid right now and just take the first slice.
  // later we should have offsets that make this work better
  // and let us scroll through it.
  var slice = state.world[0];
  var ctx = state.context;

  var pixelsPerCellWidth = state.canvas.width / slice[0].length;
  var pixelsPerCellHeight = state.canvas.height / slice.length;
  for(var y = 0; y < slice.length; ++y) {
    for(var x = 0; x < slice[y].length; ++x) {
      var t = slice[y][x];
      if(t > 0) {
        ctx.fillStyle = vx.mapCodeToColour(t);
        ctx.fillRect(x * pixelsPerCellWidth, y * pixelsPerCellHeight, pixelsPerCellWidth, pixelsPerCellHeight);
      }
    }
  }
};

/// maps one of the 0..9 codes to a colour
vx.mapCodeToColour = function(code) {
  var map = {};
  map[0] = undefined;
  map[1] = 'red';
  map[2] = 'green';
  map[3] = 'purple';
  map[4] = 'orange';
  map[5] = 'blue';
  map[6] = 'white';
  map[7] = 'black';
  map[8] = 'teal';
  map[9] = 'crimson';
  return map[code];
};
