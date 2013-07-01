//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.shuffle = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array;
};

//>>excludeStart("amd", pragmas.amd)
return d3.shuffle;
});
//>>excludeEnd("amd")