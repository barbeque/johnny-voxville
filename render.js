var vx = vx || {};

vx.render = function(state) {
  // Back to front.
  for(var z = state.world.length - 1; z >= 0; z--) {
    vx.renderSlice(state, z);
  }
};

vx.renderSlice = function(state, slice_level) {
  // let's be stupid right now and just take the first slice.
  // later we should have offsets that make this work better
  // and let us scroll through it.
  var slice = state.world[slice_level];
  var ctx = state.context;
  var max_depth = state.world.length - 1;

  var scaled_width = state.canvas.width - state.canvas.width * (slice_level / max_depth);
  var scaled_height = state.canvas.height - state.canvas.height * (slice_level / max_depth);

  var pixelsPerCellWidth = scaled_width / slice[0].length;
  var pixelsPerCellHeight = scaled_height / slice.length;

  var xOffset = (state.canvas.width - scaled_width) * 0.5;
  var yOffset = (state.canvas.height - scaled_height) * 0.5;

  for(var y = 0; y < slice.length; ++y) {
    for(var x = 0; x < slice[y].length; ++x) {
      var t = slice[y][x];
      if(t > 0) {
        ctx.fillStyle = vx.mapCodeToColour(t);
        ctx.fillRect(xOffset + x * pixelsPerCellWidth, yOffset + y * pixelsPerCellHeight,
          pixelsPerCellWidth, pixelsPerCellHeight);
      }
    }
  }
}

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
