var vx = vx || {};

vx.makeCubeWorldArray = function(width, height, depth) {
  var output = new Array(depth);
  for(var z = 0; z < depth; ++z) {
    var slice = new Array(height);
    for(var y = 0; y < height; ++y) {
      slice[y] = new Array(width);
    }
    output[z] = slice;
  }
  return output;
};

vx.generateCubeWorld = function(width, height, depth) {
  // TODO: seeded random
  var box = vx.makeCubeWorldArray(width, height, depth);
  for(var z = 0; z < depth; ++z) {
    for(var y = 0; y < height; ++y) {
      for(var x = 0; x < width; ++x) {
        if(Math.random() * 25 > 6) {
          box[z][y][x] = Math.floor(Math.random() * 10);
        }
        else {
          box[z][y][x] = 0; // hole
        }
      }
    }
  }
  return box;
};
