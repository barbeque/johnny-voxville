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
    for(var y = 0; y < 9; ++y) {
      for(var x = 0; x < width; ++x) {
        if(Math.random() * 25 > 18) {
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

/// Add a spike to the map for testing purposes.
vx.addSpike = function(cubeWorldArray, x, z, height) {
  // Just hardcode the value we're setting, I guess?
  for(var y = 0; y < height; ++y) {
    cubeWorldArray[z][y][x] = 1;
  }
};

/// Add a sphere to the geometry
vx.addSphere = function(cubeWorldArray, target_x, target_y, target_z, radius, set_to) {
  // TODO: wow can this ever be done better
  var squared_distance = function(x1, y1, z1, x2, y2, z2) {
    var dx = x2-x1; var dy = y2-y1; var dz = z2 - z1;
    return dx*dx + dy*dy + dz*dz;
  };
  var squared_radius = radius * radius;

  for(var z = 0; z < cubeWorldArray.length; ++z) {
    for(var y = 0; y < cubeWorldArray[z].length; ++y) {
      for(var x = 0; x < cubeWorldArray[z][y].length; ++x) {
        if(squared_distance(target_x, target_y, target_z, x, y, z) < squared_radius) {
          cubeWorldArray[z][y][x] = set_to;
        }
      }
    }
  }
};
